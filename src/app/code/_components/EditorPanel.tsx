"use client"

import React, { useState } from "react"
import LanguageSelector from "./LanguageSelector"
import RunButton from "./RunButton"
import SaveSnippet from "./SaveSnippet"
import { Editor } from "@monaco-editor/react"
import FontSize from "./FontSize"
import { Montserrat } from 'next/font/google'

const monte = Montserrat({ subsets: ['latin'] })

const EditorPanel: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("javascript")
  const [code, setCode] = useState<string>("console.log('Hello, World!');")
  const [fontSize, setFontSize] = useState<number>(14)

  // Function to handle language change and update sample code
  const handleLanguageChange = (language: string, sample: string) => {
    setSelectedLanguage(language)
    setCode(sample)
  }

  return (
    <div className="w-full h-screen border-r border-neutral-400">

      <div className="flex items-center justify-between p-6 border-b border-neutral-600">
        <div className="flex gap-4">
          <LanguageSelector selectedLanguage={selectedLanguage} onChange={handleLanguageChange} />
          <FontSize fontValue={fontSize} onFontChange={setFontSize} />
        </div>
        <div className={`flex gap-2 ${monte.className}`}>
          <RunButton />
          <SaveSnippet />
        </div>
      </div>

      <div>
        <Editor
          height="100vh"
          theme="vs-dark"
          language={selectedLanguage}
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: fontSize,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 16, bottom: 16 },
            renderWhitespace: "selection",
            fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
            fontLigatures: true,
            cursorBlinking: "smooth",
            smoothScrolling: true,
            contextmenu: true,
            renderLineHighlight: "all",
            lineHeight: 1.6,
            letterSpacing: 0.5,
            roundedSelection: true,
            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
          }}
        />
      </div>
    </div>
  )
}

export default EditorPanel
