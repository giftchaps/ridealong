"use client"

import { CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const differentiators = [
  {
    title: "Real-World Execution",
    description: "We don't just build software—we operate it. Our mobility platform proves our ability to deliver production-ready solutions.",
  },
  {
    title: "Regional Expertise",
    description: "Deep understanding of Southern African business landscapes, regulations, and market needs with global technical standards.",
  },
  {
    title: "Full-Stack Capability",
    description: "From mobile apps to fleet management systems, we handle the entire technology stack in-house.",
  },
  {
    title: "Sustainable Focus",
    description: "Committed to building technology that supports environmental sustainability and social impact.",
  },
]

const benefits = [
  "End-to-end project ownership",
  "Transparent communication",
  "Agile development methodology",
  "Post-deployment support",
  "Scalable architecture",
  "Security-first approach",
]

export function WhyUsSection() {
  const { ref: contentRef, isInView: contentInView } = useInView()
  const { ref: cardRef, isInView: cardInView } = useInView()

  return (
    <section id="why-us" className="py-16 md:py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div ref={contentRef} className={contentInView ? 'animate-fade-in-up' : 'opacity-0'}>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-accent uppercase mb-3 md:mb-4">
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
              Technology with proven execution
            </h2>
            <p className="mt-3 md:mt-4 text-base sm:text-lg text-muted-foreground">
              What sets us apart is our unique combination of software expertise and operational experience in the mobility sector.
            </p>

            <div className="mt-8 md:mt-10 space-y-5 sm:space-y-6">
              {differentiators.map((item, index) => (
                <div 
                  key={item.title} 
                  className={`flex gap-3 sm:gap-4 transition-all duration-500 ${contentInView ? `animate-fade-in-left stagger-${index + 1}` : 'opacity-0'}`}
                >
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            ref={cardRef} 
            className={`bg-card border border-border rounded-xl md:rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500 ${cardInView ? 'animate-fade-in-right stagger-2' : 'opacity-0'}`}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-5 sm:mb-6">What you get working with us</h3>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit} 
                  className={`flex items-center gap-2 sm:gap-3 transition-all duration-300 ${cardInView ? `animate-fade-in stagger-${index + 1}` : 'opacity-0'}`}
                >
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border">
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Trusted by partners including:</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground">
                <span className="bg-muted px-2 sm:px-3 py-1 sm:py-1.5 rounded transition-colors duration-300 hover:bg-accent hover:text-accent-foreground">Silandela Investment Group</span>
                <span className="bg-muted px-2 sm:px-3 py-1 sm:py-1.5 rounded transition-colors duration-300 hover:bg-accent hover:text-accent-foreground">Seke Energy Limited</span>
                <span className="bg-muted px-2 sm:px-3 py-1 sm:py-1.5 rounded transition-colors duration-300 hover:bg-accent hover:text-accent-foreground">Avis Fleet Management</span>
                <span className="bg-muted px-2 sm:px-3 py-1 sm:py-1.5 rounded transition-colors duration-300 hover:bg-accent hover:text-accent-foreground">Diskava Communications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
