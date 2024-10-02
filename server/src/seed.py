from app import app
from models import db, Car


with app.app_context():

    Car.query.delete()
    # data = request.get_json()

    # Post new car from submitted form
    car1 = Car(image = "https://www.corvsport.com/wp-content/uploads/2022/09/2023-Chevrolet-Corvette-Z06-orange.jpg",
               name = "2023 Chevrolet Corvette Z06",
               mileage = 17059,
               top_speed = 195,
               accident_history = "None",
               modifications = "None",
               bids = 18,
               starting_bid_price = 85000,
               current_bid_price = 94000)

    db.session.add_all([car1])
    db.session.commit()
