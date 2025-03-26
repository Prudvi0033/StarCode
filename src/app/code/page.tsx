"use client"
import { useSession } from 'next-auth/react'
import { Montserrat } from 'next/font/google'

import { Loader2 } from 'lucide-react'
import NavBar from '@/components/ui/Navbar'
import EditorPanel from './_components/EditorPanel'
import OutputPanel from './_components/OutputPanel'

const monte = Montserrat({subsets : ['latin']})

const Page = () => {
  const { data: session, status } = useSession()


  if (status === "loading") {
    return <div className='flex items-center justify-center h-screen bg-zinc-900'><Loader2 size={50} className='animate-spin text-white' /></div> 
  }

  return (
    <div className='bg-gradient-to-b from-blue-900/95 to-black h-screen overflow-hidden'>
      <div className='grid md:grid-cols-2 grid-cols-1 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800'>
        <div><EditorPanel/></div>
        <div className={`overflow-y-auto ${monte.className}`}><OutputPanel/></div>
      </div>
    </div>
  )
}

export default Page
