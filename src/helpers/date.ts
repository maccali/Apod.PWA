import api from "../services/api";

const DateHelper = {
  validDate: (date: string) => {
    const matches = /(\d{4})[-](\d{2})[-](\d{2})/.exec(date);
    if (matches == null) {
      return false;
    }
    const dia = Number(matches[3]);
    const mes = Number(matches[2]) - 1;
    const ano = Number(matches[1]);
    const data = new Date(ano, mes, dia);
    return (
      data.getDate() == dia &&
      data.getMonth() == mes &&
      data.getFullYear() == ano
    );
  },

  validDateAndPast: (date: string) => {
    const tDate = date;
    if (DateHelper.validDate(date)) {
      const arrDate = tDate.split("-");
      const date = new Date(
        Number(arrDate[0]),
        Number(arrDate[1]) - 1,
        Number(arrDate[2])
      );
      const today = new Date();
      return date < today;
    } else {
      return false;
    }
  },

  dateToNasaFormat: (date: string) => {
    const nasaDate = new Date(date).toISOString().split("T")[0];
    return nasaDate;
  },

  todayNasaFormat: () => {
    const date = new Date();
    const nasaDate = DateHelper.dateToNasaFormat(String(date));
    return nasaDate;
  },

  nasaFormatMinusOne: (nasaDate: string) => {
    const arrDate = nasaDate.split("-");
    const date = new Date(
      Number(arrDate[0]),
      Number(arrDate[1]) - 1,
      Number(arrDate[2])
    );
    date.setDate(date.getDate() - 1);
    const dateIso = date.toISOString().split("T")[0];
    return dateIso;
  },

  nasaFormatPlusOne: (nasaDate: string) => {
    const arrDate = nasaDate.split("-");
    const date = new Date(
      Number(arrDate[0]),
      Number(arrDate[1]) - 1,
      Number(arrDate[2])
    );
    date.setDate(date.getDate() + 1);
    const dateIso = date.toISOString().split("T")[0];
    return dateIso;
  },

  validDayFilter: (arrUrls: Array<DayCustomFace>) => {
    const arrOfDays = arrUrls.filter((theDate) => {
      if (theDate.day != undefined) {
        return theDate.day;
      }
    });

    return arrOfDays;
  },

  daysCombine: async (startDate: string, numberOfDays: number) => {
    const key = process.env.NASA_API_KEY;
    let nowDate = startDate;
    const urls: Array<string> = [];

    for (let i = 0; i < numberOfDays; i++) {
      urls.push(`/apod?api_key=${key}&date=${nowDate}`);
      nowDate = DateHelper.nasaFormatMinusOne(nowDate);
    }

    const arrDayUrls = await Promise.all(
      urls.map((url, i) =>
        api
          .get(`${url}`)
          .then((response: any) => {
            if (response.status === 200) {
              const day: DayFace = {
                copyright: response.data["copyright"],
                date: response.data["date"],
                explanation: response.data["explanation"],
                mediaType: response.data["media_type"],
                serviceVersion: response.data["service_version"],
                title: response.data["title"],
                url: response.data["url"],
                hdUrl: response.data["hdurl"],
              };

              return {
                order: i,
                url,
                day,
              };
            }

            return {
              order: i,
              url,
              error: true,
            };
          })
          .catch((_err: any) => {
            return {
              order: i,
              url,
              error: true,
            };
          })
      )
    );

    const arrOfValidDays = DateHelper.validDayFilter(arrDayUrls);

    return arrOfValidDays;
  },
};

export default DateHelper;
