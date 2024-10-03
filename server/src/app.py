from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate

from models import db, Car

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
            new_car = Car(image = data.get('image'), name = data.get('name'), mileage = data.get('mileage'), 
            top_speed = data.get('top_speed'), accident_history = data.get('accident_history'), 
            modifications = data.get('modifications'), bids = 0, starting_bid_price = data.get('starting_bid_price'), 
            current_bid_price = data.get('starting_bid_price'))
        except ValueError:
            return {"errors": ["Invalid data"]}, 400

        db.session.add(new_car)  # Add the new car to the session
        db.session.commit()  # Commit the changes to the database
        return new_car.to_dict(), 201

@app.route('/cars/<int:id>', methods=['GET', 'PATCH'])
def update_car(id):
    if request.method == 'GET':
        car = Car.query.filter(Car.id == id).first()
        return car.to_dict()
    elif request.method == 'PATCH':
        data = request.get_json()
        updated_car = Car.query.filter_by(id = id).first()
        updated_car.bids += 1
        updated_car.current_bid_price += 500 # data.get("current_bid_price")
        db.session.add(updated_car)
        db.session.commit()
        return updated_car.to_dict()
    


if __name__ == '__main__':
    app.run(port=5555, debug=True)