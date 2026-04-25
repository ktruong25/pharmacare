import NextAuth from 'next-auth';
import { authConfig } from '@/lib/auth.config';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isProtected = req.nextUrl.pathname.startsWith('/admin') &&
    !req.nextUrl.pathname.startsWith('/admin/login');

  if (isProtected && !req.auth) {
    const loginUrl = new URL('/admin/login', req.url);
    return Response.redirect(loginUrl);
  }
});

export const config = {
  matcher: ['/admin/:path*'],
};
