'use client';

import { ArrowRight, MapPin, Users, BookOpen, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HomePage() {
  const { t } = useLanguage();

  const destinations = [
    {
      name: 'Stone Town',
      image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'UNESCO World Heritage Site'
    },
    {
      name: 'Nungwi Beach',
      image: 'https://images.pexels.com/photos/1320637/pexels-photo-1320637.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pristine white sand beaches'
    },
    {
      name: 'Spice Farms',
      image: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Aromatic spice plantations'
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-sky-900 via-sky-700 to-emerald-600 flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1320637/pexels-photo-1320637.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                <Link href="/tours">
                  {t('hero.cta1')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sky-900 px-8 py-4 text-lg">
                <Link href="/language-learning">
                  {t('hero.cta2')}
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.welcome.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('home.welcome.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.services.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tours Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="p-8">
                <div className="bg-gradient-to-br from-sky-500 to-sky-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-gray-900 mb-4">
                  {t('home.tours.title')}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  {t('home.tours.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white">
                  <Link href="/tours">
                    {t('common.learn')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Language Learning Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="p-8">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-gray-900 mb-4">
                  {t('home.language.title')}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  {t('home.language.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Link href="/language-learning">
                    {t('common.learn')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.destinations.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                    <p className="text-sky-200">{destination.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
              <Link href="/gallery">
                {t('nav.gallery')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Happy Travelers
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                country: "United Kingdom",
                text: "Learning Swahili in Zanzibar was incredible! The cultural immersion made all the difference.",
                rating: 5
              },
              {
                name: "Marco Silva",
                country: "Brazil",
                text: "The Stone Town tour was fascinating. Our guide was knowledgeable and passionate about the history.",
                rating: 5
              },
              {
                name: "Emma Chen",
                country: "Australia",
                text: "Perfect blend of tourism and learning. The spice tour and language lessons exceeded my expectations!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sky-600">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Zanzibar Adventure?
          </h2>
          <p className="text-xl text-sky-100 mb-8 leading-relaxed">
            Contact us today to start planning your perfect Zanzibar experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 text-lg">
              <Link href="/contact">
                {t('common.contact')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 text-lg">
              <a href="https://wa.me/255755688091">
                <Users className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}