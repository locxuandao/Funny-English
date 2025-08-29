import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      const res = await fetch("http://localhost:3000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: account?.id_token }),
      });
      if (res.ok) return true;
      return false;
    },
    async jwt({ token, account }) {
      if (account) token.id_token = account.id_token;
      return token;
    },
    async session({ session, token }) {
     (session as any).id_token = (token as any).id_token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
