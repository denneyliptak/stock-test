'use strict';

/*
 * The market is the place where investors can buy and sell stocks ONLY when the
 * market is open. The market can also impact the growthRate of individual stocks.
 */

var Market = function (stocks, investors) {
  this.stocks = stocks;
  this.investors = investors;
  this.isOpen = true;
};

module.exports = Market;
