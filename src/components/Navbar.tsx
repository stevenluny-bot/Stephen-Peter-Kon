import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

import BrandLogo from './BrandLogo';

interface NavbarProps {
  onConnectClick?: () => void;
}

export default function Navbar({ onConnectClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${
        isScrolled
          ? 'bg-black/95 border-b border-zinc-800 py-3.5 shadow-sm'
          : 'bg-black/80 backdrop-blur-sm py-4 border-b border-zinc-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single element brand wordmark with Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 text-base font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-zinc-300 transition-colors"
          >
            <BrandLogo size="sm" />
            <span>{PERSONAL_INFO.fullName}</span>
          </a>

          {/* Zone 2: 5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="whitespace-nowrap shrink-0 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onConnectClick) onConnectClick();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-white hover:bg-zinc-200 active:bg-zinc-300 rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-white"
            >
              Let's Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            className="md:hidden p-2 rounded text-zinc-400 hover:text-white hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu drop */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-3 border-t border-zinc-800 mt-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onConnectClick) onConnectClick();
                handleNavClick('#contact');
              }}
              className="block mt-2 px-3 py-2 text-center text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded transition-colors"
            >
              Let's Connect
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
