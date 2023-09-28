require('dotenv').config()

const dateFormat = require('./src/_filters/date')
const absoluteUrl = require('./src/_filters/absoluteUrl')
const { number, miles, hours, minutes, percent } = require('./src/_filters/numbers')

module.exports = config => {
  config.addFilter('dateFormat', dateFormat)
  config.addFilter('absoluteUrl', absoluteUrl)
  config.addFilter('formattedNumber', number)
  config.addFilter('miles', miles)
  config.addFilter('hours', hours)
  config.addFilter('minutes', minutes)
  config.addFilter('percent', percent)

  config.addPassthroughCopy('CNAME')

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts'
    }
  }
}
