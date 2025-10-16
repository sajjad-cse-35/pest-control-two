import { PhoneCall, Menu, X } from "lucide-react";
import { useState, useRef, type MouseEvent } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    // close mobile menu if open
    setIsMenuOpen(false);

    const el = document.getElementById(id);
    if (el) {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8; // small gap
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      // fallback: update hash
      window.location.hash = id;
    }
  };

  return (
  <header ref={headerRef} className="bg-white text-gray-800 py-4 px-6 shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">PS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              Plumbing Service
            </span>
            <span className="text-sm text-gray-600 -mt-1">
              Professional Services
            </span>
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "services")}
            className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            About
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+15551234567"
            aria-label="Call 555-123-4567"
            className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 group"
          >
            <PhoneCall size={18} className="text-white" />
            <span className="font-semibold text-white">Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <a
              href="#home"
              className="font-medium text-gray-700 hover:text-blue-700 py-2 transition-colors"
              onClick={(e) => handleNavClick(e, "home")}
            >
              Home
            </a>
            <a
              href="#services"
              className="font-medium text-gray-700 hover:text-blue-700 py-2 transition-colors"
              onClick={(e) => handleNavClick(e, "services")}
            >
              Services
            </a>
            <a
              href="#about"
              className="font-medium text-gray-700 hover:text-blue-700 py-2 transition-colors"
              onClick={(e) => handleNavClick(e, "about")}
            >
              About
            </a>

            <a
              href="tel:+15551234567"
              aria-label="Call 555-123-4567"
              className="flex items-center space-x-2 bg-blue-600 py-3 px-4 rounded-lg mt-2"
            >
              <PhoneCall size={18} className="text-white" />
              <span className="font-semibold text-white">Call Now</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
