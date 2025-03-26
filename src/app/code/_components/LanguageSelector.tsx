"use client"

import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

// Define supported languages
interface Language {
  label: string
  value: string
}

const languages: Language[] = [
  { label: "C", value: "c" },
  { label: "C++", value: "cpp" },
  { label: "Java", value: "java" },
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
]

const sampleSnippets: Record<string, string> = {
  c: `#include <stdio.h>\nint main() {\n    printf("Hello, World!");\n    return 0;\n}`,
  cpp: `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}`,
  java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
  javascript: `console.log("Hello, World!");`,
  typescript: `const greet = (name: string): void => {\n    console.log(\`Hello, \${name}!\`);\n};\ngreet("World");`,
}

interface LanguageSelectorProps {
  selectedLanguage: string
  onChange: (language: string, sample: string) => void
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onChange }) => {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-zinc-800 text-white">
          {languages.find((lang) => lang.value === selectedLanguage)?.label || "Select Language"}
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-zinc-900 text-white border border-zinc-700">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            className="hover:bg-zinc-700 cursor-pointer px-4 py-2"
            onClick={() => onChange(lang.value, sampleSnippets[lang.value])}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSelector
