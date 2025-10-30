import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/nedzlogo.png"
                alt="Nedzpur Production"
                width={450} // 3x bigger
                height={150}
                className="h-28 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground mb-6 text-balance leading-relaxed">
              Visualization to the horizon. Full-stack IT services in Suffolk County, Long Island.
            </p>
            <div className="flex gap-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FFA500] transition-colors duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FFA500] transition-colors duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FFA500] transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FFA500] transition-colors duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FFA500] transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-5 text-lg text-white">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Frontend Development",
                "Backend Development",
                "IT Engineering",
                "Automation",
                "Data Analytics",
                "Software Testing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="hover:text-[#FFA500] transition-colors duration-300 hover:pl-1 inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-5 text-lg text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Portfolio", href: "#gallery" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#FFA500] transition-colors duration-300 hover:pl-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-5 text-lg text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Suffolk County</li>
              <li>Long Island, NY 11733</li>
              <li>
                <a
                  href="tel:+16316646632"
                  className="hover:text-[#FFA500] transition-colors duration-300"
                >
                  631664-6632
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@nedzpur.com"
                  className="hover:text-[#FFA500] transition-colors duration-300"
                >
                  contact@nedzpur.com
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                <strong>Hours:</strong>
                <br />
                Mon–Sat: 8:00 AM – 6:00 PM
                <br />
                Sunday: By appointment
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Nedzpur Production. All rights reserved.</p>
          <p className="text-balance text-center">
            Serving Suffolk County & Nassau County — Mobile consultations available.
          </p>
        </div>
      </div>
    </footer>
  )
}
