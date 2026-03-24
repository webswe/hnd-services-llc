const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-bold">Cityscape Lawn & Landscape</p>
          <p className="font-body text-sm text-primary-foreground/60 mt-1">Transforming outdoor spaces since 2010</p>
        </div>
        <p className="font-body text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Cityscape Lawn & Landscape. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
