"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import LoginButton from "./LoginButton"
import UserMenu from "./UserMenu"
import { Sparkles } from "lucide-react"
import {Montserrat} from "next/font/google"

const monte = Montserrat({ subsets : ['latin']})


export default function NavBar() {
    const { data: session } = useSession()

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur overflow-hidden">
            <div className="container flex h-16 items-center justify-around">

                <Link href="/" className="flex ml-3 items-center">
                    <Image src="/StarCode.svg" alt="StarCode Logo" width={140} height={140} />
                </Link>


                <nav className="flex items-center gap-4">
                    {session ? (
                        <>
                            <Link href="/snippets" className={`text-sm flex gap-1 ${monte.className} bg-white/70 p-2 font-semibold rounded-md text-zinc-800`}>
                                Snippets<Sparkles size={15}/>
                            </Link>
                            <UserMenu />
                        </>
                    ) : (
                        <LoginButton callbackUrl="/" />
                    )}
                </nav>
            </div>
        </header>
    )
}