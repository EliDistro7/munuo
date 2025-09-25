'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.tours': 'Tours',
    'nav.language': 'Swahili Learning',
    'nav.about': 'About Zanzibar',
    'nav.gallery': 'Gallery',
    'nav.blog': 'Travel Tips',
    'nav.contact': 'Contact',
    
    // Homepage
    'hero.title': 'Discover the Magic of Zanzibar',
    'hero.subtitle': 'Authentic tours, cultural experiences, and Swahili language learning with local experts',
    'hero.cta1': 'Book Your Tour',
    'hero.cta2': 'Learn Swahili',
    'home.welcome.title': 'Welcome to Munuo Travels',
    'home.welcome.text': 'Experience the enchanting beauty of Zanzibar through our authentic tours and immerse yourself in the rich Swahili culture while learning the language from native speakers.',
    'home.services.title': 'Our Services',
    'home.tours.title': 'Zanzibar Tours',
    'home.tours.desc': 'Explore Stone Town, spice farms, pristine beaches, and historical sites with expert local guides.',
    'home.language.title': 'Swahili Language Learning',
    'home.language.desc': 'Learn Swahili from native speakers with cultural immersion programs for all levels.',
    'home.destinations.title': 'Popular Destinations',
    
    // Tours
    'tours.title': 'Zanzibar Tour Packages',
    'tours.subtitle': 'Discover the wonders of Zanzibar with our carefully crafted tour experiences',
    'tours.stonetown.title': 'Stone Town Cultural Tours',
    'tours.stonetown.desc': 'Explore the UNESCO World Heritage site with its rich history, architecture, and vibrant markets.',
    'tours.spice.title': 'Spice Farm Tours',
    'tours.spice.desc': 'Discover why Zanzibar is called the Spice Island with guided tours through aromatic plantations.',
    'tours.beach.title': 'Beach & Water Sports',
    'tours.beach.desc': 'Enjoy pristine beaches, snorkeling, diving, and water sports at Nungwi, Kendwa, and Paje.',
    'tours.dhow.title': 'Sunset Dhow Cruises',
    'tours.dhow.desc': 'Sail on traditional dhows while watching breathtaking Zanzibar sunsets.',
    'tours.safari.title': 'Safari Blue Trips',
    'tours.safari.desc': 'Full-day adventure exploring sandbanks, snorkeling, and enjoying fresh seafood.',
    'tours.prison.title': 'Prison Island Tours',
    'tours.prison.desc': 'Visit the giant tortoises and learn about the island\'s fascinating history.',
    
    // Language Learning
    'language.title': 'Learn Swahili in Zanzibar',
    'language.subtitle': 'Immerse yourself in the beautiful Swahili language and East African culture',
    'language.beginner.title': 'Beginner Courses',
    'language.beginner.desc': 'Start your Swahili journey with basic conversations and cultural insights.',
    'language.intermediate.title': 'Intermediate Level',
    'language.intermediate.desc': 'Enhance your skills with complex grammar and cultural immersion.',
    'language.advanced.title': 'Advanced Programs',
    'language.advanced.desc': 'Master fluent Swahili through intensive practice and cultural engagement.',
    'language.private.title': 'Private Classes',
    'language.private.desc': 'One-on-one personalized instruction tailored to your learning pace.',
    'language.group.title': 'Group Classes',
    'language.group.desc': 'Learn with fellow students in interactive and engaging group sessions.',
    'language.online.title': 'Online Learning',
    'language.online.desc': 'Convenient online classes for learning Swahili from anywhere in the world.',
    
    // About
    'about.title': 'About Beautiful Zanzibar',
    'about.subtitle': 'The Spice Island - Where Culture, History, and Natural Beauty Converge',
    'about.history.title': 'Rich History & Culture',
    'about.history.desc': 'Zanzibar boasts a fascinating blend of African, Arab, Persian, and Indian cultures, reflected in its architecture, cuisine, and traditions.',
    'about.best.title': 'Best Time to Visit',
    'about.best.desc': 'Zanzibar enjoys a tropical climate year-round. The best time to visit is during the dry seasons: June-October and December-February.',
    'about.cuisine.title': 'Delicious Local Cuisine',
    'about.cuisine.desc': 'Experience the flavors of Zanzibar with aromatic spices, fresh seafood, tropical fruits, and traditional Swahili dishes.',
    
    // Contact
    'contact.title': 'Contact Munuo Travels',
    'contact.subtitle': 'Ready to explore Zanzibar or learn Swahili? Get in touch with us!',
    'contact.info': 'Contact Information',
    'contact.phone': 'Phone/WhatsApp',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.zanzibar': 'Zanzibar, Tanzania',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.service': 'Service Interest',
    'contact.form.service.tours': 'Tourism & Tours',
    'contact.form.service.language': 'Swahili Language Learning',
    'contact.form.service.both': 'Both Services',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    
    // Common
    'common.book': 'Book Now',
    'common.learn': 'Learn More',
    'common.contact': 'Contact Us',
    'common.phone': '+255 755 688 091',
    'common.email': 'info@munuo-travels.com',
    'footer.rights': '© 2024 Munuo Travels. All rights reserved.',
    'footer.tagline': 'Discover Zanzibar • Learn Swahili • Create Memories',
  },
  sw: {
    // Navigation
    'nav.home': 'Nyumbani',
    'nav.tours': 'Ziara',
    'nav.language': 'Kujifunza Kiswahili',
    'nav.about': 'Kuhusu Zanzibar',
    'nav.gallery': 'Picha',
    'nav.blog': 'Vidokezo vya Usafiri',
    'nav.contact': 'Mawasiliano',
    
    // Homepage
    'hero.title': 'Gundua Uchawi wa Zanzibar',
    'hero.subtitle': 'Ziara za kiasili, uzoefu wa kitamaduni, na kujifunza Kiswahili pamoja na wataaalamu wa ndani',
    'hero.cta1': 'Agiza Ziara Yako',
    'hero.cta2': 'Jifunze Kiswahili',
    'home.welcome.title': 'Karibu Munuo Travels',
    'home.welcome.text': 'Furahia uzuri wa kipekee wa Zanzibar kupitia ziara zetu za kiasili na uzoefu wa utamaduni wa Kiswahili huku ukijifunza lugha kutoka kwa wasemaji wazawa.',
    'home.services.title': 'Huduma Zetu',
    'home.tours.title': 'Ziara za Zanzibar',
    'home.tours.desc': 'Gundua Mji wa Mawe, mashamba ya bizari, fukwe safi, na maeneo ya kihistoria pamoja na waongozaji wazuri wa mitaa.',
    'home.language.title': 'Kujifunza Kiswahili',
    'home.language.desc': 'Jifunze Kiswahili kutoka kwa wasemaji wazawa pamoja na mipango ya uzoefu wa kitamaduni kwa ngazi zote.',
    'home.destinations.title': 'Maeneo Maarufu',
    
    // Tours
    'tours.title': 'Vifurushi vya Ziara za Zanzibar',
    'tours.subtitle': 'Gundua maajabu ya Zanzibar kupitia uzoefu wetu wa ziara ulioundwa kwa uongozi',
    'tours.stonetown.title': 'Ziara za Kitamaduni za Mji wa Mawe',
    'tours.stonetown.desc': 'Gundua tovuti ya UNESCO ya Urithi wa Dunia yenye historia tajiri, ujenzi, na masoko yenye mvuto.',
    'tours.spice.title': 'Ziara za Mashamba ya Bizari',
    'tours.spice.desc': 'Gundua kwa nini Zanzibar inaitwa Kisiwa cha Bizari kupitia ziara za uongozaji katika mashamba yenye harufu nzuri.',
    'tours.beach.title': 'Fukwe na Michezo ya Majini',
    'tours.beach.desc': 'Furahia fukwe safi, kuogelea kwa samaki, kuzamisha, na michezo ya majini katika Nungwi, Kendwa, na Paje.',
    'tours.dhow.title': 'Ziara za Dhow za Machweo ya Jua',
    'tours.dhow.desc': 'Safiri kwa dhow za kienyeji huku ukiangalia machweo ya jua ya kupendeza ya Zanzibar.',
    'tours.safari.title': 'Ziara za Safari Blue',
    'tours.safari.desc': 'Msururu wa siku nzima wa kugundua vituko vya mchanga, kuogelea kwa samaki, na kufurahia chakula cha baharini kipya.',
    'tours.prison.title': 'Ziara za Kisiwa cha Jela',
    'tours.prison.desc': 'Tembelea kobe wakubwa na ujifunze historia ya kipekee ya kisiwa.',
    
    // Language Learning
    'language.title': 'Jifunze Kiswahili Zanzibar',
    'language.subtitle': 'Jizamie katika lugha nzuri ya Kiswahili na utamaduni wa Afrika Mashariki',
    'language.beginner.title': 'Kozi za Kuanza',
    'language.beginner.desc': 'Anza safari yako ya Kiswahili kwa mazungumzo ya msingi na maarifa ya kitamaduni.',
    'language.intermediate.title': 'Kiwango cha Kati',
    'language.intermediate.desc': 'Boresha ujuzi wako kwa sarufi ngumu na uzoefu wa kitamaduni.',
    'language.advanced.title': 'Programu za Juu',
    'language.advanced.desc': 'Shinda Kiswahili kilivumbulio kupitia mazoezi makali na ushirikiano wa kitamaduni.',
    'language.private.title': 'Masomo ya Kibinafsi',
    'language.private.desc': 'Mafunzo ya kibinafsi yaliyoundwa kwa kiwango chako cha kujifunza.',
    'language.group.title': 'Masomo ya Kikundi',
    'language.group.desc': 'Jifunze pamoja na wanafunzi wenzako katika vikao vya kuvutia na vya ushirikiano.',
    'language.online.title': 'Kujifunza Mtandaoni',
    'language.online.desc': 'Masomo ya kiroho ya mtandaoni ya kujifunza Kiswahili kutoka popote ulimwenguni.',
    
    // About
    'about.title': 'Kuhusu Zanzibar Nzuri',
    'about.subtitle': 'Kisiwa cha Bizari - Mahali Utamaduni, Historia, na Uzuri wa Asili Vinapokutana',
    'about.history.title': 'Historia Tajiri na Utamaduni',
    'about.history.desc': 'Zanzibar ina mchanganyiko wa kuvutia wa tamaduni za Kiafrika, Kiarabu, Kiajemi, na Kihindi, zinazoonekana katika ujenzi, vyakula, na desturi.',
    'about.best.title': 'Wakati Bora wa Kutembelea',
    'about.best.desc': 'Zanzibar ina hali ya hewa ya kitropiki mwaka mzima. Wakati bora wa kutembelea ni wakati wa kiangazi: Juni-Oktoba na Desemba-Februari.',
    'about.cuisine.title': 'Vyakula Vyema vya Ndani',
    'about.cuisine.desc': 'Furahia ladha za Zanzibar kwa bizari za harufu nzuri, samaki wa baharini mpya, matunda ya kitropiki, na vyakula vya Kiswahili vya jadi.',
    
    // Contact
    'contact.title': 'Wasiliana na Munuo Travels',
    'contact.subtitle': 'Uko tayari kugundua Zanzibar au kujifunza Kiswahili? Wasiliana nasi!',
    'contact.info': 'Maelezo ya Mawasiliano',
    'contact.phone': 'Simu/WhatsApp',
    'contact.email': 'Barua pepe',
    'contact.location': 'Mahali',
    'contact.zanzibar': 'Zanzibar, Tanzania',
    'contact.form.title': 'Tutumie ujumbe',
    'contact.form.name': 'Jina Lako',
    'contact.form.email': 'Barua Pepe Yako',
    'contact.form.service': 'Nia ya Huduma',
    'contact.form.service.tours': 'Utalii na Ziara',
    'contact.form.service.language': 'Kujifunza Kiswahili',
    'contact.form.service.both': 'Huduma Zote Mbili',
    'contact.form.message': 'Ujumbe Wako',
    'contact.form.submit': 'Tuma Ujumbe',
    
    // Common
    'common.book': 'Agiza Sasa',
    'common.learn': 'Jifunze Zaidi',
    'common.contact': 'Wasiliana Nasi',
    'common.phone': '+255 755 688 091',
    'common.email': 'info@munuo-travels.com',
    'footer.rights': '© 2024 Munuo Travels. Haki zote zimehifadhiwa.',
    'footer.tagline': 'Gundua Zanzibar • Jifunze Kiswahili • Unda Kumbukumbu',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};