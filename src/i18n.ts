// The i18n.ts file is a configuration file for next-intl that acts as the
// central hub for internationalization logic. Let me explain the flow:

// The Logic Flow:

// 1. Request comes in → 2. Middleware → 3. i18n.ts → 4. Component gets translations

import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'zh-HK', 'zh-CN'];

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as any)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`./i18n/${locale}.json`)).default
  };
});