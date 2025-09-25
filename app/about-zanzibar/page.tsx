'use client';

import { Clock, Sun, Utensils, Camera, MapPin, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutZanzibarPage() {
  const { t } = useLanguage();

  const facts = [
    {
      icon: <MapPin className="h-8 w-8 text-sky-600" />,
      title: 'Location',
      description: 'Off the coast of Tanzania in the Indian Ocean'
    },
    {
      icon: <Users className="h-8 w-8 text-sky-600" />,
      title: 'Population',
      description: 'Approximately 1.9 million people'
    },
    {
      icon: <Sun className="h-8 w-8 text-sky-600" />,
      title: 'Climate',
      description: 'Tropical climate with warm weather year-round'
    },
    {
      icon: <Utensils className="h-8 w-8 text-sky-600" />,
      title: 'Cuisine',
      description: 'Blend of African, Arab, Indian, and European flavors'
    }
  ];

  const attractions = [
    {
      name: 'Stone Town',
      description: 'UNESCO World Heritage Site with rich Swahili culture',
      image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['House of Wonders', 'Sultan\'s Palace', 'Forodhani Gardens', 'Mercury House']
    },
    {
      name: 'Jozani Forest',
      description: 'Home to rare Red Colobus monkeys and mangrove boardwalks',
      image: 'https://images.pexels.com/photos/2832026/pexels-photo-2832026.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Red Colobus Monkeys', 'Nature Trails', 'Mangrove Ecosystems', 'Bird Watching']
    },
    {
      name: 'Spice Plantations',
      description: 'Discover why Zanzibar is called the "Spice Island"',
      image: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Cardamom & Cinnamon', 'Vanilla Orchards', 'Clove Trees', 'Traditional Medicine']
    },
    {
      name: 'Pristine Beaches',
      description: 'White sand beaches with crystal clear turquoise waters',
      image: 'https://images.pexels.com/photos/1320637/pexels-photo-1320637.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Nungwi Beach', 'Kendwa Beach', 'Paje Beach', 'Jambiani Beach']
    }
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
            backgroundImage: 'url(https://images.pexels.com/photos/1320637/pexels-photo-1320637.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Zanzibar at a Glance
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((fact, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {fact.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {fact.title}
                  </h3>
                  <p className="text-gray-600">
                    {fact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Sections */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* History & Culture */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-8">
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-sky-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-4">
                  {t('about.history.title')}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  {t('about.history.desc')}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Best Time to Visit */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-8">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Sun className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-4">
                  {t('about.best.title')}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  {t('about.best.desc')}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Cuisine */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Utensils className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-4">
                  {t('about.cuisine.title')}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  {t('about.cuisine.desc')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Must-Visit Attractions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Must-Visit Attractions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the wonders that make Zanzibar a unique and unforgettable destination
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {attractions.map((attraction, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{attraction.name}</h3>
                  </div>
                </div>
                
                <CardHeader className="p-8">
                  <CardDescription className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {attraction.description}
                  </CardDescription>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {attraction.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Tips */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cultural Tips & Etiquette
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Respect local customs and enhance your Zanzibar experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Dress Code',
                tip: 'Dress modestly, especially in Stone Town and religious areas. Cover shoulders and knees.',
                icon: '👗'
              },
              {
                title: 'Greetings',
                tip: 'Learn basic Swahili greetings. "Hujambo" (Hello) and "Asante" (Thank you) go a long way.',
                icon: '👋'
              },
              {
                title: 'Photography',
                tip: 'Ask permission before photographing people, especially women and in conservative areas.',
                icon: '📸'
              },
              {
                title: 'Bargaining',
                tip: 'Bargaining is expected in markets and with street vendors. Be respectful and fair.',
                icon: '💰'
              },
              {
                title: 'Ramadan',
                tip: 'During Ramadan, be respectful of fasting locals. Avoid eating in public during daylight.',
                icon: '🌙'
              },
              {
                title: 'Tipping',
                tip: 'Tipping is appreciated for good service. 10-15% in restaurants, small amounts for guides.',
                icon: '💝'
              }
            ].map((tip, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tip.tip}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}