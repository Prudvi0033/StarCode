"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import LoginButton from "./LoginButton"
import UserMenu from "./UserMenu"


export default function NavBar() {
    const { data: session } = useSession()

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur overflow-hidden">
            <div className="container flex h-16 items-center justify-around border-b border-blue-900 ">

                <Link href="/" className="flex ml-3 items-center">
                    <Image src="/StarCode.svg" alt="StarCode Logo" width={140} height={140} />
                </Link>


                <nav className="flex items-center gap-4 mr-4">
                    {session ? (
                        <>
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