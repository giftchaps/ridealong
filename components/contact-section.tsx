"use client"

import { useState } from "react"
import { MapPin, Phone, Globe, ArrowRight, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { Alert, AlertDescription } from "@/components/ui/alert"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 2nd Floor Elunda Park II, Los Angeles Boulevard, Long Acres, Lusaka 10101, Zambia",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+260 961 195 728",
    href: "tel:+260961195728",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.your-ride-now.com",
    href: "https://www.your-ride-now.com",
  },
]

export function ContactSection() {
  const { ref: contentRef, isInView: contentInView } = useInView()
  const { ref: formRef, isInView: formInView } = useInView()
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage('')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://formspree.io/f/mgoodjwy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSuccessMessage('Thank you! Your message has been sent successfully.')
        e.currentTarget.reset()
        
        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(''), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setErrorMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div ref={contentRef} className={contentInView ? 'animate-fade-in-up' : 'opacity-0'}>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-accent uppercase mb-3 md:mb-4">
              Get in Touch
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
              {"Let's build something together"}
            </h2>
            <p className="mt-3 md:mt-4 text-base sm:text-lg text-muted-foreground">
              Whether you need custom software development, want to explore a technology partnership, or are interested in our mobility services, we would love to hear from you.
            </p>

            <div className="mt-8 md:mt-10 space-y-5 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={item.label} 
                  className={`flex gap-3 sm:gap-4 transition-all duration-500 ${contentInView ? `animate-fade-in-left stagger-${index + 1}` : 'opacity-0'}`}
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform duration-300 hover:scale-110">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm sm:text-base text-foreground font-medium hover:text-accent transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            ref={formRef} 
            className={`bg-card border border-border rounded-xl md:rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500 ${formInView ? 'animate-fade-in-right stagger-2' : 'opacity-0'}`}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-5 sm:mb-6">Send us a message</h3>
            {successMessage && (
              <Alert className="mb-4 border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">{successMessage}</AlertDescription>
              </Alert>
            )}
            {errorMessage && (
              <Alert className="mb-4 border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">{errorMessage}</AlertDescription>
              </Alert>
            )}
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-lg border border-input bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-input bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg border border-input bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-input bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none transition-all duration-300"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
