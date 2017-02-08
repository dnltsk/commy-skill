'use strict';

/**
 * Use EC5 here!
 */

var Alexa = require('alexa-sdk');
var moment = require('moment');
var Commy = require('./src/commy');
var Speech = require('./src/speech');

var APP_ID =  "amzn1.ask.skill.60dac575-4c17-4ad4-9c49-184469ba8a37";
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
    var now = getNowAsMoment();
    var cds = COMMY.filterCdsOfDay(now);
    var speechOutput = SPEECH.speechTodaysCds(cds, now);
    this.emit(':tell', speechOutput);
  },
  'GetUpcomingCommemorativeDay': function () {
    var now = getNowAsMoment();
    var cds = COMMY.filterUpcomingCds(now);
    var speechOutput = SPEECH.speechUpcomingCds(cds, now);
    this.emit(':tell', speechOutput);
  }
};

function getNowAsMoment() {
  return moment(new Date());
}