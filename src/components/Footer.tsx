const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-md border-t border-primary/20 py-3">
      <div className="container mx-auto px-4 flex items-center justify-between text-sm">
        <div className="flex gap-4 text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
          <a href="#" className="hover:text-primary transition-colors">Credits</a>
        </div>
        <span className="text-muted-foreground flex items-center gap-1">
          Made with <span className="text-red-500">❤️</span> for Travelers · v1.0 Beta
        </span>
      </div>
    </footer>
  );
};

export default Footer;
