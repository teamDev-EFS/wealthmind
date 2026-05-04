const Footer = () => (
  <footer className="bg-surface-1 text-text-secondary py-8 border-t border-border mt-8">
    <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm">© {new Date().getFullYear()} WealthMind. All rights reserved.</div>
      <div className="flex gap-6 text-xs">
        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-primary transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
