'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-sky-900 via-sky-700 to-emerald-600 flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1083902/pexels-photo-1083902.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg h-fit">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl text-gray-900 mb-6">
                    {t('contact.info')}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-8 pt-0 space-y-8">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-sky-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {t('contact.phone')}
                      </h4>
                      <p className="text-gray-600">{t('common.phone')}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {t('contact.email')}
                      </h4>
                      <p className="text-gray-600">{t('common.email')}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {t('contact.location')}
                      </h4>
                      <p className="text-gray-600">{t('contact.zanzibar')}</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">Mon - Sat: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sun: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="pt-6">
                    <Button
                      asChild
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      size="lg"
                    >
                      <a href="https://wa.me/255755688091">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl text-gray-900">
                    {t('contact.form.title')}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-8 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name" className="text-base font-medium text-gray-700">
                        {t('contact.form.name')}
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="mt-2 h-12"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-base font-medium text-gray-700">
                        {t('contact.form.email')}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="mt-2 h-12"
                        required
                      />
                    </div>

                    {/* Service Interest */}
                    <div>
                      <Label htmlFor="service" className="text-base font-medium text-gray-700">
                        {t('contact.form.service')}
                      </Label>
                      <Select onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger className="mt-2 h-12">
                          <SelectValue placeholder="Select service..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tours">{t('contact.form.service.tours')}</SelectItem>
                          <SelectItem value="language">{t('contact.form.service.language')}</SelectItem>
                          <SelectItem value="both">{t('contact.form.service.both')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-base font-medium text-gray-700">
                        {t('contact.form.message')}
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell us about your travel plans or learning goals..."
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="w-full bg-sky-600 hover:bg-sky-700 text-white h-12 text-lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {t('contact.form.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visit Us in Zanzibar
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Stone Town, Zanzibar
            </p>
          </div>
          
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Interactive Map</p>
                <p className="text-gray-500">Stone Town, Zanzibar, Tanzania</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  );
}