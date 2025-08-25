'use client';
import { useState } from 'react';
import Image from 'next/image';

const MobileRepair = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [activeBrand, setActiveBrand] = useState('all');

  const mobileIssues = [
    {
      issue: "Screen Replacement",
      icon: "📱",
      description: "Cracked or damaged screen repair with genuine parts",
      time: "30-60 minutes",
      cost: "₹1,500 - ₹8,000",
      common: true,
      image: "https://media.istockphoto.com/id/1390988889/photo/close-up-shot-of-technician-removing-or-fixing-broken-mobile-phone-display-at-workshop.jpg?s=612x612&w=0&k=20&c=OW5l-AE4y-4D8PnML0w0LdbYMT0hlAoqRBK8sOrFKnY="
    },
    {
      issue: "Battery Replacement",
      icon: "🔋",
      description: "Poor battery life or swelling battery replacement",
      time: "45 minutes",
      cost: "₹1,200 - ₹4,000",
      common: true,
      image: "https://mljjxqhpratf.i.optimole.com/w:800/h:800/q:100/f:best/https://www.mobile-experts.com.au/wp-content/uploads/2020/11/phone-battery-replacement.jpg"
    },
    {
      issue: "Charging Port Repair",
      icon: "⚡",
      description: "Faulty charging port repair and replacement",
      time: "1-2 hours",
      cost: "₹800 - ₹2,500",
      common: false,
      image: "https://cdn-bjcni.nitrocdn.com/iVNCPdDQeamUVPLwrUUCDenAdntewMKT/assets/images/optimized/rev-288d08a/www.gophermods.com/wp-content/uploads/2023/07/iPhone-Charging-Port-Repair-Options-Costs-and-Considerations.jpg"
    },
    {
      issue: "Camera Repair",
      icon: "📸",
      description: "Front or rear camera repair and replacement",
      time: "1 hour",
      cost: "₹1,000 - ₹5,000",
      common: false,
      image: "https://img.freepik.com/premium-photo/mobile-camera-repair-mobile-phone-smartphone-repair-technici_35534-814.jpg"
    },
    {
      issue: "Water Damage Repair",
      icon: "💧",
      description: "Water damage cleaning and component replacement",
      time: "2-4 hours",
      cost: "₹2,000 - ₹6,000",
      common: true,
      image: "https://www.iphonerepairleeds.com/products/s5-water-damage-mobile.jpg"
    },
    {
      issue: "Software Issues",
      icon: "🖥️",
      description: "OS installation, virus removal, and software problems",
      time: "30-60 minutes",
      cost: "₹500 - ₹1,500",
      common: true,
      image: "https://www.openrma.com/wp-content/uploads/2019/11/Mobile-Repair-Shop1.jpg"
    }
  ];

  const brands = [
    { name: "Samsung", icon: "📱", popular: true },
    { name: "Apple", icon: "🍎", popular: true },
    { name: "Xiaomi", icon: "⚡", popular: true },
    { name: "OnePlus", icon: "1️⃣", popular: false },
    { name: "Oppo", icon: "🔍", popular: false },
    { name: "Vivo", icon: "🎵", popular: false },
    { name: "Realme", icon: "⚡", popular: false },
    { name: "Google", icon: "🔍", popular: true }
  ];

  const features = [
    {
      icon: "⏰",
      title: "Quick Service",
      description: "Most repairs completed within 1-2 hours"
    },
    {
      icon: "🛡️",
      title: "Warranty",
      description: "90 days warranty on all repairs and parts"
    },
    {
      icon: "💯",
      title: "Genuine Parts",
      description: "Quality original or OEM replacement parts"
    },
    {
      icon: "🔧",
      title: "Expert Technicians",
      description: "Certified professionals with years of experience"
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Competitive prices with no hidden costs"
    },
    {
      icon: "🏠",
      title: "Doorstep Service",
      description: "Free pickup and delivery available"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-6 py-2 rounded-full text-sm font-medium mb-6">
            <span className="mr-2">📱</span>
            EXPERT MOBILE REPAIR SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Mobile Phone Repair
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fast, reliable, and affordable mobile repair services for all brands. 
            Get your phone fixed by certified technicians with warranty.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Brands We Repair */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Brands We Repair</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className={`flex items-center px-6 py-3 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  activeBrand === brand.name.toLowerCase()
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-purple-300'
                }`}
                onClick={() => setActiveBrand(brand.name.toLowerCase())}
              >
                <span className="text-xl mr-3">{brand.icon}</span>
                <span className="font-medium">{brand.name}</span>
                {brand.popular && (
                  <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    Popular
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Mobile Repair Issues</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileIssues.map((issue, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedIssue(issue)}
              >
                <div className="relative h-40">
                  <Image
                    src={issue.image}
                    alt={issue.issue}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-2xl">{issue.icon}</div>
                  {issue.common && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                      Common
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{issue.issue}</h4>
                  <p className="text-gray-600 text-sm mb-4">{issue.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-600">Time:</span>
                      <p className="font-semibold text-purple-600">{issue.time}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Cost:</span>
                      <p className="font-semibold text-green-600">{issue.cost}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need Mobile Repair?</h3>
          <p className="text-purple-100 text-xl mb-8">
            Get your phone fixed today with our expert repair services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { icon: "⏰", text: "Quick Repair", desc: "1-2 hours average time" },
              { icon: "🛡️", text: "90 Days Warranty", desc: "On all repairs" },
              { icon: "🏠", text: "Free Pickup", desc: "Doorstep service available" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-semibold mb-2">{item.text}</div>
                <div className="text-purple-200 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center">
              <span className="mr-2">📞</span>
              Call: +91 99904473018
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center">
              <span className="mr-2">💬</span>
              WhatsApp Repair
            </button>
          </div>
        </div>

        {/* Issue Modal */}
        {selectedIssue && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{selectedIssue.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedIssue.issue}</h3>
                <p className="text-gray-600">{selectedIssue.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-600 mb-2">Repair Time</div>
                  <div className="text-xl font-bold text-purple-600">{selectedIssue.time}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-600 mb-2">Estimated Cost</div>
                  <div className="text-xl font-bold text-green-600">{selectedIssue.cost}</div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="text-blue-800 text-center">
                  {selectedIssue.common ? '🔴 This is a common issue we fix daily' : '⚪ Specialized repair service'}
                </p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedIssue(null)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                  Book Repair
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileRepair;