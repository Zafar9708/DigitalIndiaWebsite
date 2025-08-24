'use client';
import { useState } from 'react';

const HardwareUpgrades = () => {
  const [activeUpgrade, setActiveUpgrade] = useState(0);

  const upgradeOptions = [
    {
      component: "RAM Upgrade",
      description: "Increase system memory for better performance",
      benefits: ["Faster multitasking", "Better application performance", "Reduced lag"],
      time: "30-60 minutes",
      cost: "Cost of RAM + ₹500 labor"
    },
    {
      component: "SSD Installation",
      description: "Replace HDD with SSD for lightning-fast speed",
      benefits: ["Faster boot times", "Quick file access", "Improved reliability"],
      time: "1-2 hours",
      cost: "Cost of SSD + ₹800 labor"
    },
    {
      component: "Graphics Card",
      description: "Upgrade GPU for gaming and graphic work",
      benefits: ["Better gaming performance", "4K video support", "Faster rendering"],
      time: "1-2 hours",
      cost: "Cost of GPU + ₹1,000 labor"
    },
    {
      component: "Processor Upgrade",
      description: "CPU upgrade for enhanced computing power",
      benefits: ["Faster processing", "Better productivity", "Future-proofing"],
      time: "2-3 hours",
      cost: "Cost of CPU + ₹1,500 labor"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🔧</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Hardware Upgrades</h2>
        <p className="text-gray-600">Boost your computer's performance with professional hardware upgrades</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upgrade Options */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Hardware Upgrades</h3>
          
          <div className="space-y-4">
            {upgradeOptions.map((upgrade, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  activeUpgrade === index
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-red-300'
                }`}
                onClick={() => setActiveUpgrade(index)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{upgrade.component}</h4>
                    <p className="text-sm text-gray-600 mt-1">{upgrade.description}</p>
                  </div>
                  <span className="text-2xl">{index === 0 ? '🧠' : index === 1 ? '⚡' : index === 2 ? '🎮' : '🚀'}</span>
                </div>
                
                {activeUpgrade === index && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="mb-4">
                      <span className="text-sm text-gray-600">Installation Time:</span>
                      <p className="font-semibold text-red-600">{upgrade.time}</p>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm text-gray-600">Cost:</span>
                      <p className="font-semibold text-green-600">{upgrade.cost}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm text-gray-600">Performance Benefits:</span>
                      <ul className="mt-2 space-y-1">
                        {upgrade.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                            {benefit}
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

        {/* Upgrade Benefits */}
        <div>
          <div className="bg-red-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Why Upgrade with Us?</h3>
            <div className="space-y-3">
              {[
                "✅ Compatibility assurance with your system",
                "✅ Genuine components with warranty",
                "✅ Professional installation by certified technicians",
                "✅ Performance testing and optimization",
                "✅ Data migration services included",
                "✅ 30-day upgrade support"
              ].map((benefit, index) => (
                <p key={index} className="text-gray-700 text-sm">{benefit}</p>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">We Provide Components</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "RAM Modules", "SSD/HDD", "Graphics Cards", "Processors", 
                "Power Supplies", "Cooling Systems", "Motherboards", "Accessories"
              ].map((component, index) => (
                <div key={index} className="flex items-center bg-white p-3 rounded-lg">
                  <span className="w-6 h-6 bg-red-100 rounded flex items-center justify-center mr-2">
                    <span className="text-xs">✔️</span>
                  </span>
                  <span className="text-sm font-medium text-gray-800">{component}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">🔍 Free Compatibility Check</h4>
            <p className="text-sm text-gray-600">We'll analyze your system and recommend the best upgrades</p>
          </div>

          <div className="text-center">
            <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors w-full">
              Get Upgrade Consultation
            </button>
            <p className="text-sm text-gray-600 mt-2">Bring your own components or use ours</p>
          </div>
        </div>
      </div>

      {/* Performance Comparison */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4 text-center">Typical Performance Improvements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { upgrade: "RAM", improvement: "40-60%", metric: "Multitasking" },
            { upgrade: "SSD", improvement: "300%", metric: "Boot Time" },
            { upgrade: "GPU", improvement: "200%", metric: "Gaming FPS" },
            { upgrade: "CPU", improvement: "50-80%", metric: "Processing" }
          ].map((item, index) => (
            <div key={index} className="bg-white/20 rounded-xl p-4">
              <div className="text-2xl font-bold">{item.improvement}</div>
              <div className="text-sm opacity-90">{item.improvement === "300%" ? "Faster" : "Improvement"}</div>
              <div className="text-xs mt-1">{item.upgrade} Upgrade</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardwareUpgrades;