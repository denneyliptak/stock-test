'use strict';

var express = require('express');
var app = express();

/* Basic building blocks for the stock market backend */
var Stock = require('./lib/stock');
var Investor = require('./lib/investor');
var Market = require('./lib/market');

/* Gather input from node command line params */
var stockType = process.argv[2];
var investorGroup = process.argv[3];

/* Pre-defined stock market configurations */
var createStocks = function() {
  var ntap = new Stock('NTAP', 26.31, 8000, 1.03);
  var goog = new Stock('GOOG', 726.65, 5000, 0.98);

  switch(stockType) {
    case('tech'):
      console.log('Loading Tech Stocks into the market...');
      return [ntap, goog];
    default:
      return [ntap];
  }
};

var createInvestors = function() {
  var dan = new Investor('Dan', 150000);
  var rich = new Investor('Rich', 475000);

  switch(investorGroup) {
    case('rich'):
      console.log('Placing Rich Investors into the market...');
      return [dan, rich];
    default:
      return [];
  }
};

var stocks = createStocks();
var investors = createInvestors();
var myMarket = new Market(stocks, investors);

/* Example route - add your own routes to interact with your stock market */
app.get('/stock/quote', function (req, res) {
  myMarket.stocks[0].getQuote(function(quote) {
    res.send(quote);
  });
});

/* Starting the Express.js server instance */
app.use(express.static('src'));
app.listen(3000, function () {
  console.log('Stock Market Dev Server is now listening on port 3000!');
});