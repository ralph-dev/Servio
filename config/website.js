const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Servio - Restaurant Elite Technology', // Navigation and Site Title
  siteTitleAlt: 'Servio', // Alternative Site title for SEO
  siteTitleShort: 'Servio', // short_name for manifest
  siteHeadline: 'Moving Restaurants to the Future!', // Headline for schema.org JSONLD
  siteUrl: 'https://www.servioapp.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',
  author: 'ralph', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  ///userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  // googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
