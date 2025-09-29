'use client';

import { ArrowRight, MapPin, Users, BookOpen, Star, Sparkles, Globe, Award, Compass, Heart, Camera } from 'lucide-react';
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
      image: '/st1.jpg',
      description: 'UNESCO World Heritage Site',
      highlight: 'Historic',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Nungwi Beach',
      image: '/nungwi1.jpg',
      description: 'Pristine white sand beaches',
      highlight: 'Paradise',
      gradient: 'from-sky-500 to-blue-600'
    },
    {
      name: 'Spice Farms',
      image: '/spice1.jpg',
      description: 'Aromatic spice plantations',
      highlight: 'Authentic',
      gradient: 'from-emerald-500 to-green-600'
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section with Advanced Parallax */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-emerald-900 flex items-center overflow-hidden">
        {/* Dynamic Background Elements */}
  <div className="absolute inset-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-15"
    >
      <source src="/zanz.mp4" type="video/mp4" />
      {/* Fallback to image if video fails */}
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Dynamic Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
    <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
  </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-12">
              {/* Hero Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 mb-8 border border-white/20 shadow-2xl">
                <Sparkles className="w-6 h-6 text-orange-400 mr-3 animate-spin" style={{animationDuration: '3s'}} />
                <span className="text-white/90 font-semibold text-lg">Experience Authentic Zanzibar</span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-10 leading-none tracking-tight">
                <span className="block bg-gradient-to-r from-white via-sky-200 to-emerald-300 bg-clip-text text-transparent drop-shadow-2xl">
                  Discover Zanzibar
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-2xl md:text-3xl lg:text-4xl text-sky-100/90 mb-12 leading-relaxed font-light max-w-4xl backdrop-blur-sm">
                Immerse yourself in culture, learn Swahili, and create unforgettable memories
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Button asChild size="lg" className="group bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 border border-white/20">
                  <Link href="/tours">
                    <span className="flex items-center">
                      Explore Tours
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group border-2 border-white/40 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 hover:border-white/60 px-12 py-6 text-xl rounded-2xl shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500">
                  <Link href="/language-learning">
                    <span className="flex items-center">
                      Learn Swahili
                      <BookOpen className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 opacity-90 justify-center">
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl font-black text-white">500+</div>
                  <div className="text-sky-200 font-medium">Happy Travelers</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl font-black text-white">15+</div>
                  <div className="text-sky-200 font-medium">Years Experience</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl font-black text-white">50+</div>
                  <div className="text-sky-200 font-medium">Cultural Sites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section with Modern Design */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-sky-50 relative overflow-hidden">
        {/* Advanced Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-sky-200/30 to-emerald-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gradient-to-br from-emerald-300/20 to-sky-300/20 rounded-full blur-2xl" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-bounce">
          <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full opacity-60 shadow-xl" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{animationDelay: '1.5s'}}>
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl rotate-45 opacity-50 shadow-lg" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-sky-500 via-sky-600 to-emerald-600 rounded-3xl mb-12 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Globe className="w-10 h-10 text-white animate-spin" style={{animationDuration: '8s'}} />
            </div>
            
            {/* Main Heading */}
            <h2 className="text-6xl md:text-8xl font-black mb-10 leading-tight">
              <span className="bg-gradient-to-r from-slate-800 via-sky-700 to-emerald-700 bg-clip-text text-transparent">
                Welcome to Paradise
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-2xl md:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light mb-16">
              Experience the magic of Zanzibar through authentic cultural immersion and language learning adventures
            </p>
            
            {/* Enhanced Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-sky-100">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-sky-600 mb-2">500+</div>
                <div className="text-slate-600 font-semibold text-lg">Happy Travelers</div>
              </div>
              <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-100">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-emerald-600 mb-2">15+</div>
                <div className="text-slate-600 font-semibold text-lg">Years Experience</div>
              </div>
              <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-orange-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-orange-600 mb-2">50+</div>
                <div className="text-slate-600 font-semibold text-lg">Cultural Sites</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
   
        
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-white via-sky-200 to-emerald-200 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto font-light">
              Discover Zanzibar through our expertly crafted experiences
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Tours Card */}
            <Card className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 hover:border-sky-500/50 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-400 to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              <CardHeader className="p-12 relative z-10">
                <div className="bg-gradient-to-br from-sky-400 to-sky-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-4xl md:text-5xl text-white mb-6 font-black leading-tight">
                  Cultural Tours
                </CardTitle>
                <CardDescription className="text-xl text-slate-300 leading-relaxed font-light">
                  Explore Stone Town's winding alleys, visit spice plantations, and discover hidden gems with local guides
                </CardDescription>
              </CardHeader>
              <CardContent className="p-12 pt-0 relative z-10">
                <Button asChild className="group/btn bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-2xl px-10 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl border border-sky-400/20">
                  <Link href="/tours">
                    <span className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-3 h-6 w-6 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enhanced Language Learning Card */}
            <Card className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              <CardHeader className="p-12 relative z-10">
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-4xl md:text-5xl text-white mb-6 font-black leading-tight">
                  Swahili Learning
                </CardTitle>
                <CardDescription className="text-xl text-slate-300 leading-relaxed font-light">
                  Master Swahili through immersive lessons with native speakers and real-world practice
                </CardDescription>
              </CardHeader>
              <CardContent className="p-12 pt-0 relative z-10">
                <Button asChild className="group/btn bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl px-10 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl border border-emerald-400/20">
                  <Link href="/language-learning">
                    <span className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-3 h-6 w-6 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Popular Destinations */}
      <section className="py-32 bg-gradient-to-br from-white via-slate-50 to-sky-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-64 h-64 bg-gradient-to-br from-orange-200/40 to-red-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-sky-100 via-white to-emerald-100 rounded-full px-10 py-5 mb-10 shadow-xl border border-sky-200/50">
              <Camera className="w-7 h-7 text-sky-600 mr-4" />
              <span className="text-slate-700 font-bold text-lg">Featured Destinations</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-800 mb-8 leading-tight">
              Popular Destinations
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-light">
              Explore the most captivating locations that make Zanzibar unforgettable
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {destinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 transform group-hover:scale-105 group-hover:-translate-y-2">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`bg-gradient-to-r ${destination.gradient} text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20`}>
                      {destination.highlight}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">{destination.name}</h3>
                    <p className="text-sky-200 text-lg font-light leading-relaxed">{destination.description}</p>
                    
                    {/* Hover Arrow */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="inline-flex items-center text-white font-semibold">
                        <span>Explore</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-16 py-8 text-2xl rounded-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl border border-orange-400/20">
              <Link href="/gallery">
                <span className="flex items-center">
                  View Gallery
                  <ArrowRight className="ml-4 h-7 w-7" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-sky-900 via-slate-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-sky-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-emerald-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-orange-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-white via-sky-200 to-emerald-200 bg-clip-text text-transparent">
                Happy Travelers
              </span>
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-light">
              Hear from those who've experienced the magic of Zanzibar with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Sarah Johnson",
                country: "United Kingdom",
                text: "Learning Swahili in Zanzibar was incredible! The cultural immersion made all the difference.",
                rating: 5,
                gradient: "from-sky-500 to-blue-600"
              },
              {
                name: "Marco Silva",
                country: "Brazil", 
                text: "The Stone Town tour was fascinating. Our guide was knowledgeable and passionate about the history.",
                rating: 5,
                gradient: "from-emerald-500 to-green-600"
              },
              {
                name: "Emma Chen",
                country: "Australia",
                text: "Perfect blend of tourism and learning. The spice tour and language lessons exceeded my expectations!",
                rating: 5,
                gradient: "from-orange-500 to-red-600"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl">
                <CardContent className="p-10">
                  {/* Rating Stars */}
                  <div className="flex mb-8 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-7 w-7 text-orange-400 fill-current mx-1" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-slate-200 mb-10 italic leading-relaxed text-xl font-light text-center">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Avatar & Info */}
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl`}>
                      <span className="text-white font-bold text-xl">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="font-bold text-white text-xl">{testimonial.name}</p>
                    <p className="text-sky-300 text-lg font-medium">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-br from-orange-600 via-orange-500 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-emerald-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <Sparkles className="w-6 h-6 text-white mr-3 animate-spin" style={{animationDuration: '3s'}} />
              <span className="text-white/90 font-semibold text-lg">Ready for Adventure?</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Start Your Journey Today
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Join thousands of travelers who have discovered the magic of Zanzibar through authentic cultural experiences
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <Button asChild size="lg" className="group bg-white/20 backdrop-blur-xl hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 px-16 py-8 text-2xl rounded-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <Link href="/contact">
                <span className="flex items-center">
                  <Users className="mr-4 h-8 w-8 group-hover:rotate-12 transition-transform" />
                  Contact Us
                  <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            
            <Button asChild size="lg" className="group bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 text-white px-16 py-8 text-2xl rounded-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl border border-sky-400/20">
              <Link href="/tours">
                <span className="flex items-center">
                  <MapPin className="mr-4 h-8 w-8 group-hover:bounce transition-transform" />
                  Book Now
                  <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-90">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <Star className="w-6 h-6 text-yellow-300 fill-current mr-2" />
              <span className="text-white font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <Award className="w-6 h-6 text-orange-300 mr-2" />
              <span className="text-white font-semibold">Award Winning</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <Heart className="w-6 h-6 text-pink-300 mr-2" />
              <span className="text-white font-semibold">500+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}