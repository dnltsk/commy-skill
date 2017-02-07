var moment = require("moment");

var Speech = function(){

  this.speechTodaysCds = function(cds, mom){
    var speechOutput = "Today ("+this.formatCdDate(mom)+")";
    if(cds.length == 0){
      speechOutput += " is no commemorative day - sorry."
    }else if(cds.length == 1){
      speechOutput += " is the " + cds[0].name;
    }else{
      speechOutput += " are " + cds.length + " commemorative days : "+this.concatCdNames(cds);
    }
    return speechOutput;
  };

  this.concatCdNames = function (cds) {
    var speech = "";
    for (var i = 0; i < cds.length; i++) {
      speech += this.speechPause(1) + nth(i + 1) + ": the " + cds[i].name;
    }
    return speech;
  };

  this.formatCdDate = function (mom) {
    return mom.format('dddd, MMMM Do');
  };

  function speechPause(lengthInSeconds){
    return "<break time=\"1s\"/>"
  }

  function nth(n) {
    var ending = ["st", "nd", "rd"][((n + 90) % 100 - 10) % 10 - 1] || "th";
    return n + ending;
  }

};

module.exports = Speech;