# Carbidder.com: The Honest Car Bidding Site
Welcome to CarBidder.com, where the thrill of the auction meets the roar of the engine. Picture this: rows of sleek cars, each with a story to tell, waiting for their next owner. Whether you’re a seasoned gearhead or just someone who appreciates the symphony of horsepower, our virtual showroom is your pit stop for adrenaline-fueled bidding.

At CarBidder.com, we’ve turbocharged the car-buying experience. Bid on classics that whisper tales of open highways, or chase down modern marvels that redefine speed limits. From vintage roadsters to futuristic hybrids, our inventory is as diverse as your taste in music playlists (because let’s face it, every great drive needs a killer soundtrack). Explore every detail about all the cars up for auction: from the sweet modifications added to the cars over the years to even its accident history. Carbidder has it all!

So rev up those engines, fellow enthusiasts! CarBidder.com isn’t just about transactions; it’s about igniting passion, one bid at a time. Buckle up, because the road ahead is paved with horsepower dreams and chrome-coated possibilities.

Happy bidding, and may the torque be with you!

## Setup
Starting with the backend, install the dependencies by first navigating to the server folder
### `cd server/`
### `pipenv install`
Then run the following commands:
### `pipenv shell`
### `cd src/`
### `export FLASK_APP=app.py`
### `export FLASK_RUN_PORT=5555`
### `flask run`
VS Code will ask if you want to open in your default browser, click "Open in Browser".

In a new terminal in VS Code, run the following command:
### `npm install`
### `npm start`
VS Code will ask if you want to open in your default browser, click "Open in Browser".

## Features
The Carbidder.com website sports the following features:
- **Navigation Bar:** Allows you to visit different parts of the website without sending multiple server requests
- **Search Bar:** It helps you search for cars that are already up for auction
- **Place Bid Button:** When clicked, the current bid price goes up by $500, and the number of bids increases by 1
- **Auction Car Form:** Allows uses to auction off their own cars after all input fields have been filled in