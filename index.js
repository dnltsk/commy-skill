'use strict';

/**
 * Use EC5 here!
 */

var Alexa = require('alexa-sdk');
var COMMEMORATION_DAYS = require('./commemoration-days-repository.json');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Space Facts';

exports.handler = function (event, context, callback) {
  try {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
  } catch (e) {
    console.error("cannot execute! ", e);
  }
};

var handlers = {
  'LaunchRequest': function () {
    this.emit('GetTodaysCommemorativeDay');
  },
  'GetTodaysCommemorativeDay': function () {
    var cd = getRandomCd();
    var speechOutput = "Today's commemorative day is " + cd.name;
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, cd.day);
  },
  'GetUpcomingCommemorativeDay': function () {
    var cd = getRandomCd();
    var formattedDate = formatCdDate(cd);
    var speechOutput = "Upcoming commemorative day is the " + cd.name + " on " + formattedDate;
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, cd.day);
  }
};

function formatCdDate(cd) {
  return new Date(new Date().getFullYear(), cd.month - 1, cd.day - 1, 0, 0, 0, 0);
}

function getRandomCd(){
  var randomDayIndex = Math.floor(Math.random() * COMMEMORATION_DAYS.length);
  return COMMEMORATION_DAYS[randomDayIndex];
}

this.filterCurrentCds = function(referenceDate){
  return COMMEMORATION_DAYS.filter(function(cd){
    return cd.month == referenceDate.getMonth()+1 && cd.day == referenceDate.getDate();
  })
};