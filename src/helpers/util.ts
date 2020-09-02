const UtilHelper = {
  rangeInt: (start: number, end: number) => {
    const arrNumbers = []
    for (let i = start; i < end; i++) {
      arrNumbers.push(i)
    }
    return arrNumbers
  }
}

export default UtilHelper
