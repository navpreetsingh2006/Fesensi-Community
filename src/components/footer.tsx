"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {  Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-col md:flex-row items-center justify-between gap-6 px-6 py-6 md:py-0 lg:px-8">
        
        {/* Left Side: Logo (Aligned with the Header design) */}
        <Link href="/" className="relative flex items-center gap-2 group hover:motion-preset-confetti shrink-0">
          <Image
            src="/bp-punchline-1.png"
            alt="Fesensi Logo"
            width={120}
            height={24}
            className="h-5 sm:h-6 w-auto object-contain dark:invert"
            priority
          />
        </Link>

        {/* Center: Address & Copyright (Styled with Montserrat) */}
        <div 
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="flex flex-col items-center md:items-start lg:items-center text-center gap-1 text-xs md:text-sm text-foreground/70"
        >
          <span>© {currentYear} Fesensi AI Labs (Pte. Ltd.). All rights reserved.</span>
          <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-medium">
            Singapore & APAC Operations · 10 Anson Road, Singapore
          </span>
        </div>

        {/* Right Side: Social Media Links & Heart Anchor */}
        <div className="flex items-center gap-4 text-foreground/60">
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter Profile"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Github Profile"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a> */}
          <span className="border-l border-border/60 pl-4 flex items-center gap-1 text-[10px] uppercase font-semibold text-muted-foreground/80 tracking-wide">
            Made with Fesensi Community
          </span>
        </div>

      </div>
    </footer>
  )
}