"use client"
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Loader, Loader2 } from 'lucide-react'

const Page = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      toast.error("Signup to Continue")
      router.push("/")
    }  
  }, [status, router])

  if (status === "loading") {
    return <div className='flex items-center justify-center h-screen bg-gradient-to-b from-blue-800 to-black'><Loader2 size={50} className='animate-spin text-white' /></div> 
  }

  return (
    <div className='bg-gradient-to-b from-blue-800 to-black h-screen'>
q
    </div>
  )
}

export default Page
