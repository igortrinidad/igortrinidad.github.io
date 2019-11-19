// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

let siteUrl = 'https://igortrindade.dev'
let pathPrefix = ''
let outputDir = 'dist'

if(process.env.DEPLOY_ENV === 'GH_PAGES') {
  siteUrl = 'https://igortrinidad.github.io'
  pathPrefix = '/igortrindade-portfolio'
  outputDir = 'docs'
}

module.exports = {
  siteName: 'Igor Trindade Portfolio',
  icon: './static/img/logo/logo.png',
  siteUrl: siteUrl,
  pathPrefix: pathPrefix,
  outputDir: outputDir,
  plugins: []
}
