import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  const {data : session } = useSession()

  if(!session){
    return (
      <div>
        
      </div>
    )
  }

  return (
    <div>page</div>
  )
}

export default page