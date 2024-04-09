import { getZodiacByYear, Zodiac } from "../src";

describe("getZodiacByYear", () => {
  it("should return the correct Zodiac for a given year", () => {
    expect(getZodiacByYear(2020)).toBe(Zodiac.Rat);
    expect(getZodiacByYear(2021)).toBe(Zodiac.Ox);
    expect(getZodiacByYear(2022)).toBe(Zodiac.Tiger);
    expect(getZodiacByYear(2023)).toBe(Zodiac.Rabbit);
    expect(getZodiacByYear(2024)).toBe(Zodiac.Dragon);
    expect(getZodiacByYear(2025)).toBe(Zodiac.Snake);
    expect(getZodiacByYear(2026)).toBe(Zodiac.Horse);
    expect(getZodiacByYear(2027)).toBe(Zodiac.Goat);
    expect(getZodiacByYear(2028)).toBe(Zodiac.Monkey);
    expect(getZodiacByYear(2029)).toBe(Zodiac.Rooster);
    expect(getZodiacByYear(2030)).toBe(Zodiac.Dog);
    expect(getZodiacByYear(2031)).toBe(Zodiac.Pig);
  });
});
