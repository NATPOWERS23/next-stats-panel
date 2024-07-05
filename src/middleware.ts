import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/((?!api|_next/static|_next/image|favicon.ico|client/*||denied).*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

//     const adminBlockedPaths = [''];
//     const chanelOwnerBlockedPaths = ['/websites/landing', '/events'];
//     const managerPaths = ['/events', '/profile', '/releases', '/team', '/tasks', '/logout'];
//     const clientPaths = ['/events', '/logout'];

//     // Define paths that are considered public (accessible without a token)
//     const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail' || path === '/denied';

//     const isClientUserPath = clientPaths.includes(path);
//     const isManagerPath = managerPaths.includes(path);
//     const isAdminPath = !adminBlockedPaths.includes(path);
//     const isChanelOwnerPath = !chanelOwnerBlockedPaths.includes(path);

//     const token = request.cookies.get('token')?.value || '';
//     const roleCookies = request.cookies.get('role')?.value;
//     const role = roleCookies ? +JSON.parse(roleCookies) : ROLE.CLIENT;

//     // Redirect logic based on the path, user role and token presence
//     if (path === '/logout' && !token) {
//       return NextResponse.redirect(new URL('/login', request.nextUrl));
//     }

//     if (isPublicPath && token) {
//       return NextResponse.redirect(new URL('/', request.nextUrl));
//     }

//     if (!isPublicPath && !token) {
//       return NextResponse.redirect(new URL('/login', request.nextUrl));
//     }

//     if (!isPublicPath && token) {
//       if (!isAdminPath && role === ROLE.ADMIN) {
//         return NextResponse.redirect(new URL('/', request.nextUrl));
//       }

//       if (!isChanelOwnerPath && role === ROLE.CHANNEL_OWNER) {
//         return NextResponse.redirect(new URL('/profile', request.nextUrl));
//       }

//       if (!isClientUserPath && role === ROLE.CLIENT) {
//         return NextResponse.redirect(new URL('/events', request.nextUrl));
//       }

//       if (!isManagerPath && role === ROLE.MANAGER) {
//         return NextResponse.redirect(new URL('/denied', request.nextUrl));
//       }
//     }
