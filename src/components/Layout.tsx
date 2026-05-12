import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
         {/* Top CTA Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-3 sm:gap-6 text-sm">
            <a href="mailto:info@yiwulafatik.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={16} />
              <span>info@yiwulafatik.com</span>
            </a>
            <a href="tel:+8613012345678" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={16} />
              <span>+86 130 1234 5678</span>
            </a>
          </div>
        </div>
      </div>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">YL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">Yiwu Lafatik Trade Co., Ltd</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Timor-Leste • China</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                About
              </Link>
              <Link
                to="/team"
                className={`transition-colors ${
                  isActive("/team") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Team
              </Link>
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded ${
                    isActive("/") ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`px-4 py-2 rounded ${
                    isActive("/about") ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/team"
                  className={`px-4 py-2 rounded ${
                    isActive("/team") ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </Link>
                <a
                  href="#contact"
                  className="bg-primary text-white px-4 py-2.5 rounded-lg text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">YL</span>
                </div>
                <span className="font-semibold">Yiwu Lafatik Trade Co., Ltd</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                First Trade Company of Timor-Leste in China. Connecting businesses to global trade opportunities.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>📍 Yiwu, Zhejiang, China</p>
                <p>📍 Dili, Timor-Leste</p>
                <p>✉️ info@yiwulafatik.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  {/* <Facebook size={20} /> */}
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  {/* <Instagram size={20} /> */}
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2026 Yiwu Lafatik Trade Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
