from app import app
from models import db, Car
import request

with app.app_context():

    Car.query.delete()
    data = request.get_json()

    # Post new car from submitted form
    car1 = Car(image = data.get('image'), name = data.get('name'), milage = data.get('milage'), top_speed = data.get('top_speed'), 
               accident_history = data.get('accident_history'), modifications = data.get('modifications'), 
               bids = 0, starting_bid_price = data.get('starting_bid_price'), current_bid_price = data.get('starting_bid_price'))

    db.session.add_all([car1])
    db.session.commit()
