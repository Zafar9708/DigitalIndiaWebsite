'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const reasons = [
  {
    title: 'Expert Certified Team',
    description: 'CPA-certified professionals with 15+ years of diverse industry experience',
    icon: '👨‍💼',
    stat: '15+ Years',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Client Satisfaction',
    description: 'Join 250+ businesses that trust us with their financial success',
    icon: '⭐',
    stat: '98% Rating',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cutting-Edge Technology',
    description: 'AI-powered tools and cloud-based solutions for modern accounting',
    icon: '💻',
    stat: 'AI Powered',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your accounting needs',
    icon: '🔄',
    stat: 'Always Available',
    color: 'from-orange-500 to-red-500'
  }
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">WHY CHOOSE ATLABB</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Excellence
            </span>{' '}
            in Accounting
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover why businesses choose Atlabb for their financial success and peace of mind
          </p>
        </div>

        {/* Features Grid - Holographic Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              {/* Holographic card */}
              <div className={`relative h-80 bg-gradient-to-br ${reason.color} rounded-3xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl ${
                activeIndex === index ? 'ring-4 ring-white/50 scale-105' : ''
              }`}>
                
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="text-5xl mb-6">{reason.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-white/80 leading-relaxed">{reason.description}</p>
                  
                  {/* Stat badge */}
                  <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-white">{reason.stat}</span>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Glow effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${reason.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 ${
                activeIndex === index ? 'opacity-30' : ''
              }`}></div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-12 border border-white/10 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">The Atlabb Advantage</h3>
            <p className="text-gray-300">Why we stand out from traditional accounting firms</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div >
              <h4 className="text-2xl font-bold text-red-400 mb-6 ml-16">Traditional Accounting</h4>
              <div className="space-y-4 ml-16">
                {['Manual processes', 'Reactive approach', 'Generic solutions', 'Limited technology', 'Seasonal support'].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-green-400 mb-6 ml-24">Atlabb Accounting</h4>
              <div className="space-y-4 ml-24">
                {['AI-powered automation', 'Proactive strategy', 'Customized solutions', 'Cutting-edge technology', '24/7 continuous support'].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '15+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
            { number: '250+', label: 'Happy Clients', color: 'from-purple-500 to-pink-500' },
            { number: '98%', label: 'Satisfaction Rate', color: 'from-green-500 to-emerald-500' },
            { number: '24/7', label: 'Support Available', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-center backdrop-blur-md border border-white/10 transform transition-all duration-500 group-hover:scale-105`}>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Experience the Difference?</h3>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust Atlabb Accounting
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
                  Get Started Today
                </button>
              </Link>
              <Link href="/about">
                <button className="border-2 border-white/20 text-white px-10 py-4 rounded-xl font-semibold hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                  Learn Our Story
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}