'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    { name: "Laptop Repair", href: "/services/LaptopRepair", icon: "💻" },
    { name: "Computer Repair", href: "/services/ComputerRepair", icon: "🖥️" },
    { name: "Data Recovery", href: "/services/DataRecovery", icon: "💾" },
    { name: "Software Installation", href: "/services/SoftwareInstallation", icon: "📀" },
    { name: "Hardware Upgrades", href: "/services/HardwareUpgrades", icon: "🔧" }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-900/80 backdrop-blur-lg shadow-lg' : 'bg-blue-900/60 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and company name */}
            <Link href="/" className="flex items-center group">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg border-2 border-blue-400/50 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="ml-3">
                  {/* <span className="text-2xl font-bold text-white">Digital India</span> */}
                  <span className="block text-xs text-blue-300 font-medium">Tech Solutions</span>
                </div>
              </div>
            </Link>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
                Home
              </Link>
              
              <Link href="/about" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
                About
              </Link>
              
              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center"
                >
                  Services
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="absolute z-10 left-0 mt-2 w-64 rounded-xl shadow-2xl bg-blue-800/95 backdrop-blur-md border border-blue-600/30">
                    <div className="p-2" role="menu" aria-orientation="vertical">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-center px-4 py-3 text-sm text-blue-100 hover:bg-blue-700/50 hover:text-white transition-all rounded-lg group"
                          role="menuitem"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className="text-lg mr-3 group-hover:scale-110 transition-transform">{service.icon}</span>
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/products" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
                Products
              </Link>

              <Link href="/blog" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
                Second Hand Laptops
              </Link>
            </div>

            {/* Right side - Contact */}
            <div className="hidden lg:flex items-center space-x-4">
            
              
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 flex items-center">
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-3 rounded-xl text-blue-100 hover:text-white hover:bg-blue-800/50 focus:outline-none transition-all"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-800/95 backdrop-blur-lg border-t border-blue-600/30">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {/* Quick contact info */}
              {/* <div className="bg-blue-700/50 rounded-xl p-4 mb-4">
                <div className="flex items-center text-blue-300 mb-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse mr-2"></div>
                  <span className="text-sm">Expert Technicians</span>
                </div>
                <div className="text-white text-sm flex items-center">
                  <span className="mr-2">📞</span>
                  <span>+91 98765 43210</span>
                </div>
              </div> */}

              <Link
                href="/"
                className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">🏠</span>
                Home
              </Link>
              
              <Link
                href="/about"
                className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">👥</span>
                About
              </Link>
              
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
                >
                  <div className="flex items-center">
                    <span className="mr-3">🛠️</span>
                    Services
                  </div>
                  <svg 
                    className={`h-5 w-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="pl-10 mt-2 space-y-2 bg-blue-700/30 py-3 rounded-xl">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center px-4 py-2 text-sm text-blue-100 hover:text-white transition-colors rounded-lg"
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        <span className="text-lg mr-3">{service.icon}</span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/products"
                className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">🛒</span>
                Products
              </Link>

              <Link
                href="/blog"
                className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">📰</span>
                Second Hand Laptops
              </Link>

              <div className="pt-4 border-t border-blue-700 mt-4">
                <Link
                  href="/contact"
                  className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all mb-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;