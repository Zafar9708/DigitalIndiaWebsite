

// 'use client'
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const dropdownRef = useRef(null);

//   const services = [
//     { name: "Laptop Repair", href: "/services/LaptopRepair", icon: "💻" },
//     { name: "Computer Repair", href: "/services/ComputerRepair", icon: "🖥️" },
//     { name: "Data Recovery", href: "/services/DataRecovery", icon: "💾" },
//     { name: "Software Installation", href: "/services/SoftwareInstallation", icon: "📀" },
//     { name: "Hardware Upgrades", href: "/services/HardwareUpgrades", icon: "🔧" }
//   ];

//   // Close desktop dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDesktopServicesOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleMobileServiceClick = () => {
//     setIsMobileServicesOpen(false);
//     setIsMenuOpen(false);
//   };

//   const handleDesktopServiceClick = () => {
//     setIsDesktopServicesOpen(false);
//   };

//   return (
//     <>
//       <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-900/80 backdrop-blur-lg shadow-lg' : 'bg-blue-900/60 backdrop-blur-md'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo and company name */}
//             <Link href="/" className="flex items-center group">
//               <div className="flex-shrink-0 flex items-center">
//                 <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg border-2 border-blue-400/50 group-hover:scale-105 transition-transform duration-300 shadow-lg">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                   </svg>
//                 </div>
//                 <div className="ml-3">
//                   <span className="block text-xs text-blue-300 font-medium">Tech Solutions</span>
//                 </div>
//               </div>
//             </Link>

//             {/* Desktop menu */}
//             <div className="hidden lg:flex items-center space-x-1">
//               <Link href="/" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
//                 Home
//               </Link>
              
//               <Link href="/about" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
//                 About
//               </Link>
              
//               {/* Desktop Services dropdown */}
//               <div className="relative" ref={dropdownRef}>
//                 <button 
//                   onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
//                   className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center"
//                 >
//                   Services
//                   <svg 
//                     className={`ml-1 h-4 w-4 transition-transform ${isDesktopServicesOpen ? 'rotate-180' : ''}`} 
//                     fill="none" 
//                     viewBox="0 0 24 24" 
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
                
//                 {isDesktopServicesOpen && (
//                   <div className="absolute z-10 left-0 mt-2 w-64 rounded-xl shadow-2xl bg-blue-800/95 backdrop-blur-md border border-blue-600/30">
//                     <div className="p-2" role="menu" aria-orientation="vertical">
//                       {services.map((service, index) => (
//                         <Link
//                           key={index}
//                           href={service.href}
//                           className="flex items-center px-4 py-3 text-sm text-blue-100 hover:bg-blue-700/50 hover:text-white transition-all rounded-lg group"
//                           role="menuitem"
//                           onClick={handleDesktopServiceClick}
//                         >
//                           <span className="text-lg mr-3 group-hover:scale-110 transition-transform">{service.icon}</span>
//                           <span>{service.name}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <Link href="/products" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
//                 Products
//               </Link>

//               <Link href="/blog" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
//                 Second Hand Laptops
//               </Link>

              
//               <Link href="/camera" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
//                 Camera Installation
//               </Link>

//               <Link href="/mobile" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
//                 Mobile Repair
//               </Link>
//             </div>

            

//             {/* Right side - Contact */}
//             <div className="hidden lg:flex items-center space-x-4">
//               <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 flex items-center">
//                 Contact Us
//               </Link>
//             </div>

//             {/* Mobile menu button */}
//             <div className="lg:hidden flex items-center">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="inline-flex items-center justify-center p-3 rounded-xl text-blue-100 hover:text-white hover:bg-blue-800/50 focus:outline-none transition-all"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {isMenuOpen ? (
//                   <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 ) : (
//                   <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-blue-800/95 backdrop-blur-lg border-t border-blue-600/30">
//             <div className="px-4 pt-4 pb-6 space-y-2">
//               <Link
//                 href="/"
//                 className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <span className="mr-3">🏠</span>
//                 Home
//               </Link>
              
//               <Link
//                 href="/about"
//                 className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <span className="mr-3">👥</span>
//                 About
//               </Link>
              
//               {/* Mobile Services dropdown - SEPARATE STATE */}
//               <div>
//                 <button
//                   onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//                   className="w-full flex items-center justify-between text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
//                 >
//                   <div className="flex items-center">
//                     <span className="mr-3">🛠️</span>
//                     Services
//                   </div>
//                   <svg 
//                     className={`h-5 w-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
//                     fill="none" 
//                     viewBox="0 0 24 24" 
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
                
//                 {isMobileServicesOpen && (
//                   <div className="ml-6 mt-2 space-y-2 border-l-2 border-blue-600 pl-4">
//                     {services.map((service, index) => (
//                       <Link
//                         key={index}
//                         href={service.href}
//                         className="flex items-center text-blue-100 hover:text-white px-3 py-2 transition-colors rounded-lg"
//                         onClick={handleMobileServiceClick}
//                       >
//                         <span className="text-lg mr-3">{service.icon}</span>
//                         <span>{service.name}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/products"
//                 className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <span className="mr-3">🛒</span>
//                 Products
//               </Link>

//               <Link
//                 href="/blog"
//                 className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <span className="mr-3">💻</span>
//                 Second Hand Laptops
//               </Link>

//                <Link
//                 href="/camera"
//                 className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <span className="mr-3">💻</span>
//                 Camera Installation
//               </Link>

//               <Link
//                 href="/mobile"
//                 className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <span className="mr-3">💻</span>
//                 Mobile Repair
//               </Link>

