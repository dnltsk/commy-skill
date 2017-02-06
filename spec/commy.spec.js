var Commy = require("../commy");
var moment = require("moment");


describe("Commy", function () {

  var c; //class under test

  const MARCH_14 = moment([2017, 2, 14]);
  const JANUARY_3 = moment([2017, 0, 3]);

  beforeEach(function(){
    c = new Commy();
  });

  describe("Lookup", function () {

    it("should find current commemoration days", function () {
      var cdsOnMarch14 = c.filterTodaysCds(MARCH_14);
      expect(cdsOnMarch14.length).toBe(2);
    });

    it("should be an empty array when no commemoration day matches", function () {
      var cdsOnJanuary3 = c.filterTodaysCds(JANUARY_3);
      expect(cdsOnJanuary3.length).toBe(0);
    });
  });

  describe("Formatting", function () {

    it("should extract date to '{day name}, {month} {day (nth)}'", function () {
      expect(c.formatCdDate(MARCH_14)).toEqual("Tuesday, March 14th");
      expect(c.formatCdDate(JANUARY_3)).toEqual("Tuesday, January 3rd");
    });

    it("should concat the days in a nice way", function(){
      var mockedCds = [
        {name: "day1"},
        {name: "day2"},
        {name: "day3"}
      ];
      expect(c.concatCdNames(mockedCds)).toEqual(" <break time=\"1s\"/> 1st: the day1 <break time=\"1s\"/> 2nd: the day2 <break time=\"1s\"/> 3rd: the day3");
    });
  });

});