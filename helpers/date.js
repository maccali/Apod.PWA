const DateHelper = {

  validDate: (date) => {
    var matches = /(\d{4})[-](\d{2})[-](\d{2})/.exec(date);
    if (matches == null) {
      return false;
    }
    var dia = matches[3];
    var mes = matches[2] - 1;
    var ano = matches[1];
    var data = new Date(ano, mes, dia);
    return data.getDate() == dia && data.getMonth() == mes && data.getFullYear() == ano;
  },

  validDateAndPast: (date) => {
    let tDate = date;
    if (DateHelper.validDate(date)) {
      let arrDate = tDate.split('-')
      let date = new Date(arrDate[0], arrDate[1] - 1, arrDate[2])
      let today = new Date()
      return (date < today)
    } else {
      return false;
    }
  },

  dateToNasaFormat: (date) => {
    let nasaDate = new Date(date).toISOString().split('T')[0]
    return nasaDate;
  },

  todayNasaFormat: () => {
    let date = new Date()
    let nasaDate = DateHelper.dateToNasaFormat(date)
    return nasaDate;
  },

  nasaFormatMinusOne: (nasaDate) => {
    let arrDate = nasaDate.split('-')
    let date = new Date(arrDate[0], arrDate[1] - 1, arrDate[2])
    date.setDate(date.getDate() - 1)
    let dateIso = date.toISOString().split('T')[0]
    return dateIso;
  },

  nasaFormatPlusOne: (nasaDate) => {
    let arrDate = nasaDate.split('-')
    let date = new Date(arrDate[0], arrDate[1] - 1, arrDate[2])
    date.setDate(date.getDate() + 1)
    let dateIso = date.toISOString().split('T')[0]
    return dateIso;
  }

}

export default DateHelper