import { SolarTerm } from "../enums/solar.term.enums";

export const solarTermDates: { term: SolarTerm; month: number; day: number }[] =
  [
    { term: SolarTerm.Lichun, month: 2, day: 4 },
    { term: SolarTerm.YuShui, month: 2, day: 19 },

    { term: SolarTerm.Jingzhe, month: 3, day: 6 },
    { term: SolarTerm.Chunfen, month: 3, day: 21 },

    { term: SolarTerm.Qingming, month: 4, day: 5 },
    { term: SolarTerm.Guyu, month: 4, day: 20 },

    { term: SolarTerm.Lixia, month: 5, day: 6 },
    { term: SolarTerm.Xiaohan, month: 5, day: 21 },

    { term: SolarTerm.Mangzhong, month: 6, day: 6 },
    { term: SolarTerm.Xiazhi, month: 6, day: 21 },

    { term: SolarTerm.Xiaoshu, month: 7, day: 7 },
    { term: SolarTerm.Dashu, month: 7, day: 23 },

    { term: SolarTerm.Liqiu, month: 8, day: 8 },
    { term: SolarTerm.Chushu, month: 8, day: 23 },

    { term: SolarTerm.Bailu, month: 9, day: 8 },
    { term: SolarTerm.Qiufen, month: 9, day: 23 },

    { term: SolarTerm.Hanlu, month: 10, day: 8 },
    { term: SolarTerm.Shuangjiang, month: 10, day: 23 },

    { term: SolarTerm.Lidong, month: 11, day: 7 },
    { term: SolarTerm.Xiaoxue, month: 11, day: 22 },

    { term: SolarTerm.Daxue, month: 12, day: 7 },
    { term: SolarTerm.Dongzhi, month: 12, day: 22 },

    { term: SolarTerm.Xiaohan, month: 1, day: 6 },
    { term: SolarTerm.Dahan, month: 1, day: 20 },
  ];

export function getSolarTermByMonthAndDay({ month = 0, day = 0 }): SolarTerm {
  for (const { term, month: currentMonth, day: currentDay } of solarTermDates) {
    if (month === currentMonth && day == currentDay) {
      return term;
    }
  }

  return SolarTerm.None;
}
