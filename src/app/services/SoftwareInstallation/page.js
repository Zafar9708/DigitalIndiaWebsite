'use client';
import { useState } from 'react';

const SoftwareInstallation = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const softwareCategories = [
    {
      category: "Operating Systems",
      description: "Windows, Linux, and macOS installation",
      popular: ["Windows 10/11", "Ubuntu Linux", "macOS"],
      time: "1-3 hours",
      includes: ["Driver installation", "Updates", "Optimization"]
    },
    {
      category: "Productivity Suite",
      description: "Office and productivity software setup",
      popular: ["Microsoft Office", "Google Workspace", "Adobe Creative Cloud"],
      time: "1-2 hours",
      includes: ["Activation", "Templates", "Configuration"]
    },
    {
      category: "Security Software",
      description: "Antivirus and security suite installation",
      popular: ["Norton", "McAfee", "Kaspersky", "Bitdefender"],
      time: "1 hour",
      includes: ["Configuration", "Updates", "Scan scheduling"]
    },
    {
      category: "Specialized Software",
      description: "Professional and specialized applications",
      popular: ["AutoCAD", "Photoshop", "QuickBooks", "Development Tools"],
      time: "1-2 hours",
      includes: ["Licensing", "Plugins", "Optimization"]
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">📀</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Software Installation</h2>
        <p className="text-gray-600">Professional software installation, configuration, and optimization services</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Software Categories */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Software Installation Services</h3>
          
          <div className="space-y-4">
            {softwareCategories.map((category, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  activeCategory === index
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-300'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{category.category}</h4>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  </div>
                  <span className="text-2xl">{index === 0 ? '🖥️' : index === 1 ? '📊' : index === 2 ? '🛡️' : '⚙️'}</span>
                </div>
                
                {activeCategory === index && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="mb-4">
                      <span className="text-sm text-gray-600">Installation Time:</span>
                      <p className="font-semibold text-orange-600">{category.time}</p>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm text-gray-600">Popular Software:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {category.popular.map((software, i) => (
                          <span key={i} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs">
                            {software}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm text-gray-600">Service Includes:</span>
                      <ul className="mt-2 space-y-1">
                        {category.includes.map((include, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            {include}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service Benefits */}
        <div>
          <div className="bg-orange-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Why Professional Installation?</h3>
            <div className="space-y-3">
              {[
                "✅ Proper configuration for optimal performance",
                "✅ License management and activation",
                "✅ Driver compatibility assurance",
                "✅ Security best practices implementation",
                "✅ Backup and recovery setup",
                "✅ Personalized training and documentation"
              ].map((benefit, index) => (
                <p key={index} className="text-gray-700 text-sm">{benefit}</p>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Pricing Structure</h3>
            <div className="space-y-4">
              {[
                { service: "Basic Installation", price: "₹499", includes: "Single software installation" },
                { service: "Standard Package", price: "₹999", includes: "Multiple software + configuration" },
                { service: "Premium Package", price: "₹1,999", includes: "Full suite + optimization + training" }
              ].map((packageItem, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-900">{packageItem.service}</h4>
                    <span className="text-orange-600 font-bold">{packageItem.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{packageItem.includes}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">📞 Need Specific Software?</h4>
            <p className="text-sm text-gray-600">We can install any licensed software you require</p>
          </div>

          <div className="text-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors w-full">
              Schedule Installation
            </button>
            <p className="text-sm text-gray-600 mt-2">Remote installation service available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareInstallation;