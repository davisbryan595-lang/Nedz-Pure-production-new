"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Database, Cog, BarChart3, TestTube, Cpu, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Beautiful, responsive user interfaces built with modern frameworks like React, Next.js, and Vue.",
    duration: "2-8 weeks",
    price: "From $5,000",
    color: "#FFD700",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable server-side solutions with Node.js, Python, and cloud infrastructure.",
    duration: "3-12 weeks",
    price: "From $8,000",
    color: "#FFA500",
  },
  {
    icon: Cpu,
    title: "IT Engineering",
    description: "Complete system architecture, DevOps, and infrastructure management.",
    duration: "4-16 weeks",
    price: "From $10,000",
    color: "#90EE90",
  },
  {
    icon: Cog,
    title: "Automation",
    description: "Streamline workflows with intelligent automation and process optimization.",
    duration: "2-6 weeks",
    price: "From $4,000",
    color: "#ADD8E6",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform data into insights with advanced analytics and visualization.",
    duration: "3-10 weeks",
    price: "From $6,000",
    color: "#FFD700",
  },
  {
    icon: TestTube,
    title: "Software Testing",
    description: "Comprehensive QA, automated testing, and quality assurance services.",
    duration: "2-8 weeks",
    price: "From $3,500",
    color: "#FFA500",
  },
  {
    icon: Cpu,
    title: "AI Training",
    description:
      "Custom AI model training and fine-tuning: dataset preparation, model selection, hyperparameter tuning, evaluation, and deployment for real-world applications.",
    duration: "4-12 weeks",
    price: "From $12,000",
    color: "#7C3AED",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glass hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-2 border-transparent hover:border-[#FFA500]/20">
                  <CardHeader>
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <Icon className="h-8 w-8" style={{ color: service.color }} />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold">{service.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Starting at:</span>
                        <span className="font-bold text-[#FFA500]">{service.price}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-[#FFA500] group-hover:text-white group-hover:border-[#FFA500] transition-all bg-transparent"
                      asChild
                    >
                      <a href="#contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
