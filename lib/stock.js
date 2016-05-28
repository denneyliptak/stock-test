'use strict';

/*
 * The basic building blocks of the market which can be bought and sold by investors
 * at a price that naturally changes over time based on its current growthRate in addition
 * to other market influences. The calculated value of a stock (quantity * price) should never
 * be manually adjusted (i.e. if the quantity doubles the price should be cut in half).
 */
var Stock = function (symbol, price, quantity, growthRate) {
  this.symbol = symbol;
  this.price = price;
  this.quantity = quantity;
  this.growthRate = growthRate;
};

/*
 * Mimics the process of getting a quote for a stock
 * by first letting it naturally change its price and
 * returning a timestamped price after a small processing delay
 */
Stock.prototype.getQuote = function(callback) {
  var self = this,
      quoteProcessingDelay = 2000;

  setTimeout(function() {
    self.naturalChangeToStockPrice();
    callback({ price: self.price, timestamp: new Date() });
  }, quoteProcessingDelay);
};

/*
 * Mimics the natural change of a stock price over time by a small
 * random percentage (+/- 5) from its current growthRate
 */
Stock.prototype.naturalChangeToStockPrice = function() {
  var randomChange = (Math.floor(Math.random() * 6) - 5) / 100;
  this.price = this.price * (this.growthRate + randomChange);
};

module.exports = Stock;
