'use client';
import React from 'react';

export default function ProcessSection() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We thoroughly analyze your current financial situation and business goals",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Develop customized accounting strategies tailored to your specific needs",
      icon: "📊"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Seamlessly integrate advanced accounting solutions into your operations",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring, optimization, and 24/7 expert support",
      icon: "🔄"
    }
  ];

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">OUR PROCESS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Atlabb <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Approach</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A structured methodology that delivers exceptional financial results
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-blue-500/20 transition-colors duration-300">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Begin with a free consultation and discover how our process can transform your finances
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Start Free Consultation
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}