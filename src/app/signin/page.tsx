"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export function LoginButton() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <div>
        <p>Signed in as {session.user.username}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  
  return <button onClick={() => signIn("google")}>Sign in with Google</button>
}