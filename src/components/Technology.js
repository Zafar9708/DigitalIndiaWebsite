'use client';
import React from 'react';

export default function TechnologySection() {
  const technologies = [
    {
      name: "AI-Powered Analytics",
      description: "Advanced artificial intelligence for predictive financial insights",
      icon: "🤖",
      benefits: ["Real-time forecasting", "Pattern recognition", "Predictive analysis"]
    },
    {
      name: "Cloud Integration",
      description: "Seamless cloud-based accounting solutions accessible anywhere",
      icon: "☁️",
      benefits: ["Remote access", "Automatic updates", "Secure data storage"]
    },
    {
      name: "Blockchain Security",
      description: "Military-grade security with blockchain technology",
      icon: "🔐",
      benefits: ["Tamper-proof records", "Enhanced security", "Transparent auditing"]
    },
    {
      name: "Automation Tools",
      description: "Smart automation for repetitive accounting tasks",
      icon: "⚡",
      benefits: ["Time savings", "Error reduction", "Efficiency boost"]
    }
  ];

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">INNOVATION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cutting-Edge <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging the latest advancements to deliver superior accounting solutions
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
              <div className="flex items-start mb-6">
                <div className="text-4xl mr-6">{tech.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                {tech.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Integrated With Leading Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["QuickBooks", "Xero", "NetSuite", "Salesforce"].map((platform, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-gray-300 font-semibold">{platform}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}