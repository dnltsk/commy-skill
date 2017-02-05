var Commy = require("../commy");
var moment = require("moment");

describe("Lookup", function() {

  const MARCH_14 = moment(new Date(2017, 2, 14, 0, 0, 0, 0));

  it("should find current commemoration days", function() {
    var c = new Commy();
    var cdsOnMarch14 = c.filterCurrentCds(MARCH_14);
    expect(cdsOnMarch14.length).toBe(2);
  });

});

describe("Formatting", function() {
  it("should be fine", function() {
    expect(true).toBeTruthy();
  });
});

