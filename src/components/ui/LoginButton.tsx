"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {Montserrat} from "next/font/google"

const bolde = Montserrat({ subsets : ['latin'], weight : "600" })

export default function LoginButton({ callbackUrl = "/" }) {

  return (
    <Button
      className="bg-white cursor-pointer text-black hover:bg-zinc-100/90 transition-all duration-300"
      onClick={() => signIn("google", { callbackUrl })}
    >
      <div className={`flex items-center justify-center ${bolde.className}`}>
        <div className={`transition-all duration-300`}>
          <Image src="/google-icon.svg" width={20} height={20} alt="Google" className="mr-2" />
        </div>
        <span>Signin</span>
      </div>
    </Button>
  )
}