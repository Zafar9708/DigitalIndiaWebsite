'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ServiceTemplate({ 
  title, 
  description, 
  features, 
  benefits, 
  process, 
  pricing,
  icon 
}) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">{icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            {description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all"
            >
              Get Started Today
            </Link>
            <Link 
              href="/pricing" 
              className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </header>

      {/* Content Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap border-b border-gray-700 mb-12 justify-center">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Features' },
              { id: 'benefits', label: 'Benefits' },
              { id: 'process', label: 'Our Process' },
              { id: 'pricing', label: 'Pricing' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-semibold rounded-t-lg transition-all ${
                  activeTab === tab.id 
                    ? 'bg-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Comprehensive {title}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Our {title} service is designed to provide your business with expert financial 
                    management and strategic guidance. We combine technical expertise with industry 
                    knowledge to deliver tailored solutions that address your unique challenges.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Whether you're a startup looking to establish solid financial foundations or 
                    an established business seeking to optimize your operations, our team of 
                    certified professionals is here to help you succeed.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-12 rounded-2xl border border-cyan-500/20 flex items-center justify-center">
                  <span className="text-8xl">{icon}</span>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/50">
                      <h3 className="text-xl font-semibold mb-3 text-cyan-400">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div>
                <h2 className="text-3xl font-bold mb-8">Business Benefits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                      <div className="text-4xl mb-4">{benefit.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold mb-8">Our Process</h2>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
                  <div className="space-y-12 pl-16">
                    {process.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-8 top-0 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
                        <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/50">
                          <h3 className="text-xl font-semibold mb-3 text-cyan-400">Step {index + 1}: {step.title}</h3>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div>
                <h2 className="text-3xl font-bold mb-8">Pricing Options</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {pricing.map((plan, index) => (
                    <div key={index} className={`bg-gray-700/30 p-8 rounded-xl border ${
                      plan.popular ? 'border-cyan-500/50' : 'border-gray-600/50'
                    }`}>
                      {plan.popular && (
                        <div className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                          Most Popular
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                      <div className="text-3xl font-bold text-cyan-400 mb-4">{plan.price}</div>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                      >
                        Get Started
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started with {title}?</h2>
            <p className="text-gray-300 text-xl mb-8">
              Join hundreds of businesses that trust Atlabb Accounting with their {title} needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 hover:bg-white/10 transition-all"
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