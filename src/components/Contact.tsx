import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-accent font-body font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform<br />Your Outdoor Space?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            Request a free consultation and estimate. We'll visit your property, discuss your vision, and provide a detailed plan.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Call Us</p>
                <p className="font-body font-semibold text-foreground">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Email</p>
                <p className="font-body font-semibold text-foreground">info@cityscapelandscape.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Service Area</p>
                <p className="font-body font-semibold text-foreground">Greater Metro Area & Surrounding Counties</p>
              </div>
            </div>
          </div>
        </div>
        <form className="bg-card p-8 rounded-lg border border-border space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors" />
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors" />
            </div>
          </div>
          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors" />
          </div>
          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-2">Service Interested In</label>
            <select className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors">
              <option>Lawn Maintenance</option>
              <option>Landscape Design</option>
              <option>Garden Installation</option>
              <option>Hardscaping</option>
              <option>Irrigation Systems</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-2">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors resize-none" />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-md font-body font-semibold text-lg hover:opacity-90 transition-opacity">
            Request Free Estimate
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
