import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
 
export default async function middleware(request: NextRequest) {

  const defaultLocale = request.headers.get('x-your-custom-locale') || 'en';

  const handleI18nRouting = createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'de', 'es', 'ja'],
   
    defaultLocale: 'en'
  });
  
  const response = handleI18nRouting(request);
      response.headers.set('x-your-custom-locale', defaultLocale);


  return response
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|es|ja)/:path*']
};