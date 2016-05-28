# SolidFire Front-end Web Development Assignment

The goal of this assignment is to develop a simple dashboard for viewing and managing an investment portfolio in Angular.js.
We have supplied the start of a simple web server (express.js) and outlined the framework for the underlying "stock market".
You may design the dashboard however you want, but the finished assignment should have the following features/functionality:

- Unit tests in a common BDD framework
- End-to-end tests using protractor (at a minimum testing form submission and basic display)
- Gulp tasks to replace the node scripts in package.json
- On app load, prompt the user to select an investor or create one if none exist
- Single page app with 3 views (you may use a routing library to navigate views or just divide up the page into 3 sections)

**A Market View:** that displays all of the stocks in the market. This view should:

- Automatically update the information of all stocks on a 5 second time interval
- Display the following information for each stock (at a minimum):
    - Symbol
    - Current price
    - Last purchase price
    - Day's high and low prices
    - A historical graph of stock price for the past 3 days ("days" are defined by the opening and closing of the market)
    - You can add other statistical data and/or graphs if you want

**An Investor View:** for monitoring and managing the current investors stocks. This view should:

- Automatically update the information of the investor's stocks on a 5 second time interval
- Display basic information on the current investor including (at a minimum):
    - name
    - remaining capital
    - recent trades
    - gains/losses
    - Again feel free to add any other statistical data and/or graphs
- Include a form for buying and selling stocks. This form should:
    - Validate the user input on fields like stock quantity and remaining investor capital
    - Display an error message if attempting to buy/sell when the market is closed

**A Management View:** for configuring the stock market. This view should allow the user to:

- Create a new investor
- Change the current investor
- Create/add stocks to the market
- Edit any individual stock on the following attributes:
    - growthRate
    - price and quantity (See notes below)
- Apply "market shifts" (some factor applied to the growthRate of all stocks)
- Change the "auto-update" time interval used in the other two views from 5 seconds to something else
- Open and close the market (prevents investor trading and marks the end of a "day" for statistical purposes)

**Note:** Edits to stock price and quantity must not change the overall value of a stock (value = price * quantity).
i.e. If the edit is trying to double the quantity of a stock, then the price must be cut in half to keep the current overall value (a.k.a. stock split).

**Note:** Edits to stock prices and quantity should also be reflected throughout all investors portfolios.
- e.g if investor Bob has 2 shares of a stock priced at $10 and the stock splits (double the quantity for half the price) he would then have 4 shares at a price of $5



When you are finished, create a pull request for your branch in the forked Bitbucket repo. You can comment on your pull
request via Bitbucket to clarify anything if needed. We will not look at your code until you are finished and have submitted a pull request, however your commit history may be helpful in understanding your thought process and development habits.


**Things we will be looking for in your code:**

- Testing (behavior driven development / test driven development)
- The minimum required functionality
- Code quality on:
    - Basic Angular concepts (directives, services, bindings, etc.)
    - Basic JavaScript concepts (higher order functions, handling of asynchronous functions)
    - Basic HTML and CSS concepts
    - Server API design
- Ability to use charting libraries such as c3/d3
- Understanding of GIT and branching
- Working gulp tasks to run tests, start your servers and build a production-ready app

**Things we are not looking for:**

- Pixel perfect design 
- User experience flow
- A specific code coverage percentage for your unit and e2e tests

**This project is designed to be open ended. Feel free to:**

- Add, remove, edit any of the existing code framework
- Use any additional third party libraries
- Use bower for package management (in addition to or in replace of npm)
- Use compilers for your html and/or css (such as HAML, LESS, etc.)
- Use another unit testing framework such as Mocha (just replace the existing jasmine dependency)
- Use a test runner such as Karma
- Use a BDD tool for e2e test such as cucumber
- Use Grunt instead of Gulp (just be sure to construct similar tasks to those outlined in the existing Gulpfile)

## Setup

### Clone Forked Bitbucket Repo

    git clone git@bitbucket.org:charlie_sojka_netapp/stock-test.git

### Install NodeJS

Install a current version of NodeJS according to the [instructions](http://nodejs.org/download/).

### Install Dependencies

    npm install

### Start Your Dev Server

    npm run startDev

### Configure Your Stock Market and Start Dev Server

    npm run startMyMarket

### Check It Out in a Browser

Check out the running application by opening it in your web browser: [http://localhost:3000/](http://localhost:3000/)

### Unit Test Your Code

    npm run unitTest

### End-to-end Test Your Code

    webdriver-manager update
    
    webdriver-manager start
    
    npm run e2eTest