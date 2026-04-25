import type { NextAuthConfig } from 'next-auth';

// Edge-safe config used by middleware (no DB imports)
export const authConfig: NextAuthConfig = {
  providers: [],
  pages: { signIn: '/admin/login' },
  session: { strategy: 'jwt' },
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
};
