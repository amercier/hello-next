const BASE_URL = require(`${__dirname}/package`).baseUrl || '';

module.exports = {
  presets: [
    'next/babel'
  ],
  plugins: [
    ['transform-define', { BASE_URL }],
  ]
}
