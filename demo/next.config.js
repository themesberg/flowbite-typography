const withMDX = require('@next/mdx')()

module.exports = withMDX({
  trailingSlash: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  pageExtensions: ['js', 'jsx', 'mdx'],
})
