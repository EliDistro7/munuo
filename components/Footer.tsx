'use client';

import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white p-2 rounded-lg">
                <span className="font-bold text-lg">MT</span>
              </div>
              <div>
                <span className="font-bold text-xl">Munuo</span>
                <span className="font-light text-sky-400 ml-1">Travels</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sky-400" />
                <span className="text-gray-300">{t('common.phone')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-400" />
                <span className="text-gray-300">{t('common.email')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-sky-400" />
                <span className="text-gray-300">{t('contact.zanzibar')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-sky-400" />
                <span className="text-gray-300">munuo-travels.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-sky-400">{t('home.services.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tours" className="text-gray-300 hover:text-white transition-colors">
                  {t('home.tours.title')}
                </Link>
              </li>
              <li>
                <Link href="/language-learning" className="text-gray-300 hover:text-white transition-colors">
                  {t('home.language.title')}
                </Link>
              </li>
              <li>
                <Link href="/about-zanzibar" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-sky-400">{t('nav.contact')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('common.contact')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <a href={`https://wa.me/255755688091`} className="text-gray-300 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}