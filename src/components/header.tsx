"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, User } from "lucide-react"

export function Header() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true)
    })
    return () => cancelAnimationFrame(id)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">

      {/* Floating Center Header */}
      <header className="
        flex items-center justify-between
        w-full max-w-5xl
        rounded-full
        border border-white/10
        bg-background/70
        backdrop-blur-xl
        shadow-lg
        px-6 py-3
      ">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/bp-punchline-1.png"
            alt="Logo"
            width={120}
            height={30}
            className="h-6 w-auto object-contain"
            priority
          />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Theme */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-9 h-9"
            aria-label="Toggle theme"
          >
            {!mounted ? null : resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-indigo-500" />
            )}
          </Button>

          {/* Login */}
          <Link href="/login" className="hidden md:block">
            <Button className="rounded-full px-4">
              Sign In
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>

        </div>
      </header>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="
          absolute top-20 w-[90%] max-w-md
          rounded-2xl
          border border-white/10
          bg-background/90
          backdrop-blur-xl
          p-4 shadow-xl
        ">
          <Link href="/login" onClick={() => setMobileOpen(false)}>
            <Button className="w-full mt-3 rounded-xl">
              Sign In
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}