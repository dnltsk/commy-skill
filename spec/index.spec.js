let index = require("../index");

describe("Lookup", () => {

  const MARCH_14 = new Date(2017, 2, 14, 0, 0, 0, 0);

  it("should find current commemoration days", () => {
    let cdsOnMarch14 = index.filterCurrentCds(MARCH_14);
    expect(cdsOnMarch14.length).toBe(2);
  });

});

describe("Formatting", () => {
  it("should be fine", () => {
    expect(true).toBeTruthy();
  });
});

