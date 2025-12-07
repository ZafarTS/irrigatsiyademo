import React, { useState, useEffect } from 'react';
import { Droplets, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentRoute?: string;
}

export function Navigation({ currentRoute = '/' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#problem', label: 'Muammo & Yechim', type: 'section' },
    { href: '#team', label: 'Jamoa', type: 'section' },
    { href: '/demo', label: 'Demo', type: 'page' },
    { href: '#roadmap', label: 'Yo\'l xaritasi', type: 'section' },
    { href: '#technology', label: 'Texnologiya', type: 'section' },
    { href: '#faq', label: 'FAQ', type: 'section' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    
    if (link.type === 'page') {
      // Page navigation
      if ((window as any).navigate) {
        (window as any).navigate(link.href);
      } else {
        window.location.href = link.href;
      }
      setIsMobileMenuOpen(false);
    } else {
      // Section scroll (only works on home page)
      if (currentRoute !== '/') {
        // If not on home page, go to home first
        if ((window as any).navigate) {
          (window as any).navigate('/');
        } else {
          window.location.href = '/';
        }
        // Scroll after navigation
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).navigate) {
      (window as any).navigate('/');
    } else {
      window.location.href = '/';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900">AI-Irrigatsiya</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`px-4 py-2 transition-colors rounded-lg hover:bg-green-50 ${
                  link.type === 'page' && currentRoute === link.href
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href='#contact'>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
              Bog'lanish
            </button>
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    link.type === 'page' && currentRoute === link.href
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a href='#contact'>
              <button className="mt-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-lg">
                Bog'lanish
              </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}