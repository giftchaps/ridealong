"use client"

import Link from "next/link"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const navigation = {
  company: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Mobility", href: "#mobility" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Software Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "Web Applications", href: "#services" },
    { name: "Systems Integration", href: "#services" },
  ],
  mobility: [
    { name: "Ride-Along Southern Africa", href: "#mobility" },
    { name: "Corporate Transport", href: "#mobility" },
    { name: "Fleet Solutions", href: "#mobility" },
  ],
}

export function Footer() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <footer ref={ref} className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-8">
        <div className={`grid gap-8 sm:gap-10 lg:gap-12 grid-cols-2 md:grid-cols-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-105">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-accent p-1.5 sm:p-2 transition-all duration-300">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/logo.png"
                    alt="Ride Along Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold leading-tight">Ride Along</span>
                <span className="text-[9px] sm:text-[10px] text-primary-foreground/60 leading-none">Software Services</span>
              </div>
            </Link>
            <p className="mt-4 text-xs sm:text-sm text-primary-foreground/70 max-w-xs">
              Software development and sustainable mobility solutions across Southern Africa.
            </p>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Mobility</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {navigation.mobility.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 ${isInView ? 'animate-fade-in stagger-3' : 'opacity-0'}`}>
          <p className="text-[10px] sm:text-xs text-primary-foreground/50 text-center sm:text-left">
            © {new Date().getFullYear()} Ride Along Software Services. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-primary-foreground/50">
            Headquartered in Lusaka, Zambia | Serving Southern Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
