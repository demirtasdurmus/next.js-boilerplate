/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    // localeDetection: true,
    // localePath: 'public/locales',
    // objectNotation: true,
    // cookie: true,
    // ignoreRoutes: ['/_next/', '/static/', '/api/'],
    // pages404: true,
    // pages404Data: {
    //   default: '/404',
    //   en: '/404',
    //   fr: '/404',
    // },
    // pagesRedirect: true,
    // pagesRedirectData: {
    //   default: '/',
    //   en: '/',
    //   fr: '/',
    // },
  }
}

module.exports = nextConfig
