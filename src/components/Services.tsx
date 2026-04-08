import { Paintbrush, Droplets, Hammer, LayoutGrid, PanelTop, Wrench } from "lucide-react";

const services = [
  { icon: Paintbrush, title: "Painting", desc: "Interior and exterior painting with premium paints and meticulous prep work for a flawless, long-lasting finish." },
  { icon: Droplets, title: "Pressure Washing", desc: "Driveways, decks, siding, fences, and more — restored to like-new condition with professional-grade equipment." },
  { icon: Hammer, title: "Carpentry", desc: "Custom trim, framing, door installation, deck building, and finish carpentry with expert craftsmanship." },
  { icon: LayoutGrid, title: "Drywall", desc: "Installation, patching, texturing, and finishing for seamless walls and ceilings in any room." },
  { icon: PanelTop, title: "Siding", desc: "Siding repair and installation — vinyl, fiber cement, and wood — to protect and beautify your home." },
  { icon: Wrench, title: "Rotten Wood Repair", desc: "Structural and cosmetic wood rot repair for fascia, soffits, window frames, and decks before it spreads." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-body font-semibold uppercase tracking-[0.2em] text-sm text-center mb-3">
          What We Do
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
          Our Services
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 font-body">
          From a fresh coat of paint to full structural repairs, H&D Services delivers quality home improvement at every scale.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-card p-8 rounded-lg border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
