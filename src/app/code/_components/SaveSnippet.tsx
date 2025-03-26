import { SaveAll } from 'lucide-react'
import React from 'react'


const SaveSnippet = () => {
  return (
    <div>
      <div className="flex items-center font-semibold text-white px-3 py-2 rounded-lg gap-2 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer">
        <h1 className="text-sm tracking-wide">Save</h1>
        <SaveAll size={20} className="text-white" />
      </div>
    </div>

  )
}

export default SaveSnippet