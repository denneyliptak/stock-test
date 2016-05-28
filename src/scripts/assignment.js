'use strict';

angular.module('app', [])
  .controller('appCtrl', ['$http',  function($http) {
    var self = this;

    self.chartConfig = {
      bindto: '#quote-chart',
      data: {
        x: 'timestamp',
        columns: [
          ['price'],
          ['timestamp']
        ]
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%H:%M:%S'
          }
        }
      }
    }

    self.quoteChart = c3.generate(self.chartConfig);

    self.updateQuote = function() {
      $http({ method: 'GET', url: '/stock/quote' })
        .success(function(quote) {
          self.quotePrice = quote.price;
          self.chartConfig.data.columns[0].push(quote.price);
          self.chartConfig.data.columns[1].push(new Date(quote.timestamp));
          self.quoteChart.load({columns: self.chartConfig.data.columns});
        });
    };

    self.updateQuote();
  }]);