'use strict';

/**
 * Use EC5 here!
 */

var Alexa = require('alexa-sdk');
var moment = require('moment');
var Commy = require('./src/commy');
var Speech = require('./src/speech');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Space Facts';
var COMMY = new Commy();
var SPEECH = new Speech();


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
    var now = moment(new Date());
    var cds = COMMY.filterTodaysCds(now);
    var speechOutput = SPEECH.speechTodaysCds(cds);
    this.emit(':tell', speechOutput);
  },
  'GetUpcomingCommemorativeDay': function () {
    var cd = COMMY.getRandomCd();
    var formattedDate = SPEECH.formatCdDate(cd);
    var speechOutput = "Upcoming commemorative day is the " + cd.name + " on " + formattedDate;
    this.emit(':tell', speechOutput);
  }
};
