import { Check } from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2,500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
];

const highlights = [
  "Licensed & fully insured",
  "Locally owned & operated",
  "Eco-friendly practices",
  "Satisfaction guaranteed",
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-accent font-body font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            About Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Rooted in Quality,<br />Growing with You
          </h2>
          <p className="text-primary-foreground/80 font-body leading-relaxed mb-8 text-lg">
            Cityscape Lawn & Landscape was founded with a simple mission: to bring 
            professional-grade landscaping to every neighborhood. We combine horticultural 
            expertise with an eye for design to create outdoor spaces that inspire.
          </p>
          <ul className="space-y-3 mb-8">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 font-body">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/90">{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">{s.value}</div>
              <div className="font-body text-sm text-primary-foreground/70 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
