'use client';
import { useState } from 'react';
import Image from 'next/image';

const CameraInstallation = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const cameraTypes = [
    {
      type: "Home Security",
      icon: "🏠",
      description: "Complete home surveillance solutions for family safety and property protection",
      features: ["HD 1080p Quality", "Night Vision", "Motion Detection", "Mobile App Access", "Two-Way Audio"],
      image: "/api/placeholder/400/300?text=Home+Security",
      color: "from-blue-500 to-blue-700"
    },
    {
      type: "Office Surveillance",
      icon: "🏢",
      description: "Professional security systems for business premises and corporate environments",
      features: ["24/7 Monitoring", "Multi-Camera Setup", "Remote Access", "Cloud Storage", "Access Control"],
      image: "/api/placeholder/400/300?text=Office+Surveillance",
      color: "from-purple-500 to-purple-700"
    },
    {
      type: "Commercial CCTV",
      icon: "🏪",
      description: "Advanced CCTV systems for retail shops, warehouses, and commercial spaces",
      features: ["4K Resolution", "Wide Area Coverage", "Weather Proof", "Night Vision", "Pan-Tilt-Zoom"],
      image: "/api/placeholder/400/300?text=Commercial+CCTV",
      color: "from-green-500 to-green-700"
    },
    {
      type: "Smart Home Integration",
      icon: "🤖",
      description: "Seamless integration with smart home ecosystems and voice assistants",
      features: ["Voice Control", "Home Automation", "App Control", "AI Features", "Smart Alerts"],
      image: "/api/placeholder/400/300?text=Smart+Home",
      color: "from-orange-500 to-orange-700"
    }
  ];

  const packages = [
    {
      name: "Basic Home Package",
      price: "₹12,999",
      originalPrice: "₹15,999",
      savings: "₹3,000",
      cameras: "2 HD Cameras",
      features: [
        "2× 1080p HD Cameras",
        "Night Vision up to 30ft",
        "Mobile App Access",
        "7 Days Cloud Storage",
        "Basic Installation",
        "1 Year Warranty"
      ],
      bestFor: "1-2 BHK Apartments",
      popular: false,
      icon: "🔒"
    },
    {
      name: "Standard Family Package",
      price: "₹19,999",
      originalPrice: "₹24,999",
      savings: "₹5,000",
      cameras: "4 Full HD Cameras",
      features: [
        "4× 2MP Full HD Cameras",
        "1080p Resolution",
        "Motion Detection Alerts",
        "30 Days Cloud Storage",
        "Professional Installation",
        "2 Years Warranty"
      ],
      bestFor: "3 BHK Homes & Villas",
      popular: true,
      icon: "🏡"
    },
    {
      name: "Premium Security Package",
      price: "₹29,999",
      originalPrice: "₹37,999",
      savings: "₹8,000",
      cameras: "6 4K Cameras",
      features: [
        "6× 4K Ultra HD Cameras",
        "Advanced AI Detection",
        "24/7 Professional Monitoring",
        "90 Days Cloud Storage",
        "Smart Home Integration",
        "3 Years Warranty"
      ],
      bestFor: "Large Homes & Offices",
      popular: false,
      icon: "⭐"
    }
  ];

  const features = [
    {
      icon: "🔧",
      title: "Expert Installation",
      description: "Certified technicians with 5+ years experience in professional camera installation"
    },
    {
      icon: "🛡️",
      title: "Quality Equipment",
      description: "Premium international brands with manufacturer warranty and reliable performance"
    },
    {
      icon: "📱",
      title: "Remote Monitoring",
      description: "Access your cameras from anywhere in the world using our mobile app"
    },
    {
      icon: "⚡",
      title: "Quick Service",
      description: "Same-day installation available for urgent security requirements"
    },
    {
      icon: "☁️",
      title: "Cloud Storage",
      description: "Secure cloud storage options with encrypted data protection"
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      description: "Instant notifications on your phone for motion detection and security events"
    }
  ];

  const brands = [
    { name: "Hikvision", logo: "📷", featured: true },
    { name: "Dahua", logo: "🔍", featured: true },
    { name: "TP-Link", logo: "📡", featured: false },
    { name: "Xiaomi", logo: "⚡", featured: true },
    { name: "CP Plus", logo: "🛡️", featured: false },
    { name: "Samsung", logo: "⭐", featured: true },
    { name: "Bosch", logo: "🔧", featured: false },
    { name: "Axis", logo: "🎯", featured: true }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-medium mb-6">
            <span className="mr-2">🎯</span>
            PROFESSIONAL SECURITY SOLUTIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Camera Installation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Protect what matters most with our expert CCTV camera installation services. 
            From homes to businesses, we provide comprehensive security solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              onClick={() => setActiveFeature(index)}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl text-white mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Packages Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Security Packages</h3>
              <p className="text-gray-600">Choose the perfect security solution for your needs</p>
            </div>
            
            <div className="space-y-6">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    pkg.popular 
                      ? 'border-blue-500 shadow-xl relative ring-2 ring-blue-200' 
                      : 'border-gray-200 shadow-lg'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ⭐ MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl mb-2">{pkg.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900">{pkg.name}</h4>
                    <p className="text-gray-600">{pkg.cameras}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-lg text-gray-500 line-through ml-4">{pkg.originalPrice}</span>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      Save {pkg.savings}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-4 text-center">Package Includes:</h5>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 mb-6">
                    <p className="text-blue-800 text-center font-medium">
                      <span className="font-semibold">Perfect for:</span> {pkg.bestFor}
                    </p>
                  </div>

                  <button 
                    onClick={() => setSelectedPackage(pkg)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    {pkg.popular ? 'Get Started Today' : 'Choose Package'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Camera Types & Brands */}
          <div className="space-y-12">
            {/* Camera Types */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Camera Systems We Install</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cameraTypes.map((camera, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-gradient-to-br rounded-2xl p-6 border-2 border-white hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mr-4">
                          {camera.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900">{camera.type}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{camera.description}</p>
                      
                      <div className="space-y-2">
                        {camera.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs mr-2 mb-2">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trusted Brands */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Trusted Brands We Work With</h3>
              
              <div className="grid grid-cols-4 gap-4">
                {brands.map((brand, index) => (
                  <div 
                    key={index} 
                    className={`bg-gray-50 rounded-xl p-4 text-center transition-all duration-300 hover:scale-110 ${
                      brand.featured ? 'ring-2 ring-blue-300' : ''
                    }`}
                  >
                    <div className="text-2xl mb-2">{brand.logo}</div>
                    <div className={`text-sm font-medium ${brand.featured ? 'text-blue-800' : 'text-gray-700'}`}>
                      {brand.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Secure Your Property?</h3>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Get a free site survey and professional consultation with our security experts
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                { icon: "📞", text: "Free Consultation", desc: "Expert advice at no cost" },
                { icon: "🔍", text: "Site Survey", desc: "Comprehensive property assessment" },
                { icon: "⚡", text: "Same Day Service", desc: "Quick installation available" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-semibold mb-2">{item.text}</div>
                  <div className="text-blue-200 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center">
                <span className="mr-2">📞</span>
                Call Now: +91 99904473018
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center">
                <span className="mr-2">💬</span>
                WhatsApp Inquiry
              </button>
            </div>
          </div>
        </div>

        {/* Package Modal */}
        {selectedPackage && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{selectedPackage.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedPackage.name}</h3>
                <p className="text-gray-600">{selectedPackage.cameras}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-3xl font-bold text-gray-900">{selectedPackage.price}</span>
                  <span className="text-xl text-gray-500 line-through ml-4">{selectedPackage.originalPrice}</span>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Save {selectedPackage.savings}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4 text-center">Package Includes:</h4>
                <ul className="space-y-3">
                  {selectedPackage.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="text-blue-800 text-center font-medium">
                  <span className="font-semibold">Perfect for:</span> {selectedPackage.bestFor}
                </p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Book Installation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CameraInstallation;