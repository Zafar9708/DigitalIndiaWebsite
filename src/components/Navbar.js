

'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const countryRef = useRef(null);

  const services = [
    { name: "Bookkeeping", href: "/services/bookkeeping", icon: "📊" },
    { name: "Tax Preparation", href: "/services/tax-preparation", icon: "📝" },
    { name: "Financial Consulting", href: "/services/financial-consulting", icon: "💼" },
    { name: "Payroll Services", href: "/services/payroll", icon: "💰" },
    { name: "Audit Support", href: "/services/audit-support", icon: "🔍" },
    { name: "CFO Services", href: "/services/cfo-services", icon: "👔" },
    { name: "Business Advisory", href: "/services/business-advisory", icon: "🎯" }
  ];

  const countries = [
    { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺', dialCode: '+61' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
    { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
    { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵', dialCode: '+81' },
    { code: 'SG', name: 'Singapore', flag: '🇸🇬', dialCode: '+65' },
    { code: 'AE', name: 'UAE', flag: '🇦🇪', dialCode: '+971' }
  ];

  const selectedCountryData = countries.find(country => country.code === selectedCountry);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryOpen(false);
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
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap">
          <span className="animate-pulse mr-2">🎯</span>
          <span>Get <strong>20% off</strong> on your first accounting service! </span>
          <Link href="/offer" className="ml-2 font-semibold underline hover:no-underline">
            Claim Offer →
          </Link>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo and company name */}
            <Link href="/" className="flex items-center group">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl border-2 border-cyan-300 group-hover:scale-110 transition-transform duration-300">
                  A
                </div>
                <div className="ml-3">
                  <span className="text-2xl font-bold text-white">Atlabb</span>
                  <span className="block text-sm text-cyan-400 font-medium">Accounting Solutions</span>
                </div>
              </div>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="text-white hover:bg-white/10 transition-all px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                <span className="mr-1">🏠</span>
                Home
              </Link>
              
              <Link href="/about" className="text-white hover:bg-white/10 transition-all px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                <span className="mr-1">👥</span>
                About Us
              </Link>
              
              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-white hover:bg-white/10 transition-all px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <span className="mr-1">🎯</span>
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
                  <div className="absolute z-10 left-0 mt-2 w-64 rounded-xl shadow-2xl bg-gray-800 border border-cyan-500/30 backdrop-blur-md">
                    <div className="p-2 " role="menu" aria-orientation="vertical">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-center px-4 py-3 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-all rounded-lg group"
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

              <Link href="/pricing" className="text-white hover:bg-white/10 transition-all px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                <span className="mr-1">💲</span>
                Pricing
              </Link>

              <Link href="/resources" className="text-white hover:bg-white/10 transition-all px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                <span className="mr-1">📚</span>
                Resources
              </Link>
            </div>

            {/* Right side - Contact and Country Selector */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center text-cyan-400 mr-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm">24/7 Support Available</span>
              </div>
              
              {/* Country Selector */}
              <div className="relative mr-4" ref={countryRef}>
                <button 
                  onClick={() => setIsCountryOpen(!isCountryOpen)}
                  className="flex items-center text-white hover:bg-white/10 transition-all px-3 py-2 rounded-lg text-sm font-medium"
                >
                  <span className="text-lg mr-2">{selectedCountryData?.flag}</span>
                  <span>{selectedCountryData?.dialCode}</span>
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isCountryOpen && (
                  <div className="absolute z-10 right-0 mt-2 w-56 rounded-xl shadow-2xl bg-gray-800 border border-cyan-500/30 backdrop-blur-md">
                    <div className="p-2" role="menu" aria-orientation="vertical">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => {
                            setSelectedCountry(country.code);
                            setIsCountryOpen(false);
                          }}
                          className={`flex items-center w-full px-3 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-all rounded-lg ${
                            selectedCountry === country.code ? 'bg-cyan-500/20 text-cyan-300' : ''
                          }`}
                          role="menuitem"
                        >
                          <span className="text-lg mr-3">{country.flag}</span>
                          <span className="flex-1 text-left">{country.name}</span>
                          <span className="text-cyan-400">{country.dialCode}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-cyan-500/25 flex items-center">
                <span className="mr-2">📞</span>
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-3 rounded-xl text-white hover:bg-white/10 focus:outline-none transition-all"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <span className="text-2xl">✕</span>
                ) : (
                  <span className="text-2xl">☰</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full inset-x-0 z-50 bg-gray-800 shadow-2xl border-t border-cyan-500/20">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {/* Quick contact info */}
              <div className="bg-gray-700/50 rounded-xl p-4 mb-4">
                <div className="flex items-center text-cyan-400 mb-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></div>
                  <span className="text-sm">24/7 Support Available</span>
                </div>
                <div className="text-white text-sm">Call: {selectedCountryData?.dialCode} (555) 123-4567</div>
                <div className="text-gray-400 text-sm">Email: info@atlabb.com</div>
                
                {/* Country selector in mobile */}
                <div className="mt-3 pt-3 border-t border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Country:</span>
                    <button 
                      onClick={() => setIsCountryOpen(!isCountryOpen)}
                      className="flex items-center text-cyan-400 text-sm"
                    >
                      <span className="mr-2">{selectedCountryData?.flag} {selectedCountryData?.name}</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {isCountryOpen && (
                    <div className="mt-2 space-y-2 max-h-48 overflow-y-auto">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => {
                            setSelectedCountry(country.code);
                            setIsCountryOpen(false);
                          }}
                          className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-all ${
                            selectedCountry === country.code
                              ? 'bg-cyan-500/20 text-cyan-300'
                              : 'bg-gray-600/50 text-gray-300 hover:bg-cyan-500/20'
                          }`}
                        >
                          <span className="text-lg mr-3">{country.flag}</span>
                          <span className="mr-2">{country.name}</span>
                          <span className="ml-auto text-cyan-400">{country.dialCode}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <Link
                href="/"
                className="flex items-center text-white hover:bg-white/10 px-4 py-3 rounded-xl text-base font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">🏠</span>
                Home
              </Link>
              
              <Link
                href="/about"
                className="flex items-center text-white hover:bg-white/10 px-4 py-3 rounded-xl text-base font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">👥</span>
                About Us
              </Link>
              
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between text-white hover:bg-white/10 px-4 py-3 rounded-xl text-base font-medium transition-all"
                >
                  <div className="flex items-center">
                    <span className="mr-3">🎯</span>
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
                  <div className="pl-8 mt-2 space-y-2 bg-gray-700/50 py-3 rounded-xl">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center px-4 py-2 text-sm text-white hover:text-cyan-300 transition-colors rounded-lg"
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
                href="/pricing"
                className="flex items-center text-white hover:bg-white/10 px-4 py-3 rounded-xl text-base font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">💲</span>
                Pricing
              </Link>

              <Link
                href="/blog"
                className="flex items-center text-white hover:bg-white/10 px-4 py-3 rounded-xl text-base font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">📚</span>
                Resources
              </Link>

              <div className="pt-4 border-t border-gray-700 mt-4">
                <Link
                  href="/contact"
                  className="block bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all mb-3"
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