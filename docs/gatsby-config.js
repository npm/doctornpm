const path = require('path')

module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    title: 'doctornpm',
    shortName: 'doctornpm',
    description: 'Like doctocat, but for npm',
    lang: 'en',
    imageUrl: 'https://user-images.githubusercontent.com/29712634/81721690-e2fb5d80-9445-11ea-8602-4b2294c964f3.png',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-doctornpm',
      options: {
        icon: './src/images/npm-favicon.png',
        editOnGitHub: true,
        showContributors: false,
        showSidebarEditLink: true,
        repo: {
          url: 'https://github.com/npm/doctornpm',
          defaultBranch: 'main',
          path: 'docs'
        }
      },
    }
  ],
  pathPrefix: process.env.PREFIX_PATHS ? path.basename(require('../package.json').repository.url) : '',
}
