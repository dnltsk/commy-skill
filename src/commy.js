var moment = require("moment");
var COMMEMORATION_DAYS = require('./commemoration-days-repository.json');

var Commy = function () {

  this.filterCdsOfDay = function (referenceMom) {
    return COMMEMORATION_DAYS.filter(function (cd) {
      return cd.month == referenceMom.month() + 1 && cd.day == referenceMom.date();
    })
  };

  this.filterUpcomingCds = function (referenceMom) {
    var upcomingMoment = this.findUpcomingMoment(referenceMom);
    return this.filterCdsOfDay(upcomingMoment);
  };

  this.findUpcomingMoment = function (referenceMom) {
    var nearestMoment = null;
    for (var i = 0; i < COMMEMORATION_DAYS.length; i++) {
      var cd = COMMEMORATION_DAYS[i];
      var cdMoment = moment([referenceMom.year(), cd.month - 1, cd.day]);
      cdDiffInDays = moment.duration(cdMoment.diff(referenceMom)).asHours();
      if (cdDiffInDays <= 0) {
        //cd is on same day or before
        continue;
      }
      if (nearestMoment == null || cdDiffInDays < moment.duration(nearestMoment.diff(referenceMom)).asHours()) {
        //cd is the most nearest
        nearestMoment = cdMoment;
      }
    }
    return nearestMoment;
  };

};

module.exports = Commy;