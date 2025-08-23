'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Bookkeeping Excellence',
    description: 'Precision financial record-keeping with advanced automation and real-time reporting.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Tax Strategy & Compliance',
    description: 'Proactive tax planning and compliance solutions that maximize savings and minimize risk.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Financial Advisory',
    description: 'Strategic financial guidance to drive business growth and optimize financial performance.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Payroll Solutions',
    description: 'Streamlined payroll processing with automated tax filings and compliance management.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-orange-500 to-red-500'
  }
];

export default function InnovativeServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden ">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">FINANCIAL EXCELLENCE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary
            </span>{' '}
            Accounting Solutions
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Transforming financial management with cutting-edge technology and expert guidance
          </p>
        </div>

        {/* Interactive Service Cards - Circular Layout */}
        <div className="relative h-[600px] mb-20">
          {/* Central orb */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-2xl shadow-cyan-500/25 animate-pulse"></div>
            <div className="absolute inset-8 bg-gray-900 rounded-full"></div>
            <div className="absolute inset-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full animate-ping opacity-20"></div>
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{services[activeIndex].title}</h3>
                <p className="text-white/70 text-sm px-8">{services[activeIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Orbiting service cards */}
          {services.map((service, index) => {
            const angle = (index * 90) - 45;
            const radius = 280;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            
            return (
              <div
                key={index}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                  activeIndex === index ? 'scale-110 z-10' : 'scale-100 z-0'
                }`}
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-110 ${
                  activeIndex === index ? 'ring-4 ring-white/50' : ''
                }`}>
                  <div className="w-full h-full flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Details Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Advanced Technology</h3>
            <div className="space-y-4">
              {['AI-Powered Analytics', 'Cloud-Based Solutions', 'Real-Time Reporting', 'Automated Processes'].map((tech, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 animate-pulse"></div>
                  <span className="text-white/80">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Expert Team</h3>
            <div className="space-y-4">
              {['Certified CPAs', '15+ Years Experience', 'Industry Specialists', 'Continuous Training'].map((expert, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 animate-pulse"></div>
                  <span className="text-white/80">{expert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">Ready for Financial Transformation?</h3>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Experience the future of accounting with our innovative solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
                  Start Your Journey
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-white/20 text-white px-10 py-4 rounded-xl font-semibold hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                  Explore All Services
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}