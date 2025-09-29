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
      image: '/st1.jpg',
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
      image: '/spice1.jpg',
      highlights: ['Cardamom & Cinnamon', 'Vanilla Orchards', 'Clove Trees', 'Traditional Medicine']
    },
    {
      name: 'Pristine Beaches',
      description: 'White sand beaches with crystal clear turquoise waters',
      image: '/beach1.jpg',
      highlights: ['Nungwi Beach', 'Kendwa Beach', 'Paje Beach', 'Jambiani Beach']
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-emerald-900 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/food1.jpg)'
          }}
        />
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                Discover the Spice Island
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.9] tracking-tight">
              <span className="block font-extralight text-white/80">About</span>
              <span className="block font-bold bg-gradient-to-r from-sky-300 via-white to-emerald-300 bg-clip-text text-transparent">
                Zanzibar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-3xl">
              {t('about.subtitle')}
            </p>
            <div className="flex items-center space-x-8 text-white/70">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                <span className="text-sm">UNESCO Heritage</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-sm">Indian Ocean</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-700"></div>
                <span className="text-sm">Spice Island</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-sky-50/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-sky-100 to-emerald-100 text-slate-700 text-sm font-medium mb-6">
              Essential Information
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
              Zanzibar at a <span className="font-bold text-sky-600">Glance</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((fact, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-emerald-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative bg-gradient-to-br from-white to-slate-50 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {fact.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors duration-300">
                    {fact.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {fact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Sections */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,_theme(colors.sky.500)_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,_theme(colors.emerald.500)_0%,_transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              Discover More
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              The <span className="font-bold bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Essence</span> of Zanzibar
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {/* History & Culture */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative p-10">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full blur-xl" />
                  <div className="relative bg-gradient-to-br from-sky-50 to-sky-100 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="h-10 w-10 text-sky-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-slate-900 mb-6 font-light">
                  {t('about.history.title')}
                </CardTitle>
                <CardDescription className="text-lg text-slate-600 leading-relaxed">
                  {t('about.history.desc')}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Best Time to Visit */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative p-10">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full blur-xl" />
                  <div className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sun className="h-10 w-10 text-emerald-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-slate-900 mb-6 font-light">
                  {t('about.best.title')}
                </CardTitle>
                <CardDescription className="text-lg text-slate-600 leading-relaxed">
                  {t('about.best.desc')}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Cuisine */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative p-10">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-xl" />
                  <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
                    <Utensils className="h-10 w-10 text-orange-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-slate-900 mb-6 font-light">
                  {t('about.cuisine.title')}
                </CardTitle>
                <CardDescription className="text-lg text-slate-600 leading-relaxed">
                  {t('about.cuisine.desc')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Must-Visit Attractions */}
      <section className="py-32 bg-gradient-to-br from-white via-slate-50 to-sky-50/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-sky-100 to-emerald-100 text-slate-700 text-sm font-medium mb-6">
              Featured Destinations
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
              Must-Visit <span className="font-bold text-emerald-600">Attractions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover the wonders that make Zanzibar a unique and unforgettable destination
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto rounded-full mt-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {attractions.map((attraction, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-white">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 className="text-3xl font-light text-white mb-2 group-hover:text-sky-200 transition-colors duration-300">
                      {attraction.name}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full"></div>
                  </div>
                </div>
                
                <CardHeader className="p-10">
                  <CardDescription className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {attraction.description}
                  </CardDescription>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4 text-lg">Experience Highlights</h4>
                    <div className="flex flex-wrap gap-3">
                      {attraction.highlights.map((highlight, idx) => (
                        <Badge 
                          key={idx} 
                          className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-sky-100 hover:to-emerald-100 hover:text-slate-800 transition-all duration-300 border-0 text-sm font-medium"
                        >
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
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,.1)_50%,_transparent_75%)] bg-[length:60px_60px] animate-[slide_20s_linear_infinite]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              Cultural Guidance
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Cultural Tips & <span className="font-bold bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Etiquette</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Respect local customs and enhance your Zanzibar experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Dress Code',
                tip: 'Dress modestly, especially in Stone Town and religious areas. Cover shoulders and knees.',
                icon: '👗',
                gradient: 'from-pink-500/20 to-rose-500/20'
              },
              {
                title: 'Greetings',
                tip: 'Learn basic Swahili greetings. "Hujambo" (Hello) and "Asante" (Thank you) go a long way.',
                icon: '👋',
                gradient: 'from-sky-500/20 to-blue-500/20'
              },
              {
                title: 'Photography',
                tip: 'Ask permission before photographing people, especially women and in conservative areas.',
                icon: '📸',
                gradient: 'from-emerald-500/20 to-teal-500/20'
              },
              {
                title: 'Bargaining',
                tip: 'Bargaining is expected in markets and with street vendors. Be respectful and fair.',
                icon: '💰',
                gradient: 'from-amber-500/20 to-orange-500/20'
              },
              {
                title: 'Ramadan',
                tip: 'During Ramadan, be respectful of fasting locals. Avoid eating in public during daylight.',
                icon: '🌙',
                gradient: 'from-purple-500/20 to-indigo-500/20'
              },
              {
                title: 'Tipping',
                tip: 'Tipping is appreciated for good service. 10-15% in restaurants, small amounts for guides.',
                icon: '💝',
                gradient: 'from-red-500/20 to-pink-500/20'
              }
            ].map((tip, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-2xl bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${tip.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="relative p-8">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{tip.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors duration-300">
                    {tip.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {tip.tip}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-60px) translateY(-60px); }
          100% { transform: translateX(0) translateY(0); }
        }
      `}</style>
    </>
  );
}