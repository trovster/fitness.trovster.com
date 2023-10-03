require('dotenv').config()

const { EleventyRenderPlugin } = require('@11ty/eleventy')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const dateFormat = require('./src/_filters/date')
const absoluteUrl = require('./src/_filters/absoluteUrl')
const stringify = require('./src/_filters/stringify')
const { number, miles, percent, max } = require('./src/_filters/numbers')

module.exports = config => {
  config.addPlugin(syntaxHighlight)
  config.addPlugin(EleventyRenderPlugin)

  config.addShortcode('svg', async function (filename, options = {}) {
    const { renderFile } = config.javascriptFunctions
    return await renderFile(`./src/icons/${filename}.svg`, options, 'njk')
  })

  config.addFilter('dateFormat', dateFormat)
  config.addFilter('absoluteUrl', absoluteUrl)
  config.addFilter('stringify', stringify)
  config.addFilter('formattedNumber', number)
  config.addFilter('miles', miles)
  config.addFilter('percent', percent)
  config.addFilter('max', max)

  config.addPassthroughCopy('CNAME')
  config.addPassthroughCopy({
    'node_modules/prismjs/themes/prism-okaidia.min.css': 'css/prism-theme.css',
    'node_modules/fitness-component/src/FitnessCard.js': 'js/FitnessCard.js',
    'node_modules/fitness-component/src/FitnessRing.js': 'js/FitnessRing.js'
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
