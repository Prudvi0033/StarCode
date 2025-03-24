'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const page = () => {
  const {data: session, status} = useSession()
  if (status === "loading") {
    return <p>Loading...</p>
  }
  
  if (!session) {
    return <p>You must be signed in to view this page</p>
  }
  
  return (
    <div>
      <h1>Welcome, {session.user.username}!</h1>
      <p>Your user ID is: {session.user.id}</p>
    </div>
  )
}

export default page