module.exports = {
  number: (number, maximumFractionDigits = 0) => {
    return number ? number.toLocaleString('en-GB', {
      maximumFractionDigits
    }) : 0
  },
  miles: number => {
    return number * 0.000621371192
  },
  percent: (data, fractions = 0) => {
    return (data.total / data.goal * 100).toFixed(fractions)
  },
  max: (number, max = 100) => {
    return number >= max ? max : number
  }
}
