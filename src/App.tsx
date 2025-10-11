import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { ServiceCards } from './components/ServiceCards';
import { CTASection } from './components/CTASection';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import FloatingCallButton from './FloatingCallButton';
export function App() {
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesOverview />
        <ServiceCards />
        <AboutUs />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>;
}