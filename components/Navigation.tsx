'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/tours', label: t('nav.tours') },
    { href: '/language-learning', label: t('nav.language') },
    { href: '/about-zanzibar', label: t('nav.about') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-sky-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white p-2 rounded-lg">
              <span className="font-bold text-lg">MT</span>
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900">Munuo</span>
              <span className="font-light text-sky-600 ml-1">Travels</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-sky-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-gray-200 pl-6">
              <Globe className="h-4 w-4 text-gray-500" />
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="h-8 px-3"
              >
                EN
              </Button>
              <Button
                variant={language === 'sw' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('sw')}
                className="h-8 px-3"
              >
                SW
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
            >
              {language.toUpperCase()}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-sky-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}