import { OrderedZodiacs, Zodiac } from "../enums/zodiac.enums";

export function getZodiacByYear(year: number): Zodiac {
  const index = (year - 4) % 12;
  return OrderedZodiacs[index];
}
