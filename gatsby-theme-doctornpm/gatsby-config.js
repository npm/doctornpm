const path = require('path')

module.exports = themeOptions => {
  return {
    siteMetadata: {
      title: 'doctornpm',
      shortName: 'doctornpm',
      description: 'A Gatsby theme for creating npm-flavored Primer documentation sites',
      lang: '',
      imageUrl:
        'https://user-images.githubusercontent.com/29712634/81721690-e2fb5d80-9445-11ea-8602-4b2294c964f3.png',
    },
    plugins: [
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-remove-trailing-slashes',
      'gatsby-plugin-catch-links',
      'gatsby-transformer-yaml',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          defaultLayouts: {
            default: require.resolve('./src/components/layout.js'),
          },
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'content',
          path: path.resolve('./content'),
        },
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: themeOptions.icon
            ? path.resolve(themeOptions.icon)
            : require.resolve('./src/images/favicon.png'),
        },
      },
    ],
  }
}
