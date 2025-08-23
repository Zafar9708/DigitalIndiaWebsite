'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function BusinessAdvisory() {
  const [activeArea, setActiveArea] = useState(0);

  const advisoryAreas = [
    {
      icon: "🚀",
      title: "Growth Strategy",
      description: "Strategic planning for sustainable business growth and market expansion"
    },
    {
      icon: "⚡",
      title: "Operational Efficiency",
      description: "Process optimization and operational excellence improvements"
    },
    {
      icon: "📊",
      title: "Financial Optimization",
      description: "Revenue enhancement and cost reduction strategies"
    },
    {
      icon: "🔄",
      title: "Business Transformation",
      description: "Digital transformation and organizational change management"
    }
  ];

  const successMetrics = [
    { metric: "25%", label: "Average revenue growth" },
    { metric: "40%", label: "Operational efficiency improvement" },
    { metric: "18%", label: "Cost reduction achieved" },
    { metric: "95%", label: "Client satisfaction rate" }
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
            <span className="text-4xl">🎯</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-transparent">
              Business Advisory
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Strategic business advisory services that provide expert guidance, 
            actionable insights, and practical solutions to drive your business forward.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-gray-700/25 transition-all"
            >
              Get Expert Advice
            </Link>
            <Link 
              href="/success-stories" 
              className="border-2 border-gray-600/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-600/10 transition-all"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </header>

      {/* Advisory Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Advisory Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive business advisory across all critical areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryAreas.map((area, index) => (
              <div 
                key={index}
                className={`bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border text-center cursor-pointer transition-all ${
                  activeArea === index
                    ? 'border-gray-500/50 shadow-lg shadow-gray-700/20'
                    : 'border-gray-700/50 hover:border-gray-400/50'
                }`}
                onClick={() => setActiveArea(index)}
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-300">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Measurable impact from our business advisory services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-transparent">
                  {metric.metric}
                </div>
                <p className="text-gray-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Advisory Approach</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Deep Analysis",
                description: "Comprehensive assessment of your business operations, financials, and market position"
              },
              {
                icon: "💡",
                title: "Strategic Insights",
                description: "Data-driven recommendations and actionable strategies for improvement"
              },
              {
                icon: "🛠️",
                title: "Practical Implementation",
                description: "Hands-on support executing recommendations and measuring results"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-300">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-700/10 to-gray-600/10 rounded-2xl p-12 border border-gray-600/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business Today</h2>
            <p className="text-gray-300 text-xl mb-8">
              Get the expert guidance and strategic insights your business needs to succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-gray-700/25 transition-all"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-gray-600/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-600/10 transition-all"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}