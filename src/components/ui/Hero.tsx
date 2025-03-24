"use client"

import { LibraryBig, Star } from "lucide-react"
import { motion } from "framer-motion"
import React from "react"
import CodeButton from "./CodeButton"

const Hero = () => {
    return (
        <div className="flex flex-col gap-6 items-center justify-center h-fit">
            {/* Badge */}
            <div className="flex gap-2 items-center text-neutral-200 shadow-xl bg-black/40 p-2 rounded-3xl">
                <LibraryBig size={12} />
                <p className="text-xs">Community Code Library</p>
            </div>

            {/* Animated Stars + Heading */}
            <div className="relative flex flex-col items-center">
                {/* Floating Stars */}
                <motion.div
                    className="absolute right-16 -top-6 rotate-12"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                    <svg width="60" height="60" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="white" />
                                <stop offset="100%" stopColor="blue" />
                            </linearGradient>
                        </defs>
                        <Star width="100%" height="100%" fill="url(#grad1)" stroke="url(#grad1)" />
                    </svg>
                </motion.div>

                <motion.div
                    className="absolute left-2 top-6 rotate-12"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                    <svg width="60" height="60" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="white" />
                                <stop offset="100%" stopColor="blue" />
                            </linearGradient>
                        </defs>
                        <Star width="100%" height="100%" fill="url(#grad1)" stroke="url(#grad1)" />
                    </svg>
                </motion.div>

                {/* Title */}
                <h1 className="text-neutral-200 text-5xl z-10">Effortless Coding, Smarter Snippets</h1>
                <p className="text-neutral-300 text-md text-center w-[45rem] mt-3">Write, compile, and store code effortlessly with an AI-powered editor. Summarize snippets instantly and enhance your coding workflow!</p>
                <CodeButton/>
            </div>
        </div>
    )
}

export default Hero
