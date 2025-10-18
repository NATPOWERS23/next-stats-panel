import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/api/webhooks/clerk', 
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/client(.*)',  
  '/client/(.*)'
]);

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();
  const url = new URL(request.url);

  // Handle root redirect logic
  if (url.pathname === '/') {
    if (!userId) {
      return NextResponse.redirect(new URL('/client', request.url));
    } else {
      return NextResponse.redirect(new URL('/crm', request.url));
    }
  }
  
  // Protect CRM routes
  if (url.pathname.startsWith('/crm') && !userId) {
    return NextResponse.redirect(new URL('/client', request.url));
  }

  // Protect all non-public routes
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};