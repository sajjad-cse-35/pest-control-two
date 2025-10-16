import React from 'react';
import { PhoneCall, CheckCircle } from 'lucide-react';
import aboutImageOne from '../asset/about.jpg';
export function AboutUs() {
  return <section id="about" className="py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              About Us
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              CallExterminators was founded to assist homeowners across the US
              in finding reliable, local pest control & exterminator services
              that provide a high level of expertise, professional service, and
              a 100% satisfaction guarantee to handle your needs anytime.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Over the years, we've connected thousands of homeowners with
              expert pest control professionals, and we're confident we can
              assist you too. Our commitment to you includes:
            </p>
            <div className="space-y-5">
              <div className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle size={24} className="text-green-600 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-blue-800 mb-1">
                    No Cost, No Risk:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our service never costs a penny to use. We don't require any
                    payment information, and we never charge for connecting you
                    to local professionals.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle size={24} className="text-green-600 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-blue-800 mb-1">
                    No Obligations:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    As a consumer advocate, we want to help you find the right
                    service provider for your specific needs. You're never
                    obligated to proceed with any service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-blue-900 rounded-xl overflow-hidden shadow-xl">
            <div className="p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Find Top Exterminators In Cleveland
              </h3>
              <p className="mb-6 opacity-90">
                Fast Elimination & Prevention Services. Call Us Today For Your
                Risk-Free Quote
              </p>
              <a href="tel:8663587221" className="flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 from-green-600 to-green-700 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-lg transition-colors duration-300 shadow-md">
                <PhoneCall size={24} className="mr-3" />
                (866) 358-7221
                <span className="text-xs ml-3 opacity-90 font-medium">
                  AVAILABLE 24/7
                </span>
              </a>
            </div>
            <img src={aboutImageOne} alt="Pest control professional" className="w-full h-64 md:h-72 object-cover" />
          </div>
        </div>
      </div>
    </section>;
}
