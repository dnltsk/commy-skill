var Commy = require("./commy");
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

});