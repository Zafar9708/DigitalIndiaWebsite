'use client';
import { useState } from 'react';
import Image from 'next/image';

const CameraInstallation = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const cameraTypes = [
    {
      type: "Home Security",
      icon: "🏠",
      description: "Complete home surveillance solutions for family safety",
      features: ["HD Quality", "Night Vision", "Motion Detection", "Mobile Access"],
      image: "/api/placeholder/400/300?text=Home+Security"
    },
    {
      type: "Office Surveillance",
      icon: "🏢",
      description: "Professional security systems for business premises",
      features: ["24/7 Monitoring", "Multi-Camera Setup", "Remote Access", "Storage Solutions"],
      image: "/api/placeholder/400/300?text=Office+Surveillance"
    },
    {
      type: "Commercial CCTV",
      icon: "🏪",
      description: "Advanced CCTV systems for shops and commercial spaces",
      features: ["Wide Coverage", "High Resolution", "Weather Proof", "Cloud Storage"],
      image: "/api/placeholder/400/300?text=Commercial+CCTV"
    },
    {
      type: "Smart Home Integration",
      icon: "🤖",
      description: "Seamless integration with smart home ecosystems",
      features: ["Voice Control", "Automation", "App Control", "AI Features"],
      image: "/api/placeholder/400/300?text=Smart+Home"
    }
  ];

  const packages = [
    {
      name: "Basic Home Package",
      price: "₹12,999",
      originalPrice: "₹15,999",
      cameras: "2 Cameras",
      features: [
        "2 HD Cameras",
        "Night Vision",
        "Mobile App Access",
        "7 Days Cloud Storage",
        "Basic Installation"
      ],
      bestFor: "Small Homes & Apartments"
    },
    {
      name: "Standard Family Package",
      price: "₹19,999",
      originalPrice: "₹24,999",
      cameras: "4 Cameras",
      features: [
        "4 HD Cameras",
        "1080p Resolution",
        "Motion Detection",
        "30 Days Cloud Storage",
        "Professional Installation"
      ],
      bestFor: "Medium Homes & Villas",
      popular: true
    },
    {
      name: "Premium Security Package",
      price: "₹29,999",
      originalPrice: "₹37,999",
      cameras: "6 Cameras",
      features: [
        "6 4K Cameras",
        "Advanced AI Detection",
        "24/7 Monitoring",
        "90 Days Cloud Storage",
        "Smart Home Integration"
      ],
      bestFor: "Large Homes & Offices"
    }
  ];

  const brands = [
    { name: "Hikvision", logo: "📷" },
    { name: "Dahua", logo: "🔍" },
    { name: "TP-Link", logo: "📡" },
    { name: "Mi", logo: "⚡" },
    { name: "CP Plus", logo: "🛡️" },
    { name: "Samsung", logo: "⭐" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Camera Installation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your home or business with our expert CCTV camera installation services. 
            High-quality equipment with professional setup and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Content */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Camera Installation?</h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: "🔧",
                    title: "Expert Installation",
                    description: "Certified technicians with years of experience in camera installation"
                  },
                  {
                    icon: "🛡️",
                    title: "Quality Equipment",
                    description: "Premium brands with warranty and reliable performance"
                  },
                  {
                    icon: "📱",
                    title: "Remote Access",
                    description: "Monitor your property from anywhere using your smartphone"
                  },
                  {
                    icon: "⚡",
                    title: "Quick Service",
                    description: "Same-day installation available for urgent requirements"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl mr-4 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands We Use */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Trusted Brands We Use</h3>
              <div className="grid grid-cols-3 gap-4">
                {brands.map((brand, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">{brand.logo}</div>
                    <div className="text-sm font-medium text-gray-800">{brand.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Packages */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Packages</h3>
            
            <div className="space-y-6">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl shadow-lg p-6 border-2 transition-all hover:shadow-xl ${
                    pkg.popular ? 'border-blue-500 relative' : 'border-gray-200'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{pkg.name}</h4>
                    <p className="text-gray-600">{pkg.cameras}</p>
                  </div>

                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-lg text-gray-500 line-through ml-3">{pkg.originalPrice}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Includes:</h5>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-3 mb-4">
                    <p className="text-sm text-blue-800 text-center">
                      <strong>Best for:</strong> {pkg.bestFor}
                    </p>
                  </div>

                  <button 
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Get This Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Camera Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Types of Camera Systems We Install</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cameraTypes.map((camera, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src={camera.image}
                    alt={camera.type}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-2xl">{camera.icon}</div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{camera.type}</h4>
                  <p className="text-gray-600 text-sm mb-4">{camera.description}</p>
                  
                  <div className="space-y-2">
                    {camera.features.map((feature, i) => (
                      <span key={i} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs mr-2">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Property?</h3>
          <p className="text-blue-100 mb-6">Get a free site survey and consultation with our security experts</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { icon: "📞", text: "Free Consultation" },
              { icon: "🔍", text: "Site Survey" },
              { icon: "⚡", text: "Same Day Service" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-3xl mb-2">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              📞 Call for Quote: +91 99904473018
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              💬 WhatsApp Inquiry
            </button>
          </div>
        </div>

        {/* Package Modal */}
        {selectedPackage && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedPackage.name}</h3>
                <p className="text-gray-600">{selectedPackage.cameras}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">{selectedPackage.price}</span>
                  <span className="text-xl text-gray-500 line-through ml-3">{selectedPackage.originalPrice}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Package Includes:</h4>
                <ul className="space-y-2">
                  {selectedPackage.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="text-blue-800 text-center">
                  <strong>Perfect for:</strong> {selectedPackage.bestFor}
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