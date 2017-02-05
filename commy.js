var COMMEMORATION_DAYS = require('./commemoration-days-repository.json');

var Commy = function () {

  this.formatCdDate = function (mom) {
    return new Date(new Date().getFullYear(), mom.month - 1, mom.day - 1, 0, 0, 0, 0);
  };

  this.getRandomCd = function () {
    var randomDayIndex = Math.floor(Math.random() * COMMEMORATION_DAYS.length);
    return COMMEMORATION_DAYS[randomDayIndex];
  };

  this.filterCurrentCds = function (referenceMom) {
    return COMMEMORATION_DAYS.filter(function (cd) {
      return cd.month == referenceMom.month() + 1 && cd.day == referenceMom.date();
    })
  };
};

module.exports = Commy;