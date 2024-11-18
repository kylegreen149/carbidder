# CarBidder.com: The Ultimate Car Bidding Site
CarBidder is a full stack web application that orginated from my love for cars at an early age. The website enables users to place bids on their desired cars and also offers them the opportunity to list their own cars for auction. For a demonstration on how to use the site, visit this link: https://youtu.be/kSi8Ae3fa4A

## Primary Features
The Carbidder.com website sports the following features:
- **Navigation Bar:** Allows you to visit different parts of the website without sending multiple server requests
- **Search Bar:** Helps you search for cars that are already up for auction
- **Place Bid Button:** When clicked, the current bid price goes up by a minimum of $500, or a users custom amount, and the number of bids increases by 1
- **My Bids:** Every car that you place a bid on will be seen when you click to "My Bids" in the navigation bar.
- **Auction Car Form:** Allows uses to auction off their own cars after all input fields have been filled in

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