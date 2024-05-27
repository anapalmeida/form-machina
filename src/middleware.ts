import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
 publicRoutes: ['/', '/api/uploadthing'],
  // Allow signed out users to access the specified routes:
  // publicRoutes: ['/anyone-can-visit-this-route'],
  async afterAuth(auth, req) {
    const url = req.nextUrl

    if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
      return NextResponse.redirect(new URL(`/admin/sign-in`, req.url))
    }
  }
});
 
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)"
  ]
};