const glob = require('glob-promise')
const isProd = 'production' === process.env.NODE_ENV

module.exports = {
  // This affects in GitHub PR based building.
  // In that case, we need to set this empty an empty string.
  assetPrefix: isProd ? 'https://dev-docs.zeit.sh' : 'https://localhost:5800',
  exportPathMap: async function() {
    const paths = await glob('pages/**')
    const pages = paths.map(path => {
      path = path.replace(/^pages/, '')
      path = path.replace('index.js', '')
      path = path.replace('.js', '')

      if (path === '/') return path

      path = path.replace(/\/$/, '')
      return path
    })

    const pageMap = pages.reduce((map, page) => {
      map[page] = { page }
      return map
    }, {})

    return pageMap
  }
}
