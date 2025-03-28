"use client"
import { Code } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const CodeButton = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleLogin = () => {
    if (status === "authenticated") {
      router.push("/code") // Navigate if logged in
    } else {
      toast.error("Signup to continue") // Stay on the same page
    }
  }

  return (
    <div className="mt-6">
      <button
        onClick={handleLogin}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-slate-300 
                  text-neutral-800 font-medium px-6 py-2 rounded-lg 
                  shadow-lg hover:shadow-xl
                  transition-all duration-300 hover:scale-105 hover:-translate-y-1
                  border border-blue-300/40 backdrop-blur-sm
                  cursor-pointer"
      >
        <p className="font-semibold">Start Coding</p>
        <div className="text-blue-600 animate-pulse">
          <Code size={20} strokeWidth={2.5} />
        </div>
      </button>
    </div>
  )
}

export default CodeButton
