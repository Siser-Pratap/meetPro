import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const protectedRoute = createRouteMatcher([
  '/dashboard',
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
]);

export default clerkMiddleware((auth, req) => {
  // Redirect logged-in users away from /sign-in and /sign-up
  const url = req.nextUrl;
  const isSignIn = url.pathname.startsWith('/sign-in');
  const isSignUp = url.pathname.startsWith('/sign-up');
  const isAuthenticated = auth().userId;

  if ((isSignIn || isSignUp) && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', url));
  }

  if (protectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
