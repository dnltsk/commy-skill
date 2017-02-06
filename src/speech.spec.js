var Speech = require("./speech");
var moment = require("moment");

describe("Speech", function () {

  var s; //class under test

  const MARCH_14 = moment([2017, 2, 14]);
  const JANUARY_3 = moment([2017, 0, 3]);

  beforeEach(function(){
    s = new Speech();
  });

  it("should extract date to '{day name}, {month} {day (nth)}'", function () {
    expect(s.formatCdDate(MARCH_14)).toEqual("Tuesday, March 14th");
    expect(s.formatCdDate(JANUARY_3)).toEqual("Tuesday, January 3rd");
  });

  it("should concat the days in a nice way", function(){
    var mockedCds = [
      {name: "day1"},
      {name: "day2"},
      {name: "day3"}
    ];
    expect(s.concatCdNames(mockedCds)).toEqual("<break time=\"1s\"/>1st: the day1<break time=\"1s\"/>2nd: the day2<break time=\"1s\"/>3rd: the day3");
  });
});