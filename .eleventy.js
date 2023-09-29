require('dotenv').config()

const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const dateFormat = require('./src/_filters/date')
const absoluteUrl = require('./src/_filters/absoluteUrl')
const stringify = require('./src/_filters/stringify')
const { number, miles, percent, max } = require('./src/_filters/numbers')

module.exports = config => {
  config.addPlugin(syntaxHighlight)

  config.addFilter('dateFormat', dateFormat)
  config.addFilter('absoluteUrl', absoluteUrl)
  config.addFilter('stringify', stringify)
  config.addFilter('formattedNumber', number)
  config.addFilter('miles', miles)
  config.addFilter('percent', percent)
  config.addFilter('max', max)

  config.addPassthroughCopy('CNAME')
  config.addPassthroughCopy({
    'node_modules/prismjs/themes/prism-okaidia.min.css': 'css/prism-theme.css'
  })

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
