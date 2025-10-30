"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Download } from "lucide-react"

const pricingTiers = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 3 projects per month",
      "Frontend or Backend development",
      "Basic support (email)",
      "2 revision rounds",
      "Monthly progress reports",
      "Source code included",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$5,000",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 6 projects per month",
      "Full-stack development",
      "Priority support (phone & email)",
      "Unlimited revisions",
      "Weekly progress reports",
      "Source code + documentation",
      "Data analytics included",
      "Automation consulting",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited projects",
      "Dedicated team of specialists",
      "24/7 premium support",
      "Unlimited revisions",
      "Daily progress updates",
      "Complete documentation",
      "All services included",
      "Custom SLA agreements",
      "On-site consultations",
      "Training & workshops",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance mb-8">
            Choose the perfect plan for your business needs
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center glass rounded-full p-1">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly" ? "bg-[#FFA500] text-white" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "yearly" ? "bg-[#FFA500] text-white" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
              <span className="ml-2 text-xs bg-[#90EE90] text-black px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={tier.popular ? "md:-mt-4" : ""}
            >
              <Card
                className={`h-full glass hover:shadow-2xl transition-all duration-300 ${
                  tier.popular ? "border-2 border-[#FFA500] shadow-xl scale-105" : "hover:-translate-y-2"
                }`}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-center py-2 text-sm font-semibold text-white rounded-t-xl">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-base mb-6">{tier.description}</CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold gradient-text">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#90EE90] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      tier.popular ? "bg-[#FFA500] hover:bg-[#FF8C00] text-white" : "bg-secondary hover:bg-secondary/80"
                    }`}
                    size="lg"
                    asChild
                  >
                    <a href="#contact">{tier.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Download PDF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="glass bg-transparent">
            <Download className="mr-2 h-5 w-5" />
            Download Pricing PDF
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
