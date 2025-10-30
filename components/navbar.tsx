"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolledPastHero, setScrolledPastHero] = useState(false)

  // Detect general scroll for background blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Detect when hero section leaves viewport
  useEffect(() => {
    const hero = document.querySelector("#home")
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolledPastHero(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg backdrop-blur-md bg-white/80 border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-3">
            <div className="relative w-64 h-20">
              <Image
                src="/nedzlogo.png"
                alt="Nedzpur Production Logo"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 transition-colors duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold transition-all duration-300 
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 
                  hover:after:w-full
                  ${
                    scrolledPastHero
                      ? "text-black hover:text-[#FF8C00] after:bg-[#FF8C00]"
                      : "text-white hover:text-[#FFD700] after:bg-[#FFD700]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className={`transition-all duration-300 shadow-md ${
                scrolledPastHero
                  ? "bg-[#FFA500] hover:bg-[#FF8C00] text-white"
                  : "bg-[#FFA500] hover:bg-[#FF8C00] text-white animate-pulse-glow shadow-[0_0_12px_rgba(255,165,0,0.6)]"
              }`}
            >
              <a href="tel:+16316646632">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              scrolledPastHero ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden border-t backdrop-blur-md transition-all duration-300 ${
            scrolledPastHero ? "bg-white/90 border-gray-200" : "bg-black/70 border-white/20"
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-sm font-medium transition-colors ${
                  scrolledPastHero ? "text-black hover:text-[#FF8C00]" : "text-white hover:text-[#FFD700]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className={`w-full transition-colors ${
                scrolledPastHero
                  ? "bg-[#FFA500] hover:bg-[#FF8C00] text-white"
                  : "bg-[#FFA500] hover:bg-[#FF8C00] text-white"
              }`}
            >
              <a href="tel:+16316646632">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
