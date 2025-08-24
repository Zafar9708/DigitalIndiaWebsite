'use client';
import { useState } from 'react';
import Image from 'next/image';

const SecondHandLaptops = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedLaptop, setSelectedLaptop] = useState(null);

  const laptops = [
    {
      id: 1,
      name: "Dell Latitude E7440",
      category: "business",
      price: "₹18,500",
      originalPrice: "₹25,000",
      image: "/api/placeholder/400/300?text=Dell+Latitude",
      specs: ["Intel i5 4th Gen", "8GB RAM", "256GB SSD", "14\" HD Display", "Windows 10 Pro"],
      condition: "Excellent",
      usage: "6 months",
      warranty: "3 months",
      rating: 4.5,
      stock: 3
    },
    {
      id: 2,
      name: "HP Pavilion Gaming",
      category: "gaming",
      price: "₹45,000",
      originalPrice: "₹65,000",
      image: "/api/placeholder/400/300?text=HP+Gaming",
      specs: ["Intel i7 9th Gen", "16GB RAM", "512GB SSD", "GTX 1650 4GB", "15.6\" 144Hz"],
      condition: "Very Good",
      usage: "1 year",
      warranty: "6 months",
      rating: 4.7,
      stock: 2
    },
    {
      id: 3,
      name: "Lenovo ThinkPad X1 Carbon",
      category: "premium",
      price: "₹62,000",
      originalPrice: "₹85,000",
      image: "/api/placeholder/400/300?text=ThinkPad+X1",
      specs: ["Intel i7 8th Gen", "16GB RAM", "512GB SSD", "14\" FHD IPS", "Windows 11 Pro"],
      condition: "Excellent",
      usage: "8 months",
      warranty: "1 year",
      rating: 4.8,
      stock: 1
    },
    {
      id: 4,
      name: "Asus VivoBook S14",
      category: "budget",
      price: "₹22,000",
      originalPrice: "₹32,000",
      image: "/api/placeholder/400/300?text=Asus+VivoBook",
      specs: ["Intel i3 10th Gen", "8GB RAM", "256GB SSD", "14\" FHD", "Windows 11"],
      condition: "Good",
      usage: "1 year",
      warranty: "3 months",
      rating: 4.3,
      stock: 5
    },
    {
      id: 5,
      name: "Apple MacBook Air M1",
      category: "premium",
      price: "₹75,000",
      originalPrice: "₹99,000",
      image: "/api/placeholder/400/300?text=MacBook+Air",
      specs: ["Apple M1 Chip", "8GB RAM", "256GB SSD", "13.3\" Retina", "macOS"],
      condition: "Like New",
      usage: "3 months",
      warranty: "6 months",
      rating: 4.9,
      stock: 2
    },
    {
      id: 6,
      name: "Acer Nitro 5 Gaming",
      category: "gaming",
      price: "₹52,000",
      originalPrice: "₹72,000",
      image: "/api/placeholder/400/300?text=Acer+Nitro",
      specs: ["AMD Ryzen 7", "16GB RAM", "1TB HDD + 256GB SSD", "RTX 3050", "15.6\" 120Hz"],
      condition: "Very Good",
      usage: "1.5 years",
      warranty: "6 months",
      rating: 4.6,
      stock: 4
    }
  ];

  const categories = [
    { id: 'all', name: 'All Laptops', count: laptops.length },
    { id: 'budget', name: 'Budget', count: laptops.filter(l => l.category === 'budget').length },
    { id: 'business', name: 'Business', count: laptops.filter(l => l.category === 'business').length },
    { id: 'gaming', name: 'Gaming', count: laptops.filter(l => l.category === 'gaming').length },
    { id: 'premium', name: 'Premium', count: laptops.filter(l => l.category === 'premium').length }
  ];

  const filteredLaptops = activeFilter === 'all' 
    ? laptops 
    : laptops.filter(laptop => laptop.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Quality Second Hand Laptops</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Refurbished and tested laptops with warranty. Perfect performance at affordable prices.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
              activeFilter === category.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            {category.name}
            <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Features Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🔍", text: "Thoroughly Tested" },
            { icon: "🛡️", text: "Warranty Included" },
            { icon: "💯", text: "Quality Guaranteed" },
            { icon: "🚚", text: "Free Delivery" }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl mb-2">{feature.icon}</span>
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Laptops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredLaptops.map(laptop => (
          <div key={laptop.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={laptop.image}
                alt={laptop.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {laptop.condition}
                </span>
              </div>

              {/* Stock */}
              <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1">
                <span className="text-xs font-bold">Stock: {laptop.stock}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{laptop.name}</h3>
              
              {/* Price */}
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-900">{laptop.price}</span>
                <span className="text-lg text-gray-500 line-through ml-3">{laptop.originalPrice}</span>
              </div>

              {/* Specs */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {laptop.specs.slice(0, 3).map((spec, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="mr-2">⏱️</span>
                  <span>Used: {laptop.usage}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🛡️</span>
                  <span>Warranty: {laptop.warranty}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      {i < Math.floor(laptop.rating) ? '⭐' : '☆'}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">({laptop.rating})</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button 
                  onClick={() => setSelectedLaptop(laptop)}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
                <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-xl">❤️</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Second Hand Laptops?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🔧",
              title: "Professional Refurbishment",
              description: "Each laptop undergoes thorough testing and refurbishment by our certified technicians"
            },
            {
              icon: "🛡️",
              title: "Warranty Protection",
              description: "All laptops come with warranty ranging from 3 months to 1 year"
            },
            {
              icon: "💻",
              title: "Quality Assurance",
              description: "We only sell laptops that meet our strict quality standards"
            },
            {
              icon: "🚚",
              title: "Free Delivery",
              description: "Free delivery within the city with setup assistance"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Laptop?</h2>
        <p className="text-blue-100 mb-6">Contact us for personalized recommendations and best deals</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            📞 Call Now: +91 99904473018
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
            💬 WhatsApp Us
          </button>
        </div>
      </div>

      {/* Laptop Modal */}
      {selectedLaptop && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedLaptop(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
              >
                <span className="text-xl">✕</span>
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={selectedLaptop.image}
                    alt={selectedLaptop.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedLaptop.name}</h2>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          {i < Math.floor(selectedLaptop.rating) ? '⭐' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2">({selectedLaptop.rating} rating)</span>
                  </div>

                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-gray-900">{selectedLaptop.price}</span>
                    <span className="text-xl text-gray-500 line-through ml-4">{selectedLaptop.originalPrice}</span>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Specifications:</h3>
                    <ul className="space-y-2">
                      {selectedLaptop.specs.map((spec, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-sm text-gray-600">Condition:</span>
                      <p className="font-semibold">{selectedLaptop.condition}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Usage:</span>
                      <p className="font-semibold">{selectedLaptop.usage}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Warranty:</span>
                      <p className="font-semibold">{selectedLaptop.warranty}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">In Stock:</span>
                      <p className="font-semibold">{selectedLaptop.stock} units</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                      Buy Now
                    </button>
                    <button className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <span className="text-2xl">❤️</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondHandLaptops;