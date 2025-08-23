'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FinancialConsulting() {
  const [activeTab, setActiveTab] = useState('strategy');

  const services = [
    {
      icon: '🎯',
      title: 'Financial Strategy',
      description: 'Develop comprehensive financial roadmaps for business growth and sustainability.'
    },
    {
      icon: '📈',
      title: 'Investment Analysis',
      description: 'Evaluate investment opportunities and provide data-driven recommendations.'
    },
    {
      icon: '💰',
      title: 'Capital Planning',
      description: 'Optimize capital structure and funding strategies for maximum efficiency.'
    },
    {
      icon: '🔍',
      title: 'Risk Assessment',
      description: 'Identify and mitigate financial risks through comprehensive analysis.'
    }
  ];

  const caseStudies = [
    {
      company: 'Tech Startup',
      result: 'Secured $2M funding',
      description: 'Developed financial projections that impressed investors'
    },
    {
      company: 'Manufacturing Firm',
      result: 'Reduced costs by 25%',
      description: 'Implemented strategic cost optimization plan'
    },
    {
      company: 'Retail Chain',
      result: 'Increased profit margin by 18%',
      description: 'Restructured pricing and inventory management'
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
            <span className="text-4xl">💼</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-transparent">
              Financial Consulting
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Strategic financial guidance to drive your business growth, optimize investments, 
            and maximize profitability through expert analysis and planning.
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
              View Case Studies
            </Link>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive financial consulting services tailored to your business needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-400/50 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-300">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach to delivering exceptional financial consulting results
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your business goals and challenges' },
              { step: '02', title: 'Analysis', desc: 'Comprehensive financial assessment and research' },
              { step: '03', title: 'Strategy', desc: 'Develop tailored financial strategies and solutions' },
              { step: '04', title: 'Implementation', desc: 'Execute plans with precision and care' },
              { step: '05', title: 'Review', desc: 'Continuous monitoring and optimization' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-300">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real results from our financial consulting partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
                <div className="text-gray-300 text-2xl mb-4 font-bold">{study.result}</div>
                <h3 className="text-lg font-semibold mb-2">{study.company}</h3>
                <p className="text-gray-300">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-800/10 to-gray-700/10 rounded-2xl p-12 border border-gray-600/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Strategy?</h2>
            <p className="text-gray-300 text-xl mb-8">
              Partner with our expert consultants to drive growth and maximize profitability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-gray-700/25 transition-all"
              >
                Get Started Today
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-gray-600/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-600/10 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}