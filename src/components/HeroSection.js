'use client';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMzODc0YjAiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMTIuNSAxMi41aDM1djM1aC0zNXoiLz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Expert <span className="text-blue-300">Computer Repair</span> & IT Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-lg">
            Fast, reliable, and affordable tech services to keep your devices running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/services" 
              className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 text-center"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-10 flex items-center space-x-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-blue-200">Quick Response</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-blue-200">Certified Experts</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
            
            <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-blue-500/30 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl overflow-hidden">
                <div className="p-5 bg-blue-800 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-white font-bold text-lg">Device Diagnostics</div>
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Health Score</span>
                      <div className="w-24 h-2 bg-blue-800 rounded-full">
                        <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-white font-medium">85%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Performance</span>
                      <div className="w-24 h-2 bg-blue-800 rounded-full">
                        <div className="w-16 h-2 bg-yellow-500 rounded-full"></div>
                      </div>
                      <span className="text-white font-medium">65%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Storage</span>
                      <div className="w-24 h-2 bg-blue-800 rounded-full">
                        <div className="w-14 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-white font-medium">45%</span>
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg transition-colors">
                    Optimize Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;