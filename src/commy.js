var moment = require("moment");
var COMMEMORATION_DAYS = require('./commemoration-days-repository.json');

var Commy = function () {

  this.getRandomCd = function () {
    var randomDayIndex = Math.floor(Math.random() * COMMEMORATION_DAYS.length);
    return COMMEMORATION_DAYS[randomDayIndex];
  };

  this.filterTodaysCds = function (referenceMom) {
    return COMMEMORATION_DAYS.filter(function (cd) {
      return cd.month == referenceMom.month() + 1 && cd.day == referenceMom.date();
    })
  };

};

module.exports = Commy;