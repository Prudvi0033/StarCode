"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import LoginButton from "./LoginButton"
import UserMenu from "./UserMenu"
import { Sparkles } from "lucide-react"
import { Montserrat } from "next/font/google"
import { motion } from "framer-motion"

const monte = Montserrat({ subsets: ['latin'] })

export default function NavBar() {
    const { data: session } = useSession()

    return (
        <motion.header
            initial={{ opacity: 0}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full backdrop-blur overflow-hidden"
        >
            <div className="container flex h-16 items-center justify-around">
                <Link href="/" className="flex ml-3 items-center">
                    <Image src="/StarCode.svg" alt="StarCode Logo" width={140} height={140} />
                </Link>

                <nav className="flex items-center gap-4">
                    {session ? (
                        <>
                            <Link href="/snippets" className={`text-sm flex gap-1 ${monte.className} bg-black/50 p-2 font-semibold rounded-md text-neutral-200 transition-all hover:scale-100`}>
                                Snippets<Sparkles size={15} />
                            </Link>
                            <UserMenu />
                        </>
                    ) : (
                        <LoginButton callbackUrl="/" />
                    )}
                </nav>
            </div>
        </motion.header>
    )
}
