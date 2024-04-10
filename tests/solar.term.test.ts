import { getSolarTermByMonthAndDay, SolarTerm } from "../src";

describe("getSolarTermByMonthAndDay", () => {
  test("should return None for an invalid date", () => {
    expect(getSolarTermByMonthAndDay({ month: 1, day: 1 })).toEqual(
      SolarTerm.None
    );
  });

  test("should return Lichun for February 4", () => {
    expect(getSolarTermByMonthAndDay({ month: 2, day: 4 })).toEqual(
      SolarTerm.Lichun
    );
  });

  test("should return YuShui for February 19", () => {
    expect(getSolarTermByMonthAndDay({ month: 2, day: 19 })).toEqual(
      SolarTerm.YuShui
    );
  });

  test("should return Dahan for January 20", () => {
    expect(getSolarTermByMonthAndDay({ month: 1, day: 20 })).toEqual(
      SolarTerm.Dahan
    );
  });

  test("should return Dongzhi for December 22", () => {
    expect(getSolarTermByMonthAndDay({ month: 12, day: 22 })).toEqual(
      SolarTerm.Dongzhi
    );
  });
});
