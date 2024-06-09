import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROLE } from '@/constants/ROLES';

export function middleware(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname;
    console.log('path: ', path);

    const adminBlockedPaths = [''];
    const chanelOwnerBlockedPaths = ['/websites/landing', '/events', '/finances'];
    const managerPaths = ['/events', '/profile', '/releases', '/team', '/tasks', '/logout'];
    const clientPaths = ['/events', '/logout'];

    // Define paths that are considered public (accessible without a token)
    const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail' || path === '/denied';

    const isClientUserPath = clientPaths.includes(path);
    const isManagerPath = managerPaths.includes(path);
    const isAdminPath = !adminBlockedPaths.includes(path);
    const isChanelOwnerPath = !chanelOwnerBlockedPaths.includes(path);

    const token = request.cookies.get('token')?.value || '';
    const roleCookies = request.cookies.get('role')?.value;
    const role = roleCookies ? +JSON.parse(roleCookies) : ROLE.CLIENT;

    // Redirect logic based on the path, user role and token presence
    if (path === '/logout' && !token) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    if (isPublicPath && token) {
      return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    if (!isPublicPath && !token) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    if (!isPublicPath && token) {
      if (!isAdminPath && role === ROLE.ADMIN) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
      }

      if (!isChanelOwnerPath && role === ROLE.CHANNEL_OWNER) {
        return NextResponse.redirect(new URL('/profile', request.nextUrl));
      }

      if (!isClientUserPath && role === ROLE.CLIENT) {
        return NextResponse.redirect(new URL('/events', request.nextUrl));
      }

      if (!isManagerPath && role === ROLE.MANAGER) {
        return NextResponse.redirect(new URL('/denied', request.nextUrl));
      }
    }
  } catch (error) {
    console.log('error: ', error);
  }
}

// It specifies the paths for which this middleware should be executed.
export const config = {
  matcher: [
    '/events/:path*',
    // Match all routes except the ones that start with public paths and api and the static folder.
    // '/((?!api|_next/static|_next/image|favicon.ico|login|signup|verifyemail|denied).*)',
  ],
};
