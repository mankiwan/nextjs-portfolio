  // Middleware.ts can handle:

  // 1. Authentication (redirect to login if not authenticated)
  // 2. Rate limiting (block too many requests)
  // 3. A/B testing (show different versions to users)
  // 4. Geolocation (redirect based on country)
  // 5. Bot detection (block suspicious traffic)
  // 6. Custom headers (add security headers)
  // 7. URL rewrites (internal redirects)
  // 8. i18n routing (what you're currently using)

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'zh-HK', 'zh-CN'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Always use prefix for cleaner URLs
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh-HK|zh-CN|en)/:path*']
};