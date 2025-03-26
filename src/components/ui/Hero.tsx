"use client"

import { LibraryBig, Star } from "lucide-react"
import { motion } from "framer-motion"
import React from "react"
import CodeButton from "./CodeButton"

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 items-center justify-center h-fit px-4 md:px-8"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-2 items-center text-neutral-200 shadow-xl bg-black/40 p-2 rounded-3xl text-xs md:text-xs"
            >
                <LibraryBig size={16} className="md:size-3" />
                <p>Community Code Library</p>
            </motion.div>

            <div className="relative flex flex-col items-center">
                <motion.div
                    className="absolute right-8 md:right-16 -top-4 md:-top-6 rotate-12"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                    <svg width="50" height="50" viewBox="0 0 24 24">
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
                    className="absolute left-2 md:left-4 top-4 md:top-6 rotate-12"
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

                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-neutral-200 text-3xl md:text-5xl z-10 text-center"
                >
                    Effortless Coding, Smarter Snippets
                </motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-neutral-300 text-sm md:text-md text-center w-full md:w-[45rem] mt-3"
                >
                    Write, compile, and store code effortlessly with an AI-powered editor. Summarize snippets instantly and enhance your coding workflow!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <CodeButton />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Hero
