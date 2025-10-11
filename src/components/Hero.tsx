import React from 'react';
import { PhoneCall, CheckCircle } from 'lucide-react';
import heroImage from '../asset/hero-bg.jpg';
export function Hero() {
  return <section className="relative bg-cover bg-center py-16 md:py-24" style={{
    backgroundImage: ' url("' + heroImage + '")',
  }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 md:p-8 max-w-lg">
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 uppercase text-xs font-semibold tracking-wide">
              Search Location
            </span>
            <span>Your pest control company</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 leading-tight">
            Pest Control in Cleveland
          </h1>
          <p className="text-blue-800 font-semibold mb-5">
            Eliminate Ants, Bees, Rodents, and Other Pests Today!
            <br />
            Fast & Reliable Service. Call Now
          </p>
          <a href="tel:8663587221" className="flex items-center justify-center bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-lg mb-6 transition-colors duration-300 w-full md:w-auto shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
            <PhoneCall size={20} className="mr-2" />
            (866) 358-7221
            <span className="text-xs ml-2 opacity-90 font-medium">
              AVAILABLE 24/7
            </span>
          </a>
          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                Emergency? Quick pest control services available.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                Serving most cities with local technicians for a quick response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}