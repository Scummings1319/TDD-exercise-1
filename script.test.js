const translate = require("./script");

describe("testing translate", () => {
  test("apple should give back appleway", () => {
    expect(translate("Apple")).toEqual("appleway");
  });
  test("elephant should give us back elephantway", () => {
    expect(translate("elephant")).toEqual("elephantway");
  });
  test("indigo should give us back ndigoay", () => {
    expect(translate("indigo")).toEqual("indigoway");
  });
  test("octopus should give back ctopusway", () => {
    expect(translate("octopus")).toEqual("octopusway");
  });
  test("umbrella should give back umbrellaway", () => {
    expect(translate("umbrella")).toEqual("umbrellaway");
  });
  test("Samantha should give back amanthasay", () => {
    expect(translate("Samantha")).toEqual("amanthasay");
  });
  test("Cactus should give back actuscay", () => {
    expect(translate("Cactus")).toEqual("actuscay");
  });
  test("start should give back artstay", () => {
    expect(translate("start")).toEqual("artstay");
  });
  test("scheme should give back emeschay", () => {
    expect(translate("scheme")).toEqual("emeschay");
  });
});
