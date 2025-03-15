'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const GeneralHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const menuItems = [
    {
      title: 'Start here',
      href: '#',
    },
    {
      title: 'Finance 101',
      href: '#',
    },
    {
      title: 'Calculators',
      href: '#',
    },
  ];

  return (
    <div className="bg-[#1e2323]">
      <header className="mx-auto flex items-center justify-between p-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <Link href="." className="flex text-xl font-medium text-white">
          PaisaSync
        </Link>

        {/* Mobile menu toggler */}
        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <div className="relative h-6 w-6">
              {/* Top bar */}
              <span
                className={`absolute block h-0.5 w-6 transform bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'top-3 rotate-45' : 'top-1 rotate-0'
                }`}
              ></span>

              {/* Middle bar */}
              <span
                className={`absolute top-3 block h-0.5 w-6 bg-white transition-all duration-200 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>

              {/* Bottom bar */}
              <span
                className={`absolute block h-0.5 w-6 transform bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'top-3 -rotate-45' : 'top-5 rotate-0'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center space-x-10 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              title={item.title}
              className="text-white transition-all hover:text-emerald-500"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Sign in button (hidden on mobile) */}
        <Link
          href="/overview"
          className="btn hidden border-emerald-500 px-6 py-2 text-emerald-500 hover:bg-emerald-500 hover:text-white md:inline-block"
        >
          Sign in
        </Link>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-4 border-t border-gray-700 bg-[#1e2323] px-2 pt-2 pb-4 text-center">
          {menuItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              title={item.title}
              className="block translate-y-0 transform px-3 py-2 text-white transition-all hover:text-emerald-500"
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/login"
            className="btn mx-3 border-emerald-500 px-10 py-2 text-center text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
