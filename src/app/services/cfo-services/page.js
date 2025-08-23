'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function CFOServices() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: "📊",
      title: "Financial Strategy",
      description: "Develop long-term financial plans and growth strategies",
      details: "Comprehensive financial modeling, scenario planning, and strategic roadmaps"
    },
    {
      icon: "💰",
      title: "Capital Management",
      description: "Optimize capital structure and funding strategies",
      details: "Debt and equity financing, cash flow optimization, and investment planning"
    },
    {
      icon: "📈",
      title: "Performance Analytics",
      description: "Advanced financial analysis and KPI tracking",
      details: "Dashboard development, metric tracking, and performance benchmarking"
    },
    {
      icon: "🛡️",
      title: "Risk Management",
      description: "Identify and mitigate financial risks",
      details: "Risk assessment, internal controls, and compliance management"
    }
  ];

  const packages = [
    {
      name: "Part-Time CFO",
      price: "$3,500/month",
      hours: "20 hours/month",
      features: ["Strategic planning", "Financial oversight", "Monthly reviews", "Email support"]
    },
    {
      name: "Fractional CFO",
      price: "$6,500/month",
      hours: "40 hours/month",
      features: ["All Part-Time features", "Team management", "Weekly meetings", "Phone support", "Board reporting"]
    },
    {
      name: "Interim CFO",
      price: "$12,000/month",
      hours: "Full-time equivalent",
      features: ["All Fractional features", "Daily leadership", "Project management", "24/7 access", "Crisis management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      {/* Header Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800/10 to-gray-700/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-600 rounded-3xl mb-8">
            <span className="text-4xl">👔</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-transparent">
              CFO Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Executive-level financial leadership and strategic guidance without the full-time cost. 
            Get the expertise of a Chief Financial Officer tailored to your business needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-gray-700/25 transition-all"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-gray-600/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-600/10 transition-all"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Executive Financial Leadership</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive CFO services tailored to your business objectives
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border backdrop-blur-sm cursor-pointer transition-all ${
                    activeService === index
                      ? 'bg-gray-800/30 border-gray-500/50 shadow-lg shadow-gray-700/20'
                      : 'bg-gray-800/20 border-gray-700/50 hover:border-gray-400/30'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-300">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-gray-700/10 to-gray-600/10 rounded-2xl p-8 border border-gray-600/20 backdrop-blur-sm">
              <div className="text-6xl mb-6 text-center">{services[activeService].icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-300">{services[activeService].title}</h3>
              <p className="text-gray-300 text-center mb-6">{services[activeService].description}</p>
              <p className="text-gray-400 text-center">{services[activeService].details}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible CFO Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the level of financial leadership that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`rounded-2xl p-8 border backdrop-blur-sm ${
                index === 1 
                  ? 'bg-gray-800/30 border-gray-500/50 transform scale-105 shadow-2xl shadow-gray-700/25' 
                  : 'bg-gray-800/20 border-gray-700/50'
              }`}>
                {index === 1 && (
                  <div className="bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-300">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                <div className="text-gray-400 mb-6">{pkg.hours}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                    index === 1
                      ? 'bg-gradient-to-r from-gray-700 to-gray-600 hover:shadow-lg hover:shadow-gray-700/25'
                      : 'bg-gray-700/50 hover:bg-gray-700/70'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-700/10 to-gray-600/10 rounded-2xl p-12 border border-gray-600/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Financial Leadership</h2>
            <p className="text-gray-300 text-xl mb-8">
              Get the strategic financial guidance your business needs to grow and thrive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-gray-700/25 transition-all"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-gray-600/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-600/10 transition-all"
              >
                View Full Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}