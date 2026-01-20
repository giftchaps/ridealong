"use client"

import Image from "next/image"
import { Zap, Users, Leaf, Shield, Clock, Smartphone } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const features = [
  {
    icon: Zap,
    title: "100% Electric Fleet",
    description: "Zero-emission vehicles including BYD Dolphin and BYD Seagull models.",
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description: "Salaried, trained drivers delivering consistent service excellence.",
  },
  {
    icon: Shield,
    title: "Company-Owned Operations",
    description: "Direct control over quality, safety, and customer experience.",
  },
  {
    icon: Leaf,
    title: "Solar-Powered Charging",
    description: "Transitioning to renewable energy for sustainable operations.",
  },
  {
    icon: Clock,
    title: "Two-Shift Model",
    description: "24/7 availability with dedicated drivers per shift.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Booking",
    description: "Easy booking, payments, and real-time driver tracking.",
  },
]

const stats = [
  { value: "100", label: "Electric Vehicles" },
  { value: "200", label: "Professional Drivers" },
  { value: "60K", label: "Monthly Rides Target" },
  { value: "100%", label: "Zero Emissions" },
]

export function MobilitySection() {
  const { ref: contentRef, isInView: contentInView } = useInView()
  const { ref: featuresRef, isInView: featuresInView } = useInView()
  const { ref: visionRef, isInView: visionInView } = useInView()

  return (
    <section id="mobility" className="py-16 md:py-20 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
          <div className={contentInView ? 'animate-fade-in-up' : 'opacity-0'}>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-accent uppercase mb-3 md:mb-4">
              Ride-Along Southern Africa
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
              Electric mobility for a sustainable future
            </h2>
            <p className="mt-3 md:mt-4 text-base sm:text-lg text-muted-foreground">
              Our ride-hailing platform demonstrates our real-world execution capabilities. Starting in Lusaka, Zambia, Ride-Along operates a fully-owned fleet of electric vehicles with plans to expand across Southern Africa.
            </p>

            <div className="mt-8 md:mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`border-l-4 border-accent pl-3 sm:pl-4 transition-all duration-500 ${contentInView ? `animate-fade-in-left stagger-${index + 1}` : 'opacity-0'}`}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`grid gap-3 sm:gap-4 ${contentInView ? 'animate-fade-in-right stagger-2' : 'opacity-0'}`}>
            <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                src="/images/ride-yellow-car.jpeg"
                alt="Ride-Along electric vehicle"
                fill
                className="object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/professional-driver.jpg"
                  alt="Professional Ride-Along driver"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/mobile-app.jpg"
                  alt="Ride-Along mobile app"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div ref={featuresRef} className="mt-12 md:mt-16 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className={`flex gap-3 sm:gap-4 bg-card border border-border rounded-lg p-3 sm:p-4 transition-all duration-300 hover:border-accent hover:shadow-md ${featuresInView ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'}`}
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-transform duration-300 hover:scale-110">
                <feature.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision statement */}
        <div 
          ref={visionRef} 
          className={`mt-12 md:mt-16 rounded-xl md:rounded-2xl bg-primary p-6 sm:p-8 lg:p-12 transition-all duration-700 ${visionInView ? 'animate-scale-in' : 'opacity-0'}`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-accent uppercase mb-3 md:mb-4">
              Our Vision
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-primary-foreground text-balance leading-relaxed">
              {"\"To be Southern Africa's most trusted and sustainable mobility platform, leading the transition to electric transport across the region.\""}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
