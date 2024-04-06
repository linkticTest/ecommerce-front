import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.email === 'heanfig@gmail.com') {
          return {
            id: '1',
            name: 'heanfig@gmail.com',
            email: 'heanfig@gmail.com',
            image: '1'
          };
        }
        return null;
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };