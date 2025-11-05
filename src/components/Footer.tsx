const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border py-3">
      <div className="container mx-auto px-4 flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">About</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          <a href="#" className="hover:text-foreground transition-colors">Credits</a>
        </div>
        <span>v1.0 Beta</span>
      </div>
    </footer>
  );
};

export default Footer;
