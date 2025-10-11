import { PhoneIcon } from 'lucide-react';
const FloatingCallButton = () => {
  return <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 animate-pulse" onClick={() => window.location.href = 'tel:+1234567890'} aria-label="Call Now">
        <PhoneIcon className="h-6 w-6" />
        <span className="absolute -top-10 right-0 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Call Now
      </span>
      </button>
      
    </div>;
};
export default FloatingCallButton;