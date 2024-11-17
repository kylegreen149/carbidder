from app import app
from models import db, Car


with app.app_context():

    Car.query.delete()
    # data = request.get_json()

    # Post new car from submitted form
    car1 = Car(display_image = "https://www.corvsport.com/wp-content/uploads/2022/09/2023-Chevrolet-Corvette-Z06-orange.jpg",
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
    
    car2 = Car(display_image = "https://media.ed.edmunds-media.com/gmc/hummer-ev-suv/2025/oem/2025_gmc_hummer-ev-suv_4dr-suv_3x_fq_oem_1_1600.jpg",
               color = "Silver",
               year = "2025",
               brand = "GMC",
               model = "Hummer EV",
               body_style = "SUV",
               type = "Electric",
               transmission = "Semi-automatic Transmission",
               mileage = 1718,
               top_speed = 112,
               accident_history = "No",
               current_condition = "Excellent",
               modifications = "Window Tints, Interior LED Lighting",
               car_report = """This car is great in terms of design an being very flashy. 
               Just sitting in the driver's seat feels like pure luxury. 
               However, the brakes are noisy and the pedal has little feedback. 
               It takes 142 feet to stop from 60 miles per hour, and that can be pretty annoying.""",
               bids = 12,
               starting_bid_price = 78500,
               current_bid_price = 92200)
    
    car3 = Car(display_image = "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/c51905b0000b639a185eeb080dd879bf007f5604/photos/KPyd0vmQ-oeaatEeh2l-(edit).jpg?t=167497900563",
               color = "Blue",
               year = "2021",
               brand = "Chevrolet",
               model = "Camaro ZL1 Coupe",
               body_style = "Coupe",
               type = "Gas",
               transmission = "Auto-manual Transmission",
               mileage = 32605,
               top_speed = 198,
               accident_history = "No",
               current_condition = "Excellent",
               modifications = "Lowering Springs, Downpipes, Bottom Lip, Spoiler, Window Tints",
               car_report = """This is my son's car. He is in high school. 
               To him, driving this car is super fun, too fun to the point where he has over $5000 in speeding tickets and ran through red lights. 
               Please bid on this car for a great price so I can invest in a car from '95 for my son or something. 
               He is super irresponsible and he needs to realize that he is not Dom Toretto from Fast and Furious.""",
               bids = 15,
               starting_bid_price = 62000,
               current_bid_price = 86000)
    
    car4 = Car(display_image = "https://bringatrailer.com/wp-content/uploads/2020/10/2015_dodge_challenger_srt_hellcat_1604150952f98764da2015_dodge_challenger_srt_hellcat_1604150951cfcd27797a85e-d755-4713-b048-e1495740e96c-M5Xhnk-scaled.jpg?fit=940%2C627",
               color = "Black",
               year = "2015",
               brand = "Dodge",
               model = "Hellcat SRT 6-Speed",
               body_style = "Coupe",
               type = "Gas",
               transmission = "Auto-manual Transmission",
               mileage = 110682,
               top_speed = 204,
               accident_history = "Yes",
               current_condition = "Good",
               modifications = "Tinted Windows, Downpipes, BOSE Sound System",
               car_report = """The first ever car I drove. Had a lot of memories with this car. 
               The car is fast, super comfortable, and was always reliable. 
               The only flaw about this car is that you have to refuel often, but other than that, great ride! 
               I recently installed a new sound system, it makes riding down the highway with music blasting 10x more fun. 
               Also the only accident I was ever in was when I crashed into somebody's bumper while going 10 mph. 
               Didn't mean to crash, but the girl at the crosswalk was so pretty I became hypnotized (she became my wife)""",
               bids = 19,
               starting_bid_price = 29000,
               current_bid_price = 48000)
    
    car5 = Car(display_image = "https://www.motortrend.com/uploads/sites/11/2012/02/2012-ford-F150-EcoBoost-front-left-side-view.jpg",
               color = "Gray",
               year = "2012",
               brand = "Ford",
               model = "F-150 EcoBoost",
               body_style = "Pick Up Truck",
               type = "Gas",
               transmission = "Semi-automatic Transmission",
               mileage = 158340,
               top_speed = 92,
               accident_history = "Yes",
               current_condition = "Fair",
               modifications = "Apple CarPlay",
               car_report = """Great for carrying heavy loads if you have to constantly move things around a lot. 
               I was never involved in an accident, but a tree fell on my car after a heavy rain storm. #Pain. 
               Still good enough to use, but since I retired from my construction job, there is no use for me to have a pick-up anymore.""",
               bids = 6,
               starting_bid_price = 18500,
               current_bid_price = 22000)

    car6 = Car(display_image = "https://thedriven.io/wp-content/uploads/2022/01/tesla-model-3-long-range-brighton.jpg",
               color = "Blue",
               year = "2022",
               brand = "Tesla",
               model = "Model 3",
               body_style = "Sedan",
               type = "Electric",
               transmission = "Semi-automatic Transmission",
               mileage = 26000,
               top_speed = 140,
               accident_history = "No",
               current_condition = "Excellent",
               modifications = "None",
               car_report = """There is nothing wrong with this car, and as much as I want to save the environment, 
               I will not do it by driving an electric car. 
               I like to push the speed limit and it takes some time for the car to speed up. 
               Just not for me, but maybe for you. Hopefully. Get this off my hands please.""",
               bids = 3,
               starting_bid_price = 56000,
               current_bid_price = 59200)
    
    car7 = Car(display_image = "https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/224865fcf1349ec53e0faac653358675b6461a0e/photos/r4R67WZV-10n9sD1H0N-(edit).jpg?t=170854045682",
               color = "Black",
               year = "2011",
               brand = "Maserati",
               model = "Granturismo",
               body_style = "Convertible",
               type = "Gas",
               transmission = "Semi-automatic Transmission",
               mileage = 104950,
               top_speed = 177,
               accident_history = "No",
               current_condition = "Excellent",
               modifications = "Custom paint job",
               car_report = """If you tryna get chicks, just buy this car off of me. 
               I am retired from being a playa, a pimp. 
               This girl I like said that if I really love her and want to settle down, I must sell this car. 
               That is what I am currently doing. 
               Awesome ride though, drive it on the highway late at night, it's a movie.""",
               bids = 25,
               starting_bid_price = 19000,
               current_bid_price = 40000)
    
    car8 = Car(display_image = "https://www.motortrend.com/uploads/sites/5/2015/05/2015-Honda-CR-V-Touring-AWD-front-three-quarter-04-e1472775032285.jpg",
               color = "Blue",
               year = "2015",
               brand = "Honda",
               model = "CR-V",
               body_style = "Hatchback",
               type = "Gas",
               transmission = "Semi-automatic Transmission",
               mileage = 82304,
               top_speed = 120,
               accident_history = "No",
               current_condition = "Excellent",
               modifications = "None",
               car_report = """I'm having my 8th child and this car is just too small. 
               Great ride, especially if you like to go on road trips.""",
               bids = 4,
               starting_bid_price = 22000,
               current_bid_price = 25250)

    db.session.add_all([car1, car2, car3, car4, car5, car6, car7, car8])
    db.session.commit()
