import Hero from "@/components/ui/Hero"
import NavBar from "@/components/ui/Navbar"
import {Montserrat} from "next/font/google"

const monte = Montserrat({ subsets : ['latin']})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/95 to-black">
      <NavBar />
      <main className={`container py-10 ${monte.className}`}>
        <Hero/>
      </main>
    </div>
  )
}