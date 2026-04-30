import { Link, Outlet, useLocation } from "react-router-dom";
import { Phone, MapPin, Clock, Menu, X, Stethoscope } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar - Local SEO Focus */}
      <div className="bg-primary-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary-300" />
              <span>123 Smile Avenue, Seattle, WA 98101</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary-300" />
              <span>Mon-Fri: 8am - 6pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 font-medium">
            <Phone className="w-4 h-4 text-primary-300" />
            <a href="tel:+12065550123" className="hover:text-primary-200 transition-colors">
              (206) 555-0123
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-900 leading-none">Seattle Smiles</span>
                <span className="block text-xs text-primary-600 font-medium mt-1">DENTAL CLINIC</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary-600",
                    location.pathname === link.path ? "text-primary-600" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+12065550123"
                className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-sm flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    location.pathname === link.path
                      ? "bg-primary-50 text-primary-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-primary-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+12065550123"
                className="mt-4 w-full flex items-center justify-center space-x-2 bg-primary-600 text-white px-4 py-3 rounded-md font-medium hover:bg-primary-700"
              >
                <Phone className="w-5 h-5" />
                <span>Call (206) 555-0123</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer - Local SEO Focus */}
      <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand & About */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Stethoscope className="w-6 h-6 text-primary-400" />
                <span className="text-xl font-bold text-white">Seattle Smiles</span>
              </div>
              <p className="text-sm leading-relaxed">
                Providing top-rated, compassionate dental care for families in Seattle, WA. From routine cleanings to advanced implants.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-primary-400 transition-colors">Dental Implants</Link></li>
                <li><Link to="/services" className="hover:text-primary-400 transition-colors">Invisalign & Braces</Link></li>
                <li><Link to="/services" className="hover:text-primary-400 transition-colors">Root Canal Therapy</Link></li>
                <li><Link to="/blog" className="hover:text-primary-400 transition-colors">Dental Health Blog</Link></li>
              </ul>
            </div>

            {/* Contact Info (NAP) */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                  <span>123 Smile Avenue<br />Seattle, WA 98101</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                  <a href="tel:+12065550123" className="hover:text-white transition-colors">(206) 555-0123</a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-white font-semibold mb-4">Office Hours</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Monday - Friday</span> <span>8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between text-slate-500"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Seattle Smiles Dental Clinic. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/" className="hover:text-white">Privacy Policy</Link>
              <Link to="/" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
