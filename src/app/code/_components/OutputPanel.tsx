import UserMenu from '@/components/ui/UserMenu'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const OutputPanel = () => {
  return (
    <div className='w-full h-screen'>
      <div className='flex justify-between items-center p-6 border-b border-neutral-600'>
        <h1 className='text-white/80 font-semibold'>Output</h1>
        <div className='flex gap-4'>
          <Link href="/snippets" className='text-sm flex gap-1 bg-black/50 p-2 font-semibold rounded-md text-neutral-200 transition-all hover:scale-100'>
            Snippets<Sparkles size={15} />
          </Link>
          <UserMenu />
        </div>
      </div>
    </div>
  )
}

export default OutputPanel