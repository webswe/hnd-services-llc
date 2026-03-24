import { Leaf, TreePine, Flower2, Shovel, Droplets, Sun } from "lucide-react";

const services = [
  { icon: Leaf, title: "Lawn Maintenance", desc: "Weekly mowing, edging, fertilization, and seasonal cleanups to keep your lawn pristine." },
  { icon: TreePine, title: "Landscape Design", desc: "Custom designs that blend architecture with nature for stunning curb appeal." },
  { icon: Flower2, title: "Garden Installation", desc: "From perennial beds to native plantings, we create gardens that thrive year-round." },
  { icon: Shovel, title: "Hardscaping", desc: "Patios, retaining walls, walkways, and fire pits built to last." },
  { icon: Droplets, title: "Irrigation Systems", desc: "Smart irrigation design, installation, and maintenance for water efficiency." },
  { icon: Sun, title: "Seasonal Programs", desc: "Spring cleanups, fall leaf removal, snow management, and holiday lighting." },
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
          From routine maintenance to complete landscape transformations, we deliver excellence at every scale.
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
