var moment = require("moment");
var COMMEMORATION_DAYS = require('./commemoration-days-repository.json');

var Commy = function () {

  this.formatCdDate = function (mom) {
    return mom.format('dddd, MMMM Do');
  };

  this.getRandomCd = function () {
    var randomDayIndex = Math.floor(Math.random() * COMMEMORATION_DAYS.length);
    return COMMEMORATION_DAYS[randomDayIndex];
  };

  this.filterTodaysCds = function (referenceMom) {
    return COMMEMORATION_DAYS.filter(function (cd) {
      return cd.month == referenceMom.month() + 1 && cd.day == referenceMom.date();
    })
  };

  this.concatCdNames = function (cds) {
    var speech = "";
    for (var i = 0; i < cds.length; i++) {
      speech += " <break time=\"1s\"/> "+nth(i+1)+": the " + cds[i].name;
    }
    return speech;
  };

  function nth(n){
    var ending = ["st","nd","rd"][((n+90)%100-10)%10-1]||"th";
    return n + ending;
  }
};

module.exports = Commy;