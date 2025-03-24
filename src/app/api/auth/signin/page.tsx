"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LogOut, User } from "lucide-react"

export default function LoginButton() {
  const { data: session } = useSession()
  const [isHovering, setIsHovering] = useState(false)

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-950 to-blue-950 p-4">
        <Card className="w-full max-w-md border border-blue-900 bg-slate-950/70 backdrop-blur-sm shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight text-white">Welcome back!</CardTitle>
            <CardDescription className="text-blue-300">You're signed in as {session.user.username}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-4">
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 p-1">
              {session.user.image ? (
                <Image
                  src={session.user.image || "/placeholder.svg"}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-blue-900 flex items-center justify-center">
                  <User className="w-12 h-12 text-blue-200" />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="destructive"
              className="w-full transition-all duration-300 hover:bg-red-700"
              onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex bg-gradient-to-b from-slate-950 to-blue-950 min-h-screen flex-col items-center justify-center p-4">
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-10 blur-3xl pointer-events-none" />

      <Card className="w-full max-w-md border border-blue-900 bg-slate-950/70 backdrop-blur-sm shadow-xl transition-all duration-300">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center">
            <div className="flex items-center rounded-full justify-center">
              <Image src="/StarCode.svg" height={190} width={190} alt="starcode" />
            </div>
          </div>
        
          <CardDescription className="text-gray-300">Welcome back! Please sign in to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            className="w-full bg-white cursor-pointer text-black hover:bg-zinc-100 transition-all duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => signIn("google")}
          >
            <div className="flex items-center justify-center w-full">
              <div className={`transition-all duration-300 ${isHovering ? "scale-110" : "scale-100"}`}>
                <Image src="/google-icon.svg" width={20} height={20} alt="Google" className="mr-2" />
              </div>
              <span>Continue with Google</span>
            </div>
          </Button>

          <div className="relative flex items-center justify-center">
            <Separator className="bg-blue-900" />
            <span className="absolute bg-slate-950 px-2 text-xs text-blue-400">OR</span>
          </div>

          <Link
            href="/"
            className="w-full flex items-center justify-center h-10 px-4 py-2 border border-blue-900 text-blue-300 bg-transparent hover:bg-blue-900 hover:text-white transition-all duration-300 rounded-md font-medium"
          >
            Continue to home screen
          </Link>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-xs text-blue-400">
            By signing in, you agree to our{" "}
            <a href="#" className="text-cyan-400 hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-cyan-400 hover:underline">
              Privacy Policy
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

