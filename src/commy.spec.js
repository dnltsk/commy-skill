var Commy = require("./commy");
var moment = require("moment");


describe("Commy", function () {

  var COMMY; //class under test

  const MARCH_14 = moment([2017, 2, 14]);
  const JANUARY_3 = moment([2017, 0, 3]);

  beforeEach(function () {
    COMMY = new Commy();
  });

  it("should find current commemoration days", function () {
    var cdsOnMarch14 = COMMY.filterCdsOfDay(MARCH_14);
    expect(cdsOnMarch14.length).toBe(2);
    expect(cdsOnMarch14[0].name).toBe("Pi Day");
    expect(cdsOnMarch14[0].month).toBe(3);
    expect(cdsOnMarch14[0].day).toBe(14);
    expect(cdsOnMarch14[1].name).toBe("White Day");
    expect(cdsOnMarch14[1].month).toBe(3);
    expect(cdsOnMarch14[1].day).toBe(14);
  });

  it("should be an empty array when no commemoration day matches", function () {
    var cdsOnJanuary3 = COMMY.filterCdsOfDay(JANUARY_3);
    expect(cdsOnJanuary3.length).toBe(0);
  });

  it("should find the days of march14 when search for the upcoming of march13", function(){
    var march13 = MARCH_14.subtract(1, "days");
    var cdsOnMarch14 = COMMY.filterUpcomingCds(march13);
    expect(cdsOnMarch14.length).toBe(2);
    expect(cdsOnMarch14[0].name).toBe("Pi Day");
    expect(cdsOnMarch14[0].month).toBe(3);
    expect(cdsOnMarch14[0].day).toBe(14);
    expect(cdsOnMarch14[1].name).toBe("White Day");
    expect(cdsOnMarch14[1].month).toBe(3);
    expect(cdsOnMarch14[1].day).toBe(14);
  });

  it("should find the days of january4 when search for the upcoming of january3", function(){
    var cdsOnJanuary4 = COMMY.filterUpcomingCds(JANUARY_3);
    expect(cdsOnJanuary4.length).toBe(1);
    expect(cdsOnJanuary4[0].name).toBe("Myanmar Independence Day");
    expect(cdsOnJanuary4[0].month).toBe(1);
    expect(cdsOnJanuary4[0].day).toBe(4);
  });

  it("should find the days of january9 when search for the upcoming of january4", function(){
    var january4 = JANUARY_3.add(1, "days");
    var cdsOnJanuary9 = COMMY.filterUpcomingCds(january4);
    expect(cdsOnJanuary9.length).toBe(1);
    expect(cdsOnJanuary9[0].name).toBe("Pravasi Bharatiya Divas a.k.a. Non-resident Indian Day");
    expect(cdsOnJanuary9[0].month).toBe(1);
    expect(cdsOnJanuary9[0].day).toBe(9);
  });

});