'use strict';

/**
 * Use EC5 here!
 */

var Alexa = require('alexa-sdk');
var moment = require('moment');
var Commy = require('./commy');

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
    var c = new Commy();
    var cd = c.getRandomCd();
    var speechOutput = "Today's commemorative day is " + cd.name;
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, cd.day);
  },
  'GetUpcomingCommemorativeDay': function () {
    var c = new Commy();
    var cd = c.getRandomCd();
    var formattedDate = c.formatCdDate(cd);
    var speechOutput = "Upcoming commemorative day is the " + cd.name + " on " + formattedDate;
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, cd.day);
  }
};
