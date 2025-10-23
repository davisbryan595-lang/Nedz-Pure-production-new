"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BeforeAfterSlider from "@/components/before-after-slider"

const galleryImages = [
  { src: "/professional-software-team-working-on-laptops.jpg", alt: "Software Team Collaboration", category: "team" },
  { src: "/developer-desk-with-monitors-and-code.jpg", alt: "Development Workspace", category: "workspace" },
  { src: "/data-visualization-dashboard.png", alt: "Data Dashboard", category: "project" },
  { src: "/server-room-rack.jpg", alt: "Server Infrastructure", category: "infrastructure" },
  { src: "/cloud-infrastructure.png", alt: "Cloud Solutions", category: "infrastructure" },
  { src: "/automation-robotics.jpg", alt: "Automation Systems", category: "project" },
  { src: "/whiteboard-planning-meeting.jpg", alt: "Strategy Planning", category: "team" },
  { src: "/aerial-long-island-coastline.jpg", alt: "Long Island Location", category: "location" },
  { src: "/office-meeting-in-modern-workspace.jpg", alt: "Modern Office", category: "workspace" },
  { src: "/closeup-code-on-screen.jpg", alt: "Code Development", category: "project" },
  { src: "/engineer-testing-robotics.jpg", alt: "Engineering Testing", category: "project" },
  { src: "/modern-tech-office-interior.jpg", alt: "Office Interior", category: "workspace" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our portfolio of successful projects and transformations
          </p>
        </motion.div>

        {/* Before/After Slider Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Transformation Showcase</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/old-legacy-dashboard-interface.jpg"
              afterImage="/modern-sleek-dashboard-interface.jpg"
              beforeLabel="Legacy System"
              afterLabel="Modern Solution"
            />
            <BeforeAfterSlider
              beforeImage="/cluttered-code-editor.jpg"
              afterImage="/clean-organized-code-editor.jpg"
              beforeLabel="Before Optimization"
              afterLabel="After Optimization"
            />
          </div>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={900}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">{galleryImages[selectedImage].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
