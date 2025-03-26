'use client'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

interface fontSizeProps {
    fontValue : number
    onFontChange : (size : number) => void
}

const FontSize = ({fontValue, onFontChange} : fontSizeProps) => {
  return (
    <div>
        <Input onChange={(e) => onFontChange(Number(e.target.value))} value={fontValue} className='w-12 text-white font-semibold text-[8px] text-center'/>
    </div>
  )
}

export default FontSize