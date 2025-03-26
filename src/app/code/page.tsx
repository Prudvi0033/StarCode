"use client"
import { useSession } from 'next-auth/react'

import { Loader2 } from 'lucide-react'
import NavBar from '@/components/ui/Navbar'

const Page = () => {
  const { data: session, status } = useSession()


  if (status === "loading") {
    return <div className='flex items-center justify-center h-screen bg-gradient-to-b from-blue-900/95 to-black'><Loader2 size={50} className='animate-spin text-white' /></div> 
  }

  return (
    <div className='bg-gradient-to-b from-blue-900/95 to-black h-screen'>
      <NavBar/>
    </div>
  )
}

export default Page
