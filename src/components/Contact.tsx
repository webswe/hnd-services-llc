import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* Contact Info */}
        <div>
          <p className="text-accent font-body font-semibold uppercase tracking-widest text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Improve<br />Your Home?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            Request a free estimate — no obligation. We'll assess your project, discuss your goals, and provide a detailed quote.
          </p>

          <div className="space-y-6">
            {/* Call */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Call Us</p>
                <a href="tel:+14047981748" className="font-body font-semibold text-foreground hover:text-primary transition-colors">
                  (404) 798-1748
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Email</p>
                <a href="mailto:info@hdservicesllc.com" className="font-body font-semibold text-foreground hover:text-primary transition-colors">
                  irving.hernandez305@gmail.com
                </a>
              </div>
            </div>

            {/* Service Area */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Service Area</p>
                <p className="font-body font-semibold text-foreground">Marietta, GA & Greater Atlanta Metro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="bg-card p-8 rounded-lg border border-border space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block font-body text-sm font-medium text-foreground mb-2">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block font-body text-sm font-medium text-foreground mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="service" className="block font-body text-sm font-medium text-foreground mb-2">
              Service Interested In
            </label>
            <select
              id="service"
              className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
            >
              <option>Painting</option>
              <option>Pressure Washing</option>
              <option>Carpentry</option>
              <option>Drywall</option>
              <option>Siding</option>
              <option>Rotten Wood Repair</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-md font-body font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Request Free Estimate
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;