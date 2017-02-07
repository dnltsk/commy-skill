var Speech = require("./speech");
var moment = require("moment");

describe("Speech", function () {

  var SPEECH; //class under test

  const MARCH_14 = moment([2017, 2, 14]);
  const JANUARY_3 = moment([2017, 0, 3]);

  const MOCKED_CDS = [
    {name: "day1"},
    {name: "day2"},
    {name: "day3"}
  ];

  beforeEach(function(){
    SPEECH = new Speech();
  });

  it("should detect when cds are empty", function(){
    expect(SPEECH.speechTodaysCds([], MARCH_14)).toEqual("Today (Tuesday, March 14th) is no commemorative day - sorry.");
  });

  it("should detect when just one cd found", function(){
    expect(SPEECH.speechTodaysCds([MOCKED_CDS[0]], MARCH_14)).toEqual("Today (Tuesday, March 14th) is the day1");
  });

  it("should detect when just more than one cds found", function(){
    expect(SPEECH.speechTodaysCds(MOCKED_CDS, MARCH_14)).toEqual("Today (Tuesday, March 14th) are 3 commemorative days : <break time=\"1s\"/>1st: the day1<break time=\"1s\"/>2nd: the day2<break time=\"1s\"/>3rd: the day3");
  });

  it("should extract date to '{day name}, {month} {day (nth)}'", function () {
    expect(SPEECH.formatCdDate(MARCH_14)).toEqual("Tuesday, March 14th");
    expect(SPEECH.formatCdDate(JANUARY_3)).toEqual("Tuesday, January 3rd");
  });

  it("should concat the days in a nice way", function(){
    expect(SPEECH.concatCdNames(MOCKED_CDS)).toEqual("<break time=\"1s\"/>1st: the day1<break time=\"1s\"/>2nd: the day2<break time=\"1s\"/>3rd: the day3");
  });

  it("should format the date ", function(){
    expect(SPEECH.formatCdDate(MARCH_14)).toEqual("Tuesday, March 14th");
    expect(SPEECH.formatCdDate(JANUARY_3)).toEqual("Tuesday, January 3rd");
  });
});