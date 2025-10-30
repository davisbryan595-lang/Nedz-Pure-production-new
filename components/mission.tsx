export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-gradient-to-b from-muted/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Mission</span> & <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            We build reliable, scalable, and user-friendly software solutions that empower organizations to achieve
            their goals. Our mission is to deliver exceptional engineering, clear communication, and measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to translate complex technical challenges into elegant, maintainable solutions. We
              prioritize quality, accessibility, and long-term value by combining deep technical expertise with a
              collaborative approach — ensuring every project we deliver drives real business outcomes.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where intelligent systems augment human creativity and decision-making. By
              responsibly integrating AI, automation, and data, we aim to help businesses become more efficient,
              resilient, and customer-focused — while maintaining transparency and ethical use of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
