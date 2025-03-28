import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/db";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions, Session, User } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: User; account: any }): Promise<boolean> {
      if (account?.provider === "google") {
        const email: string = user.email!;
        const username: string = email.split("@")[0];

        const existingUser = await prisma.user.findUnique({
          where: { email },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email,
              username,
            },
          });
        }
      }
      return true;
    },

    async session({ session, token }: { session: Session; token: any }): Promise<Session> {
      if (session?.user) {
        session.user.id = token.sub; // Add the user ID from the JWT token

        if (session.user.email) {
          const dbUser = await prisma.user.findUnique({
            where: { email: session.user.email },
          });

          if (dbUser) {
            session.user.username = dbUser.username;
          }
        }
      }
      return session;
    },
    
    async jwt({ token, user }: { token: any; user?: User }): Promise<any> {
      if (user) {
        token.sub = user.id;
      }
      return token;
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  secret: process.env.NEXTAUTH_SECRET,
};