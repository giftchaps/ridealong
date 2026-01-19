"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

export function HeroSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-city.jpg"
          alt="Southern African cityscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className={`max-w-2xl ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-accent uppercase mb-3 md:mb-4">
              Software + Mobility
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground text-balance leading-tight">
              Building software that moves Southern Africa forward
            </h1>
            <p className="mt-4 md:mt-6 text-base sm:text-lg leading-relaxed text-primary-foreground/80">
              Ride Along Software Services is a Southern African technology company headquartered in Zambia, delivering custom software solutions and pioneering sustainable electric mobility across the region.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <Link href="#services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transition-all duration-300 w-full sm:w-auto">
                <Link href="#mobility">Explore Mobility</Link>
              </Button>
            </div>
          </div>

          <div className={`relative ${isInView ? 'animate-fade-in-right stagger-2' : 'opacity-0'}`}>
            {/* Mobile image */}
            <div className="lg:hidden aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ev-fleet.jpg"
                alt="Electric vehicle fleet"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Desktop image with floating cards */}
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ev-fleet.jpg"
                  alt="Electric vehicle fleet"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-xl max-w-[220px] animate-float">
                <p className="text-xs text-accent uppercase tracking-wide font-semibold mb-1">Software</p>
                <p className="text-sm font-medium text-card-foreground">Custom solutions tailored to your business needs</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-xl max-w-[220px] animate-float-delayed">
                <p className="text-xs text-accent uppercase tracking-wide font-semibold mb-1">Mobility</p>
                <p className="text-sm font-medium text-card-foreground">100% electric fleet for sustainable transport</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
