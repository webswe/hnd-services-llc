import heroImage from "@/assets/hero-landscape.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Beautifully painted home exterior with clean siding and pressure-washed driveway"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary-foreground/80 font-body uppercase tracking-[0.3em] text-sm mb-6">
          Home Improvement Professionals
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
          H&D Services<br />
          <span className="text-accent">LLC</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10">
          Quality painting, pressure washing, carpentry, and home repairs you can trust.
          Serving Marietta, Georgia and the surrounding metro area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-body font-semibold text-lg hover:opacity-90 transition-opacity">
            Get a Free Estimate
          </a>
          <a href="#services" className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-md font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
