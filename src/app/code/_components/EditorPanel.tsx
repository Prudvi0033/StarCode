"use client"

import React, { useState } from "react"
import LanguageSelector from "./LanguageSelector"
import RunButton from "./RunButton"
import SaveSnippet from "./SaveSnippet"
import { Editor } from "@monaco-editor/react"

const EditorPanel: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("javascript")
  const [code, setCode] = useState<string>("console.log('Hello, World!');") 

  // Function to handle language change and update sample code
  const handleLanguageChange = (language: string, sample: string) => {
    setSelectedLanguage(language)
    setCode(sample)
  }

  return (
    <div className="w-full h-screen border-r border-neutral-400">

      <div className="flex items-center justify-between p-[10px] border-b border-neutral-400">
        <LanguageSelector selectedLanguage={selectedLanguage} onChange={handleLanguageChange} />
        <div className="flex gap-2">
          <RunButton />
          <SaveSnippet />
        </div>
      </div>

      <div>
        <Editor
          height="85vh"
          theme="vs-dark"
          language={selectedLanguage}
          value={code} 
          onChange={(value) => setCode(value || "")}
        />
      </div>
    </div>
  )
}

export default EditorPanel
