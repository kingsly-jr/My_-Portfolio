'use client';

import React, { useRef } from 'react';
import AnimatedLink from '@/components/ui/AnimateLink';
import { FaArrowUp } from 'react-icons/fa';
import { useHandleLinkClick } from '@/lib/navigation';
import { useLenis } from '@/components/providers/SmoothScrollProvider';
import Lenis from '@studio-freight/lenis';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const lenisRef = useLenis() as React.RefObject<Lenis | null> | null;
  const lenis = lenisRef?.current;

  const handleLinkClick = useHandleLinkClick();
  const links = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Work', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative z-30 bg-cream px-6 sm:px-8 md:px-12 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-12">
          <div>
            <h3 className="text-warm text-base sm:text-lg font-sans tracking-wide font-semibold mb-4 md:mb-6">
              Menu
            </h3>
            <ul className="flex flex-col gap-3 sm:gap-4 text-warm text-xs sm:text-sm font-sans font-medium uppercase tracking-wide">
              {links.map((link) => (
                <AnimatedLink key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </AnimatedLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-warm text-base sm:text-lg font-sans tracking-wide font-semibold mb-4 md:mb-6">
              Socials
            </h3>
            <ul className="flex flex-col gap-3 sm:gap-4 text-warm text-xs sm:text-sm font-sans font-medium uppercase tracking-wide">
              <AnimatedLink>
                <a href="https://www.linkedin.com/in/kingslyjoyalraj-j" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </a>
              </AnimatedLink>
              <AnimatedLink>
                <a href="https://github.com/kingsly-jr" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </AnimatedLink>
            </ul>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-footer-bg border border-footer-border flex items-center justify-center text-warm hover:text-forest hover:border-forest hover:bg-forest/10 transition-all duration-300 group focus:outline-none"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
