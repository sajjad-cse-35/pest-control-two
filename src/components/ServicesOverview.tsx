import React from 'react';
import { CheckCircle, Clock, Shield, Zap, Bug, Home, PhoneCall } from 'lucide-react';
import overViewImageOne from '../asset/emergencyservices.jpg';
import overViewImagTwo from '../asset/specializedtreatments.jpg';

export function ServicesOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield size={16} />
            Trusted Pest Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Pest Control Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reliable solutions for all your pest control needs. From emergency response to specialized treatments, 
            we provide effective and lasting results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          
          {/* Emergency Services Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={overViewImageOne} 
                alt="Emergency pest control services" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-50 p-2 rounded-lg">
                  <Clock className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Emergency Response</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Zap size={14} className="text-red-500" />
                    <span className="text-sm text-red-600 font-medium">24/7 Available</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {[
                  "Immediate response for pest outbreaks",
                  "Urgent pest removal & containment",
                  "Same-day critical infestation services",
                  "After-hours emergency assistance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specialized Treatments Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={overViewImagTwo} 
                alt="Specialized pest treatments" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-50 p-2 rounded-lg">
                  <Bug className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Specialized Treatments</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Home size={14} className="text-green-600" />
                    <span className="text-sm text-green-600 font-medium">Targeted Solutions</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {[
                  "Advanced bed bug heat treatments",
                  "Comprehensive termite extermination",
                  "Targeted ant colony elimination",
                  "Professional cockroach eradication"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Reclaim Your Space?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Connect with certified pest control experts in your area for a free, no-obligation assessment and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="tel:+15551234567" aria-label="Call 555-123-4567" className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-xl font-medium flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <PhoneCall size={18} className="mr-2" />
              Call 555-123-4567
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}