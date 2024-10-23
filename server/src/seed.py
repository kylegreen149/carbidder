from app import app
from models import db, Car


with app.app_context():

    Car.query.delete()
    # data = request.get_json()

    # Post new car from submitted form
    car1 = Car(image = "https://www.corvsport.com/wp-content/uploads/2022/09/2023-Chevrolet-Corvette-Z06-orange.jpg",
               color = "Orange",
               year = "2023",
               brand = "Chevrolet",
               model = "Corvette Z06",
               body_style = "Coupe",
               type = "Gas",
               transmission = "Dual-clutch Transmission (DCT)",
               mileage = 17059,
               top_speed = 195,
               accident_history = "No",
               current_condition = "Excellent",
               modifications = "None",
               car_report = """This car stands out for its exhilarating performance and striking design. Powered by a naturally aspirated 
               5.5-liter V8 engine, it produces a thrilling 670 horsepower, delivering breathtaking acceleration and a spine-tingling 
               exhaust note. Its lightweight chassis and advanced suspension system enhance handling, making it agile and responsive 
               on both the track and the road. This car is still very new, works to perfection, and can go to a lucky bidder like you.
               I am only putting this car up for auction because I have a new addition to the family, and need a bigger car lol.""",
               bids = 18,
               starting_bid_price = 85000,
               current_bid_price = 94000)

    db.session.add_all([car1])
    db.session.commit()
