const DateHelper = {
  dataValida: (date) => {
    var matches = /(\d{4})[-](\d{2})[-](\d{2})/.exec(date);
    if (matches == null) {
      return false;
    }
    var dia = matches[3];
    var mes = matches[2] - 1;
    var ano = matches[1];
    var data = new Date(ano, mes, dia);
    return data.getDate() == dia && data.getMonth() == mes && data.getFullYear() == ano;
  }
}

export default DateHelper