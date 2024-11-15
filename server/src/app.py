from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
import ipdb

from models import db, Car, Bids

from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///car.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
CORS(app, supports_credentials=True)

db.init_app(app)


@app.route('/')
def index():
    return '<h1>Car Bidder™</h1>'

@app.route('/cars', methods=['GET', 'POST'])
def cars():
    if request.method == 'GET':
        return [cars.to_dict() for cars in Car.query.all()], 200
    
    elif request.method == 'POST':
        data = request.get_json()

        try:
            new_car = Car(display_image = data.get('display_image'), color = data.get('color'), year = data.get("year"), 
            brand = data.get("brand"), model = data.get("model"), body_style = data.get("body_style"), type = data.get("type"),
            transmission = data.get('transmission'), mileage = data.get('mileage'), top_speed = data.get('top_speed'), 
            accident_history = data.get('accident_history'), current_condition = data.get('current_condition'), 
            modifications = data.get('modifications'), car_report = data.get("car_report"), bids = 0, 
            starting_bid_price = data.get('starting_bid_price'), current_bid_price = data.get('starting_bid_price'))
        except ValueError:
            return {"errors": ["Invalid data"]}, 400

        db.session.add(new_car)  # Add the new car to the session
        db.session.commit()  # Commit the changes to the database
        return new_car.to_dict(), 201

@app.route('/cars/<int:id>', methods=['GET', 'POST', 'PATCH'])
def update_car(id):
    if request.method == 'GET':
        car = Car.query.filter(Car.id == id).first()
        if car != None:
            return car.to_dict()
        else:
            return {"error": "Car not found"}, 404

    elif request.method == 'PATCH':
        data = request.get_json()
        # ipdb.set_trace()
        updated_car = Car.query.filter_by(id = id).first()
        updated_car.bids += 1
        updated_car.current_bid_price = data.get("current_bid_price")
        db.session.add(updated_car)
        db.session.commit()
        return updated_car.to_dict()
    
@app.route('/my_bids', methods=["GET", "POST"])
def post_bids():
    if request.method == "GET":
        cars = []
        bids = Bids.query.all()
        car_ids = set()
        for bid in bids:
            car_ids.add(bid.car_id)
        for car_id in car_ids:
            cars.append(Car.query.filter(Car.id == car_id).first())
        return [c.to_dict() for c in cars], 200

    elif request.method == "POST":
        data = request.get_json()
        try:
            new_bid = Bids(car_id = data.get("car_id"))
        except ValueError:
            return {"errors": ["Invalid data"]}, 400

        db.session.add(new_bid)  # Add the new car to the session
        db.session.commit()  # Commit the changes to the database
        return new_bid.to_dict(), 201 


if __name__ == '__main__':
    app.run(port=5555, debug=True)