//               <div className="pt-4 border-t border-blue-700 mt-4">
//                 <Link
//                   href="/contact"
//                   className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all mb-3"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isDesktopLaptopsOpen, setIsDesktopLaptopsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileLaptopsOpen, setIsMobileLaptopsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesDropdownRef = useRef(null);
  const laptopsDropdownRef = useRef(null);

  const services = [
    { name: "Laptop Repair", href: "/services/LaptopRepair", icon: "💻" },
    { name: "Computer Repair", href: "/services/ComputerRepair", icon: "🖥️" },
    { name: "Data Recovery", href: "/services/DataRecovery", icon: "💾" },
    { name: "Software Installation", href: "/services/SoftwareInstallation", icon: "📀" },
    { name: "Hardware Upgrades", href: "/services/HardwareUpgrades", icon: "🔧" }
  ];

  const laptops = [
    { name: "New Laptops", href: "/laptop/new", icon: "🆕" },
    { name: "Second Hand Laptops", href: "/laptop/second-hand", icon: "💻" },
    // { name: "Gaming Laptops", href: "/laptops/gaming", icon: "🎮", description: "High-performance gaming machines" },
    // { name: "Business Laptops", href: "/laptops/business", icon: "💼", description: "Professional laptops for work" }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsDesktopServicesOpen(false);
      }
      if (laptopsDropdownRef.current && !laptopsDropdownRef.current.contains(event.target)) {
        setIsDesktopLaptopsOpen(false);
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

  const handleMobileServiceClick = () => {
    setIsMobileServicesOpen(false);
    setIsMenuOpen(false);
  };

  const handleMobileLaptopClick = () => {
    setIsMobileLaptopsOpen(false);
    setIsMenuOpen(false);
  };

  const handleDesktopServiceClick = () => {
    setIsDesktopServicesOpen(false);
  };

  const handleDesktopLaptopClick = () => {
    setIsDesktopLaptopsOpen(false);
  };

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
                  <span className="block text-xs text-blue-300 font-medium">Digital India Solutions</span>
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
              
              {/* Desktop Services dropdown */}
              <div className="relative" ref={servicesDropdownRef}>
                <button 
                  onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                  className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center"
                >
                  Services
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isDesktopServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDesktopServicesOpen && (
                  <div className="absolute z-10 left-0 mt-2 w-64 rounded-xl shadow-2xl bg-blue-800/95 backdrop-blur-md border border-blue-600/30">
                    <div className="p-2" role="menu" aria-orientation="vertical">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-center px-4 py-3 text-sm text-blue-100 hover:bg-blue-700/50 hover:text-white transition-all rounded-lg group"
                          role="menuitem"
                          onClick={handleDesktopServiceClick}
                        >
                          <span className="text-lg mr-3 group-hover:scale-110 transition-transform">{service.icon}</span>
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Laptops dropdown */}
              <div className="relative" ref={laptopsDropdownRef}>
                <button 
                  onClick={() => setIsDesktopLaptopsOpen(!isDesktopLaptopsOpen)}
                  className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center"
                >
                  Laptops
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isDesktopLaptopsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDesktopLaptopsOpen && (
                  <div className="absolute z-10 left-0 mt-2 w-72 rounded-xl shadow-2xl bg-blue-800/95 backdrop-blur-md border border-blue-600/30">
                    <div className="p-3" role="menu" aria-orientation="vertical">
                      <div className="text-xs text-blue-300 uppercase font-semibold mb-2 px-2">Laptop Categories</div>
                      {laptops.map((laptop, index) => (
                        <Link
                          key={index}
                          href={laptop.href}
                          className="flex items-center px-4 py-3 text-sm text-blue-100 hover:bg-blue-700/50 hover:text-white transition-all rounded-lg group"
                          role="menuitem"
                          onClick={handleDesktopLaptopClick}
                        >
                          <span className="text-lg mr-3 group-hover:scale-110 transition-transform">{laptop.icon}</span>
                          <div>
                            <div className="font-medium">{laptop.name}</div>
                            <div className="text-xs text-blue-300">{laptop.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/products" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
                Products
              </Link>

              <Link href="/camera" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
                Camera Installation
              </Link>

              <Link href="/mobile" className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all px-4 py-2 rounded-xl text-sm font-medium flex items-center">
                Mobile Repair
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
              
              {/* Mobile Services dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
                >
                  <div className="flex items-center">
                    <span className="mr-3">🛠️</span>
                    Services
                  </div>
                  <svg 
                    className={`h-5 w-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobileServicesOpen && (
                  <div className="ml-6 mt-2 space-y-2 border-l-2 border-blue-600 pl-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center text-blue-100 hover:text-white px-3 py-2 transition-colors rounded-lg"
                        onClick={handleMobileServiceClick}
                      >
                        <span className="text-lg mr-3">{service.icon}</span>
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Laptops dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileLaptopsOpen(!isMobileLaptopsOpen)}
                  className="w-full flex items-center justify-between text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
                >
                  <div className="flex items-center">
                    <span className="mr-3">💻</span>
                    Laptops
                  </div>
                  <svg 
                    className={`h-5 w-5 transition-transform ${isMobileLaptopsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobileLaptopsOpen && (
                  <div className="ml-6 mt-2 space-y-2 border-l-2 border-blue-600 pl-4">
                    {laptops.map((laptop, index) => (
                      <Link
                        key={index}
                        href={laptop.href}
                        className="flex items-center text-blue-100 hover:text-white px-3 py-2 transition-colors rounded-lg"
                        onClick={handleMobileLaptopClick}
                      >
                        <span className="text-lg mr-3">{laptop.icon}</span>
                        <span>{laptop.name}</span>
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
                href="/camera"
                className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">📷</span>
                Camera Installation
              </Link>

              <Link
                href="/mobile"
                className="flex items-center text-blue-100 hover:bg-blue-700/50 hover:text-white px-4 py-3 rounded-xl text-base font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">📱</span>
                Mobile Repair
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