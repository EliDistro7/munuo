'use client';

import { MapPin, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ToursPage() {
  const { t } = useLanguage();

  const tours = [
    {
      title: t('tours.stonetown.title'),
      description: t('tours.stonetown.desc'),
      image: '/st1.jpg',
      duration: '4 hours',
      groupSize: '2-8 people',
      price: '$45',
      highlights: ['UNESCO World Heritage Site', 'House of Wonders', 'Forodhani Gardens', 'Local Markets']
    },
    {
      title: t('tours.spice.title'),
      description: t('tours.spice.desc'),
      image: '/spice1.jpg',
      duration: '6 hours',
      groupSize: '2-12 people',
      price: '$35',
      highlights: ['Cardamom & Cinnamon', 'Tropical Fruits', 'Traditional Lunch', 'Spice Shopping']
    },
    {
      title: t('tours.beach.title'),
      description: t('tours.beach.desc'),
      image: '/beach1.jpg',
      duration: 'Full Day',
      groupSize: '2-15 people',
      price: '$65',
      highlights: ['Snorkeling Equipment', 'Beach Activities', 'Fresh Seafood', 'Sunset Views']
    },
   
    {
      title: t('tours.safari.title'),
      description: t('tours.safari.desc'),
      image: '/blue1.png',
      duration: 'Full Day',
      groupSize: '6-25 people',
      price: '$85',
      highlights: ['Menai Bay', 'Sandbank Relaxation', 'Snorkeling', 'Seafood BBQ']
    },
    {
      title: t('tours.prison.title'),
      description: t('tours.prison.desc'),
      image: 'https://images.pexels.com/photos/2832024/pexels-photo-2832024.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4 hours',
      groupSize: '2-10 people',
      price: '$50',
      highlights: ['Giant Tortoises', 'Island History', 'Snorkeling', 'Beach Time']
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-sky-900 via-sky-700 to-emerald-600 flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('tours.title')}
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed">
              {t('tours.subtitle')}
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              <Link href="/contact">
                {t('common.book')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {tours.map((tour, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white text-lg px-3 py-1">
                      {tour.price}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl text-gray-900 mb-4">
                    {tour.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    {tour.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8 pt-0">
                  {/* Tour Details */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-sky-600" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-sky-600" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Tour Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button asChild className="flex-1 bg-sky-600 hover:bg-sky-700 text-white">
                      <Link href="/contact">
                        {t('common.book')}
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href="https://wa.me/255755688091">
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Munuo Travels?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-sky-600" />,
                title: 'Local Expertise',
                description: 'Born and raised in Zanzibar, our guides know every hidden gem and story.'
              },
              {
                icon: <Star className="h-12 w-12 text-sky-600" />,
                title: 'Authentic Experiences',
                description: 'We provide genuine cultural experiences, not just tourist attractions.'
              },
              {
                icon: <MapPin className="h-12 w-12 text-sky-600" />,
                title: 'Small Groups',
                description: 'Intimate group sizes ensure personalized attention and better experiences.'
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
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
            Ready to Explore Zanzibar?
          </h2>
          <p className="text-xl text-sky-100 mb-8 leading-relaxed">
            Book your unforgettable Zanzibar experience today
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
                WhatsApp: {t('common.phone')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}