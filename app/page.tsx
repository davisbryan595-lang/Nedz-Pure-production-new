import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Mission from "@/components/mission"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Mission />
      <About />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
