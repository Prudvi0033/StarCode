
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/app/lib/db"
import GoogleProvider from "next-auth/providers/google"
import NextAuth, { Session } from "next-auth"
import {User} from "@prisma/client"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID!,
            clientSecret: process.env.CLIENT_SECRET!
        }),
    ],
    callbacks: {
        async signIn({ user, account } : any): Promise<boolean> {
            if (account?.provider === "google") {
                const email: string = user.email!
                const username: string = email.split("@")[0]

                const existingUser = await prisma.user.findUnique({
                    where: { email }
                })

                if (!existingUser) {
                    await prisma.user.create({
                        data: {
                            email,
                            username
                        }
                    })
                }
            }
            return true
        }
    },

    async session({ session } : any): Promise<Session> {
        if (session?.user?.email) {
            const dbUser = await prisma.user.findUnique({
                where: {
                    email: session.user.email
                }
            })

            if (dbUser) {
                session.user.username = dbUser.username
            }
        }
        return session
    },
    secret: process.env.NEXTAUTH_SECRET,

}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}