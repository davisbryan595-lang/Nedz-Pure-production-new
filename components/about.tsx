"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Target, Award, Zap } from "lucide-react"

const teamRoles = [
  { role: "Backend Engineers", count: 12, icon: "🔧" },
  { role: "Frontend Developers", count: 15, icon: "💻" },
  { role: "IT Specialists", count: 8, icon: "🖥️" },
  { role: "Engineers", count: 10, icon: "⚙️" },
  { role: "Data Analysts", count: 6, icon: "📊" },
  { role: "QA Testers", count: 7, icon: "🧪" },
  { role: "Automation Experts", count: 5, icon: "🤖" },
]

const timeline = [
  { year: "2015", event: "Company Founded", description: "Started with a vision to transform IT services" },
  { year: "2018", event: "Expanded Team", description: "Grew to 25+ professionals" },
  { year: "2021", event: "Major Milestone", description: "Completed 300+ projects" },
  { year: "2025", event: "Industry Leader", description: "Recognized as top IT service provider in Suffolk County" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Nedzpur Production</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            We are a full-service IT company dedicated to delivering cutting-edge solutions that drive business growth
            and innovation.
          </p>
        </motion.div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "Empower businesses with innovative technology solutions",
              color: "#FFD700",
            },
            {
              icon: Users,
              title: "Our Team",
              description: "50+ experienced professionals ready to help",
              color: "#FFA500",
            },
            {
              icon: Award,
              title: "Our Quality",
              description: "98% client satisfaction rate across all projects",
              color: "#90EE90",
            },
            {
              icon: Zap,
              title: "Our Speed",
              description: "Fast turnaround without compromising quality",
              color: "#ADD8E6",
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <Icon className="h-8 w-8" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-balance">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Team Composition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Expert Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {teamRoles.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="glass p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{team.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">{team.count}</div>
                <div className="text-xs text-muted-foreground text-balance">{team.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#90EE90] hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass p-6 rounded-2xl inline-block">
                      <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold mb-2">{item.event}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 rounded-full bg-[#FFA500] border-4 border-background shadow-lg z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
