import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/api/webhooks/clerk', '/sign-in(.*)', '/sign-up(.*)', "/client(.*)",  "/client/(.*)"])

export default clerkMiddleware((auth, request) => {
  const { userId } = auth();
  const url = new URL(request.url);

  if (url.pathname === '/') {
    if (!userId) {
      return NextResponse.redirect(new URL('/client', request.url));
    } else {
      return NextResponse.redirect(new URL('/crm', request.url));
    }
  }
  
  if (url.pathname === '/crm' && !userId) {
    return NextResponse.redirect(new URL('/client', request.url));
  }

  if (!isPublicRoute(request)) {
    auth().protect()
  }
});

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
};
