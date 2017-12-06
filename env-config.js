// this file exports a bunch of replacements
// that are made across the source-code

module.exports = {
  VERSION: require('./package').version,
  'process.env.NODE_ENV': process.env.NODE_ENV,
  // We need to introduce a better way to deal with this for GH based PRs
  IMAGE_ASSETS_URL: 'https://res.cloudinary.com/zeit-inc/image/upload/front',
  VIDEO_ASSETS_URL: 'https://res.cloudinary.com/zeit-inc/video/upload/front',
  RAW_ASSETS_URL: 'https://res.cloudinary.com/zeit-inc/raw/upload/front'
}
