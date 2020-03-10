module.exports = {
  siteMetadata: {
    title: 'johno',
    siteUrl: 'https://johno.com'
  },
  plugins: [
    // 'gatsby-plugin-component-graph',
    {
      resolve: 'gatsby-theme-austere',
      options: {
        basePath: '/writing/archives',
        withDarkMode: true
      }
    },
    {
      resolve: 'gatsby-theme-blog-tags',
      options: {
        basePath: '/writing/tags'
      }
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'FFYAPMRP'
      }
    }
  ]
}
