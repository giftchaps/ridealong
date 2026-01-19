"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Mobility", href: "#mobility" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-105">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-accent p-1.5 sm:p-2 transition-all duration-300">
            <div className="relative h-full w-full">
              <Image
                src="/images/logo.png"
                alt="Ride Along Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`text-sm sm:text-base font-bold leading-tight transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>Ride Along</span>
            <span className={`text-[9px] sm:text-[10px] leading-none transition-colors duration-300 ${scrolled ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>Software Services</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                scrolled ? 'text-muted-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`lg:hidden -m-2 inline-flex items-center justify-center rounded-md p-2 transition-colors duration-300 ${
            scrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-6 w-6">
            <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
            <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-border bg-background/95 backdrop-blur-md">
          <div className="space-y-1 px-4 sm:px-6 py-4">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block py-2.5 text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 ${
                  mobileMenuOpen ? `animate-fade-in-left stagger-${index + 1}` : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
