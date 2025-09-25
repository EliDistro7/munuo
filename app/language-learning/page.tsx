'use client';

import { BookOpen, Users, Clock, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LanguageLearningPage() {
  const { t } = useLanguage();

  const courses = [
    {
      title: t('language.beginner.title'),
      description: t('language.beginner.desc'),
      level: 'Beginner',
      duration: '4 weeks',
      price: '$180',
      lessons: '16 lessons',
      features: ['Basic conversations', 'Essential vocabulary', 'Cultural basics', 'Pronunciation guide']
    },
    {
      title: t('language.intermediate.title'),
      description: t('language.intermediate.desc'),
      level: 'Intermediate',
      duration: '6 weeks',
      price: '$240',
      lessons: '24 lessons',
      features: ['Complex grammar', 'Advanced vocabulary', 'Cultural immersion', 'Real-life scenarios']
    },
    {
      title: t('language.advanced.title'),
      description: t('language.advanced.desc'),
      level: 'Advanced',
      duration: '8 weeks',
      price: '$320',
      lessons: '32 lessons',
      features: ['Fluent conversation', 'Literature study', 'Business Swahili', 'Certification prep']
    }
  ];

  const learningFormats = [
    {
      title: t('language.private.title'),
      description: t('language.private.desc'),
      icon: <Users className="h-8 w-8" />,
      features: ['1-on-1 instruction', 'Flexible scheduling', 'Customized curriculum', 'Rapid progress']
    },
    {
      title: t('language.group.title'),
      description: t('language.group.desc'),
      icon: <Globe className="h-8 w-8" />,
      features: ['Interactive learning', 'Peer practice', 'Affordable pricing', 'Cultural exchange']
    },
    {
      title: t('language.online.title'),
      description: t('language.online.desc'),
      icon: <BookOpen className="h-8 w-8" />,
      features: ['Learn from anywhere', 'Recorded sessions', 'Digital materials', 'Flexible timing']
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-emerald-900 via-emerald-700 to-sky-600 flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('language.title')}
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
              {t('language.subtitle')}
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              <Link href="/contact">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Level
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complete beginner to advanced speaker, we have the right course for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader className="p-8 text-center">
                  <Badge className="bg-emerald-500 text-white text-sm w-fit mx-auto mb-4">
                    {course.level}
                  </Badge>
                  <CardTitle className="text-2xl text-gray-900 mb-4">
                    {course.title}
                  </CardTitle>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    {course.price}
                  </div>
                  <div className="text-gray-600">
                    {course.duration} • {course.lessons}
                  </div>
                </CardHeader>
                
                <CardContent className="p-8 pt-0">
                  <CardDescription className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </CardDescription>
                  
                  <div className="space-y-3 mb-8">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Link href="/contact">
                      Enroll Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learning Formats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the learning format that fits your lifestyle and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningFormats.map((format, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-8 text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                    <div className="text-emerald-600">
                      {format.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-4">
                    {format.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    {format.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8 pt-0">
                  <div className="space-y-3">
                    {format.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Swahili */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Learn Swahili in Zanzibar?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Cultural Immersion',
                    description: 'Learn the language where it\'s lived and breathed every day.'
                  },
                  {
                    title: 'Native Speakers',
                    description: 'Our instructors are native Swahili speakers with teaching experience.'
                  },
                  {
                    title: 'Practical Application',
                    description: 'Use your new skills immediately in real-world situations.'
                  },
                  {
                    title: 'Rich Heritage',
                    description: 'Discover the language\'s roots in East African culture and history.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="bg-emerald-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Learning Swahili"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-white p-6 rounded-xl shadow-xl">
                <p className="text-2xl font-bold">100+</p>
                <p className="text-emerald-100">Happy Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Swahili Phrases */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start With Basic Phrases
            </h2>
            <p className="text-xl text-gray-600">
              Get a taste of the beautiful Swahili language
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { swahili: 'Hujambo', english: 'Hello', pronunciation: 'hoo-JAM-bo' },
              { swahili: 'Asante sana', english: 'Thank you very much', pronunciation: 'ah-SAN-te SAH-na' },
              { swahili: 'Karibu', english: 'Welcome', pronunciation: 'ka-REE-boo' },
              { swahili: 'Kwaheri', english: 'Goodbye', pronunciation: 'kwa-HE-ri' },
              { swahili: 'Pole pole', english: 'Slowly/take it easy', pronunciation: 'PO-le PO-le' },
              { swahili: 'Hakuna matata', english: 'No problem', pronunciation: 'ha-KOO-na ma-TA-ta' },
              { swahili: 'Nzuri sana', english: 'Very good', pronunciation: 'n-ZOO-ri SAH-na' },
              { swahili: 'Tutaonana', english: 'See you later', pronunciation: 'too-ta-o-NAH-na' }
            ].map((phrase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">
                    {phrase.swahili}
                  </div>
                  <div className="text-gray-900 font-medium mb-1">
                    {phrase.english}
                  </div>
                  <div className="text-sm text-gray-500 italic">
                    ({phrase.pronunciation})
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Swahili Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Join our language learning community and discover the beauty of Swahili
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg">
              <Link href="/contact">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg">
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