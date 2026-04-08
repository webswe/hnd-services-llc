import { Check } from "lucide-react";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Goal" },
  { value: "5★", label: "Google Rating" },
];

const highlights = [
  "Licensed & fully insured",
  "Locally owned & operated in Marietta, GA",
  "Clean, professional work crews",
  "Free estimates — no obligation",
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
            Built on Trust,<br />Driven by Quality
          </h2>
          <p className="text-primary-foreground/80 font-body leading-relaxed mb-8 text-lg">
            H&D Services LLC is a Marietta-based home improvement company committed to
            delivering honest, high-quality work. Whether it's a single room that needs
            fresh paint or a full exterior renovation, we treat every project like it's our own home.
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
