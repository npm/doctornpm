module.exports = {
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
        editOnGitHub: false,
        showContributors: false,
        repo: {
          url: 'https://github.com/npm/doctornpm',
          defaultBranch: 'main',
        }
      },
    }
  ],
  pathPrefix: process.env.PATH_PREFIX || ''
}
