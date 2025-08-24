'use client';
import Image from 'next/image';
import { useState } from 'react';

const ProductsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'all', name: 'All Products', icon: '⭐' },
    { id: 'laptops', name: 'Laptops', icon: '💻' },
    { id: 'components', name: 'Components', icon: '🔧' },
    { id: 'storage', name: 'Storage', icon: '💾' },
    { id: 'accessories', name: 'Accessories', icon: '🎧' },
    { id: 'software', name: 'Software', icon: '📀' }
  ];

  const products = [
    {
      id: 1,
      name: "Dell XPS 15 Professional",
      category: "laptops",
      price: "₹89,999",
      originalPrice: "₹99,999",
      image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3778&hei=2323&qlt=100,1&resMode=sharp2&size=3778,2323&chrss=full&imwidth=5000",
      description: "Powerful business laptop with Intel i7 processor, 16GB RAM, and 512GB SSD",
      features: [
        "15.6\" FHD Display",
        "Intel Core i7-11800H",
        "16GB DDR4 RAM",
        "512GB NVMe SSD",
        "NVIDIA GTX 1650",
        "Windows 11 Pro"
      ],
      warranty: "2 Years Onsite",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      tags: ["Business", "Performance", "Premium"]
    },
    {
      id: 2,
      name: "HP Pavilion Gaming",
      category: "laptops",
      price: "₹64,999",
      originalPrice: "₹72,999",
      image: "data:image/jpeg;base64,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",
      description: "Gaming laptop with Ryzen 5 processor, GTX 1650 graphics, and 144Hz display",
      features: [
        "15.6\" 144Hz Display",
        "AMD Ryzen 5 5600H",
        "8GB DDR4 RAM",
        "512GB SSD",
        "NVIDIA GTX 1650",
        "RGB Backlit Keyboard"
      ],
      warranty: "1 Year",
      rating: 4.5,
      reviews: 89,
      inStock: true,
      tags: ["Gaming", "Budget", "Performance"]
    },
    {
      id: 3,
      name: "Samsung 970 EVO Plus 1TB SSD",
      category: "storage",
      price: "₹8,499",
      originalPrice: "₹9,999",
      image: "data:image/jpeg;base64,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9Zxq7oNYv/F0RPlO5tPYWBVAoK+gJxk/UkwKsIXfZvTZy32ZUgo277mOoI5HTjHSSPD5yB1OPKeRkYMtXW90WruFhe3Siyxy5tVdQrAs+4gDdtx1HIPB/AjEq7lNWuf2qhsjHmW04+ox6wKuQgf1QfxEMOc49fTp+Alo2dymrLbvmqBn+qFtC9JzPcxq8u3zGn8wxtCXbU+q88H8cwKsG0Ebs4IZeBk5KMFP88Gerpr2w7Lp9IVyzAW1szD12jYRwOMZA+k3n9SOr/i6f5Wf6TNq7o9aFCfMacqAR/RvyC6Oc+XnlF/lA0a5npuNN+k0aEEAMNFqXVySOFG8MeCfTqCJz0txfb+x6UZdamJ0hGxy6qylTqA/BdfTnPpgzeP1UdoZDfN0bgcnyON/nD7W4yQCOOeAAPScru6rXMrr42kUOCDiq31LnIJyc4bGTnhV9oGhV61cOzafQqKm2uDpLsqTZYqjHi9TsBx6b/pO3Q6g2hWGj0eCASfkrCOlm7B8fBwayADgnk44M3w913aLMCdXpk8zkutDsyhxYGwDj0sbHI9PaZKd0+qDM36VB3dVPZ2UPDDO3xsZ8zc/2m9zCq91Os1GotoqStLGetKq6KE8GtHHiZq2bmJwWB3ZXhTwOs46yjVaF67GdNPrdNca0oGDqkDV7/Gz5t9R3MMksMsw9SJYmn7qNVVbXfV2miW0ndWV7MCgHnqPF5znB+hmboe7i3UaqzVdsXV6ktWEVavEpAI6E7SOAPT6kwjn8F9uaq7S6W3UapnsstCt9mg3A6goAcKB0x0liTxuz/hfSacItVbKtZ3Kp1FzKDu3A7SxHXmezOdKzEzsrMwRETohERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k=",
      description: "High-speed NVMe SSD for lightning-fast boot times and data transfer",
      features: [
        "1TB Storage Capacity",
        "NVMe PCIe 3.0",
        "3500MB/s Read Speed",
        "3300MB/s Write Speed",
        "5-Year Warranty",
        "Heatsink Option"
      ],
      warranty: "5 Years",
      rating: 4.9,
      reviews: 256,
      inStock: true,
      tags: ["Fast", "Reliable", "Upgrade"]
    },
    {
      id: 4,
      name: "Corsair Vengeance 16GB RAM",
      category: "components",
      price: "₹5,999",
      originalPrice: "₹6,799",
      image: "https://m.media-amazon.com/images/I/51Gs2sm696L._UF1000,1000_QL80_.jpg",
      description: "High-performance DDR4 memory for gaming and professional applications",
      features: [
        "16GB (2x8GB) Kit",
        "DDR4 3200MHz",
        "CL16 Latency",
        "RGB Lighting",
        "Intel XMP Ready",
        "Aluminum Heatspreader"
      ],
      warranty: "Lifetime",
      rating: 4.7,
      reviews: 178,
      inStock: true,
      tags: ["Performance", "RGB", "Gaming"]
    },
    {
      id: 5,
      name: "Logitech MX Master 3",
      category: "accessories",
      price: "₹7,999",
      originalPrice: "₹8,999",
      image: "data:image/jpeg;base64,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",
      description: "Advanced wireless mouse for productivity with precision scrolling and ergonomic design",
      features: [
        "Wireless Connectivity",
        "4000 DPI Sensor",
        "70 Days Battery",
        "USB-C Charging",
        "Multi-Device Pairing",
        "Ergonomic Design"
      ],
      warranty: "2 Years",
      rating: 4.8,
      reviews: 312,
      inStock: true,
      tags: ["Wireless", "Ergonomic", "Premium"]
    },
    {
      id: 6,
      name: "Microsoft Office 2021",
      category: "software",
      price: "₹8,999",
      originalPrice: "₹10,999",
      image: "https://i0.wp.com/www.fastsoftwares.com/wp-content/uploads/2024/02/fastsoftwares-microsoft-office-2021-what-to-expect-01.jpg",
      description: "Latest version of Microsoft Office suite with lifetime license for 1 PC",
      features: [
        "Word, Excel, PowerPoint",
        "OneNote, Outlook",
        "Lifetime License",
        "1 PC Installation",
        "Free Updates",
        "24/7 Support"
      ],
      warranty: "Lifetime",
      rating: 4.6,
      reviews: 167,
      inStock: true,
      tags: ["Productivity", "Essential", "Business"]
    },
    {
      id: 7,
      name: "Norton 360 Deluxe",
      category: "software",
      price: "₹2,499",
      originalPrice: "₹3,999",
      image: "data:image/jpeg;base64,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",
      description: "Comprehensive antivirus protection for up to 5 devices with VPN and password manager",
      features: [
        "5 Device Protection",
        "Real-Time Threat Protection",
        "Secure VPN Included",
        "Password Manager",
        "Parental Controls",
        "Cloud Backup"
      ],
      warranty: "1 Year",
      rating: 4.4,
      reviews: 204,
      inStock: true,
      tags: ["Security", "VPN", "Multi-Device"]
    },
    {
      id: 8,
      name: "WD My Passport 2TB HDD",
      category: "storage",
      price: "₹6,499",
      originalPrice: "₹7,299",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/353356888/WR/ES/ZW/12604546/wd-my-passport-2tb-black-portable-hard-disk.jpg",
      description: "Portable external hard drive with automatic backup and password protection",
      features: [
        "2TB Storage Capacity",
        "USB 3.0 Interface",
        "Password Protection",
        "Auto Backup Software",
        "Compact Design",
        "3-Year Warranty"
      ],
      warranty: "3 Years",
      rating: 4.5,
      reviews: 189,
      inStock: false,
      tags: ["Portable", "Backup", "Secure"]
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const featuredProducts = products.filter(product => product.rating >= 4.7);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Quality Tech Products
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our curated selection of premium computer hardware, software, and accessories at competitive prices
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            <span className="text-lg mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Featured Products Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">🔥 Featured Products</h2>
            <p className="text-blue-100">Top-rated items loved by our customers</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            {featuredProducts.slice(0, 3).map(product => (
              <div key={product.id} className="flex items-center bg-white/20 rounded-lg p-3">
                <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mr-3">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">{product.name.split(' ')[0]}</div>
                  <div className="text-blue-100 text-xs">Rating: {product.rating}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            {/* Product Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4">
                {!product.inStock && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Out of Stock
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold ml-2">
                    Save ₹{(parseInt(product.originalPrice.replace(/[^\d]/g, '')) - parseInt(product.price.replace(/[^\d]/g, ''))).toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-sm">⭐</span>
                  <span className="text-xs font-bold ml-1">{product.rating}</span>
                </div>
              </div>

              {/* Quick View Button */}
              <button 
                onClick={() => setSelectedProduct(product)}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Quick View
              </button>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                <span className="text-2xl">
                  {product.category === 'laptops' && '💻'}
                  {product.category === 'storage' && '💾'}
                  {product.category === 'components' && '🔧'}
                  {product.category === 'accessories' && '🎧'}
                  {product.category === 'software' && '📀'}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

              {/* Price */}
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through ml-3">{product.originalPrice}</span>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button 
                  disabled={!product.inStock}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                    product.inStock
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-xl">❤️</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Comparison Banner */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🛡️",
              title: "Genuine Products",
              description: "All products are 100% genuine with manufacturer warranty"
            },
            {
              icon: "🚚",
              title: "Free Shipping",
              description: "Free delivery on orders above ₹5000 across India"
            },
            {
              icon: "🔧",
              title: "Expert Support",
              description: "Free technical support and installation guidance"
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

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-purple-100 mb-6">Get notified about new products and exclusive offers</p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-200 border border-white/30 focus:outline-none focus:border-white"
          />
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
              >
                <span className="text-xl">✕</span>
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Product Image */}
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h2>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          {i < Math.floor(selectedProduct.rating) ? '⭐' : '☆'}
                        </span>
                      ))}
                      <span className="text-gray-600 ml-2">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-gray-900">{selectedProduct.price}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xl text-gray-500 line-through ml-4">{selectedProduct.originalPrice}</span>
                    )}
                  </div>

                  <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-sm text-gray-600">Warranty: </span>
                      <span className="font-semibold">{selectedProduct.warranty}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Status: </span>
                      <span className={`font-semibold ${selectedProduct.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      disabled={!selectedProduct.inStock}
                      className={`flex-1 py-4 rounded-xl font-semibold text-lg ${
                        selectedProduct.inStock
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
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

export default ProductsShowcase;