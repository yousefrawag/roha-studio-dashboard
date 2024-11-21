import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 import { notFound } from 'next/navigation';
 import {getRequestConfig} from 'next-intl/server';
const locales = ['en', 'ar']
export default  getRequestConfig( async ({locale}) => {

if(!locales.includes(locale) ) notFound()
  return {
messages:(await import (`../lang/${locale}.json`) ).default
}
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
