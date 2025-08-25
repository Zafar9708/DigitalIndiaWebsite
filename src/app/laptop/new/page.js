'use client';
import { useState } from 'react';
import Image from 'next/image';

const NewLaptops = () => {
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const laptops = [
    {
      id: 1,
      name: "Dell XPS 13 Plus",
      category: "premium",
      price: "₹1,29,999",
      originalPrice: "₹1,49,999",
      image: "https://m.media-amazon.com/images/I/61qQBRQoidL._UF1000,1000_QL80_.jpg",
      specs: ["Intel i7-1360P", "16GB RAM", "512GB SSD", "13.4\" OLED Touch", "Windows 11 Pro"],
      features: ["4K Display", "Thunderbolt 4", "Backlit Keyboard", "Fingerprint Reader"],
      warranty: "3 Years ProSupport",
      rating: 4.9,
      stock: 12,
      brand: "Dell"
    },
    {
      id: 2,
      name: "HP Spectre x360",
      category: "premium",
      price: "₹1,19,999",
      originalPrice: "₹1,39,999",
      image: "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F08%2FHP-Spectre-x360-14-1-of-7.jpg&signature=b273734ba382a58d403431a960fd1708",
      specs: ["Intel i7-1255U", "16GB RAM", "1TB SSD", "13.5\" 3K Touch", "Windows 11 Home"],
      features: ["360° Hinge", "Stylus Support", "Bang & Olufsen Audio", "IR Camera"],
      warranty: "2 Years Premium Care",
      rating: 4.8,
      stock: 8,
      brand: "HP"
    },
    {
      id: 3,
      name: "Lenovo ThinkPad X1 Carbon",
      category: "business",
      price: "₹1,49,999",
      originalPrice: "₹1,69,999",
      image: "https://images-cdn.ubuy.co.in/6351b7e7bf169e04791c9e30-lenovo-thinkpad-x1-carbon-gen-10-intel.jpg",
      specs: ["Intel i7-1260P", "16GB RAM", "1TB SSD", "14\" WUXGA", "Windows 11 Pro"],
      features: ["Military Grade", "4G LTE", "Dolby Audio", "Privacy Guard"],
      warranty: "3 Years Onsite",
      rating: 4.7,
      stock: 6,
      brand: "Lenovo"
    },
    {
      id: 4,
      name: "Asus ROG Zephyrus G14",
      category: "gaming",
      price: "₹1,39,999",
      originalPrice: "₹1,59,999",
      image: "https://rog.asus.com/media/170728681833.jpg",
      specs: ["AMD Ryzen 9", "16GB RAM", "1TB SSD", "RTX 4060", "14\" QHD 165Hz"],
      features: ["AniMe Matrix", "RGB Keyboard", "Hi-Res Audio", " vapor Chamber Cooling"],
      warranty: "2 Years Premium",
      rating: 4.8,
      stock: 10,
      brand: "Asus"
    },
    {
      id: 5,
      name: "Apple MacBook Air M2",
      category: "premium",
      price: "₹1,14,999",
      originalPrice: "₹1,29,999",
      image: "https://images.indianexpress.com/2022/06/Apple-MacBook-Air-2022-1.jpg",
      specs: ["Apple M2 Chip", "8GB RAM", "256GB SSD", "13.6\" Liquid Retina", "macOS"],
      features: ["MagSafe Charging", "Touch ID", "18hr Battery", "1080p Camera"],
      warranty: "1 Year Apple Care",
      rating: 4.9,
      stock: 15,
      brand: "Apple"
    },
    {
      id: 6,
      name: "MSI Katana 15",
      category: "gaming",
      price: "₹89,999",
      originalPrice: "₹1,04,999",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dNKfJEHNapfjRIFRpv2tL65i2F6wl31YcA&s",
      specs: ["Intel i7-12650H", "16GB RAM", "512GB SSD", "RTX 4050", "15.6\" FHD 144Hz"],
      features: ["Cooler Boost 5", " per Key RGB", "Hi-Res Audio", "Type-C charging"],
      warranty: "2 Years Warranty",
      rating: 4.6,
      stock: 7,
      brand: "MSI"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Laptops', count: laptops.length },
    { id: 'premium', name: 'Premium', count: laptops.filter(l => l.category === 'premium').length },
    { id: 'business', name: 'Business', count: laptops.filter(l => l.category === 'business').length },
    { id: 'gaming', name: 'Gaming', count: laptops.filter(l => l.category === 'gaming').length }
  ];

  const brands = ["Dell", "HP", "Lenovo", "Asus", "Apple", "MSI"];

  const filteredLaptops = activeFilter === 'all' 
    ? laptops 
    : laptops.filter(laptop => laptop.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-medium mb-6">
            <span className="mr-2">🆕</span>
            BRAND NEW LAPTOPS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium New Laptops Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest laptops from top brands with full manufacturer warranty, 
            expert configuration advice, and after-sales support.
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

        {/* Brands */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Premium Brands Available</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center bg-gray-50 px-6 py-3 rounded-xl border-2 border-gray-200">
                <span className="text-2xl mr-3">💻</span>
                <span className="font-semibold text-gray-800">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Laptops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  New
                </div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm">⭐</span>
                    <span className="text-xs font-bold ml-1">{laptop.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">{laptop.name}</h3>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{laptop.brand}</span>
                </div>

                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">{laptop.price}</span>
                  <span className="text-lg text-gray-500 line-through ml-3">{laptop.originalPrice}</span>
                </div>

                {/* Key Specs */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {laptop.specs.slice(0, 3).map((spec, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {laptop.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Warranty & Stock */}
                <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                  <span>🛡️ {laptop.warranty}</span>
                  <span>📦 {laptop.stock} in stock</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedLaptop(laptop)}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                  <button className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <span className="text-xl">❤️</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Buy From Us */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Buy New Laptops From Us?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Full Warranty",
                description: "Complete manufacturer warranty with extended support options"
              },
              {
                icon: "🔧",
                title: "Expert Setup",
                description: "Professional setup and software installation included"
              },
              {
                icon: "🚚",
                title: "Free Delivery",
                description: "Free shipping with careful packaging and setup assistance"
              },
              {
                icon: "💯",
                title: "Genuine Products",
                description: "100% genuine products with proper invoices and documentation"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need Help Choosing?</h3>
          <p className="text-blue-100 text-xl mb-8">
            Our experts will help you find the perfect laptop for your needs and budget
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { icon: "💻", text: "Expert Advice", desc: "Personalized recommendations" },
              { icon: "💰", text: "Best Price", desc: "Competitive pricing guaranteed" },
              { icon: "⚡", text: "Quick Delivery", desc: "Same-day shipping available" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-semibold mb-2">{item.text}</div>
                <div className="text-blue-200 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center">
              <span className="mr-2">📞</span>
              Call for Quote: +91 99904473018
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center">
              <span className="mr-2">💬</span>
              WhatsApp Consultation
            </button>
          </div>
        </div>

        {/* Laptop Modal */}
        {selectedLaptop && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
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
                      <span className="text-gray-600 ml-2">({selectedLaptop.rating})</span>
                    </div>

                    <div className="flex items-center mb-6">
                      <span className="text-3xl font-bold text-gray-900">{selectedLaptop.price}</span>
                      <span className="text-xl text-gray-500 line-through ml-4">{selectedLaptop.originalPrice}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Specifications:</h4>
                      <ul className="space-y-2">
                        {selectedLaptop.specs.map((spec, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span className="text-gray-700">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedLaptop.features.map((feature, i) => (
                          <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-sm text-gray-600 mb-2">Warranty</div>
                        <div className="font-semibold">{selectedLaptop.warranty}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-sm text-gray-600 mb-2">In Stock</div>
                        <div className="font-semibold">{selectedLaptop.stock} units</div>
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
    </section>
  );
};

export default NewLaptops;