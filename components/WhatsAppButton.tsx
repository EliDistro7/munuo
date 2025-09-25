'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppButton() {
  const whatsappNumber = '+255755688091';
  const message = 'Hello! I would like to inquire about your services.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-pulse"
      size="lg"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  );
}