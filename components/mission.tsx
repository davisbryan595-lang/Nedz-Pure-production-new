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
              Our mission is to empower businesses through innovative, reliable, and scalable IT solutions—bridging technology with strategy to help our clients thrive in a connected world.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empower our communities through exceptional service, our vision is founded on two pillars:delivering outstanding service experiences for our clients and cultivating a lasting presence in the communities that we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
