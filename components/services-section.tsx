"use client"

import Image from "next/image"
import { Code, Database, Smartphone, Globe, Cog, BarChart3 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "End-to-end software solutions designed to solve your unique business challenges with scalable, maintainable code.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Modern web applications built with the latest technologies for performance, security, and scalability.",
  },
  {
    icon: Database,
    title: "Systems Integration",
    description: "Seamlessly connect your existing systems and data sources to create unified, efficient workflows.",
  },
  {
    icon: Cog,
    title: "API Development",
    description: "Robust, well-documented APIs that enable your systems to communicate effectively and securely.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights with custom dashboards and analytics solutions.",
  },
]

export function ServicesSection() {
  const { ref: headerRef, isInView: headerInView } = useInView()
  const { ref: cardsRef, isInView: cardsInView } = useInView()

  return (
    <section id="services" className="py-16 md:py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center mb-12 md:mb-16">
          <div className={`max-w-xl ${headerInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-accent uppercase mb-3 md:mb-4">
              What We Build
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
              Software development services
            </h2>
            <p className="mt-3 md:mt-4 text-base sm:text-lg text-muted-foreground">
              From concept to deployment, we build software that drives real business results.
            </p>
          </div>
          <div className={`relative aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-lg ${headerInView ? 'animate-fade-in-right stagger-2' : 'opacity-0'}`}>
            <Image
              src="/images/software-dev.jpg"
              alt="Software development team"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div ref={cardsRef} className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-card border border-border rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1 ${cardsInView ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'}`}
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">
                <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
