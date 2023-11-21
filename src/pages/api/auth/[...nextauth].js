import NextAuth from "next-auth";

import TwitterProvider from "next-auth/providers/twitter";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.NEXT_PUBLIC_TWITTER_ID,
      clientSecret: process.env.NEXT_PUBLIC_TWITTER_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
