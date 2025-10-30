"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "/professional-woman-headshot.png",
    rating: 5,
    text: "Nedzpur Production transformed our entire IT infrastructure. Their expertise in backend development and automation saved us countless hours and significantly improved our efficiency.",
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow Solutions",
    avatar: "/professional-man-headshot.png",
    rating: 5,
    text: "Outstanding data analytics services! They helped us unlock insights we never knew existed in our data. The team is professional, responsive, and truly understands business needs.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, CloudSync",
    avatar: "/avatar-1.png",
    rating: 5,
    text: "The frontend development work exceeded our expectations. Beautiful, responsive, and performant. Our users love the new interface!",
  },
  {
    name: "David Thompson",
    role: "Founder, StartupHub",
    avatar: "/professional-man-headshot-glasses.png",
    rating: 5,
    text: "From concept to deployment, Nedzpur Production was with us every step of the way. Their full-stack expertise is unmatched in Suffolk County.",
  },
  {
    name: "Lisa Wang",
    role: "Director of IT, MedTech Corp",
    avatar: "/professional-asian-woman-headshot.jpg",
    rating: 5,
    text: "Their software testing services caught critical issues before launch. The attention to detail and thoroughness is impressive. Highly recommend!",
  },
  {
    name: "James Martinez",
    role: "VP Engineering, FinanceFlow",
    avatar: "/professional-man-headshot-beard.png",
    rating: 5,
    text: "Exceptional engineering team! They designed and implemented a scalable architecture that has supported our 10x growth over the past year.",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Don't just take our word for it — hear from our satisfied clients
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <Card className="h-full glass hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-balance">"{testimonial.text}"</p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
