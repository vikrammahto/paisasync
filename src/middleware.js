// middleware.js
import { NextResponse } from 'next/server';

export async function middleware(request) {
  console.log('Middleware triggered on:', request.nextUrl.pathname);
  const { pathname } = request.nextUrl;

  // Define protected routes
  const protectedRoutes = [
    '/overview',
    '/debt-manager',
    '/expense-tracker',
    '/savings-goal',
  ];

  // Check if the current path is a protected route
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    // Check for authentication cookie
    const authCookie = request.cookies.get('auth_token');

    if (!authCookie) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/overview/:path*',
    '/debt-manager/:path*',
    '/expense-tracker/:path*',
    '/savings-goal/:path*',
  ],
};
