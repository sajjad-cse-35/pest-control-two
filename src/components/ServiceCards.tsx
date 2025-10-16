import React from 'react';
import { CheckCircle, Bug, Rat, Coffee } from 'lucide-react';
import serviceImageOne from '../asset/insectcontrol.jpg';
import serviceImageTwo from '../asset/rodentandwildlifemanagement.jpg';
import serviceImageThree from '../asset/termitesolutions.jpg';
import serviceImageFour from '../asset/specializedpestservices.jpg';
export function ServiceCards() {
  return <section id="services" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-10 md:mb-12">
          View Other Pest Control Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Insect Control */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src={serviceImageOne} alt="Insect control" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Insect Control
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">All insects covered</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Cockroach removal & prevention
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bed bug elimination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Flea and tick management
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Mice & Rat Control */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src={serviceImageTwo} alt="Rodent control" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Mice & Rat Control
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Mice control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Rat control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Trap deployment & removal
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Preventative measures</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Termite Solutions */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src={serviceImageThree} alt="Termite control" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Termite Solutions
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Termite inspection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Termite treatment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Preventative measures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Structural damage repair
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Specialized Pest Services */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src={serviceImageFour} alt="Specialized pest services" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Specialized Pest Services
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Mosquito and tick control
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Bees, wasps, and hornet removal
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Wildlife control & exclusion
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Spider control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
