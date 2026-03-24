import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Cityscape completely transformed our backyard. The design team listened to every detail and delivered beyond our expectations. Our neighbors are jealous!",
    rating: 5,
  },
  {
    name: "David R.",
    text: "We've used their lawn maintenance service for 3 years. Always punctual, always thorough. Our lawn has never looked better.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    text: "The patio and fire pit they built for us became the heart of our outdoor entertaining. Incredible craftsmanship and fair pricing.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-body font-semibold uppercase tracking-[0.2em] text-sm text-center mb-3">
          Testimonials
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card p-8 rounded-lg border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6 italic">"{t.text}"</p>
              <p className="font-display font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
