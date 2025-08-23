'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function FinancialInsightsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const insights = [
    {
      title: "Tax Optimization Strategies for 2024",
      excerpt: "Discover the latest tax saving strategies and compliance updates for the upcoming fiscal year.",
      category: "tax",
      readTime: "5 min read",
      image: "📊",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Driven Financial Forecasting",
      excerpt: "How artificial intelligence is revolutionizing business forecasting and financial planning.",
      category: "technology",
      readTime: "7 min read",
      image: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Growth Funding Strategies",
      excerpt: "Comprehensive guide to securing capital and managing cash flow for business expansion.",
      category: "growth",
      readTime: "6 min read",
      image: "📈",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain in Accounting",
      excerpt: "Exploring the transformative impact of blockchain technology on modern accounting practices.",
      category: "technology",
      readTime: "8 min read",
      image: "🔗",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Quarterly Compliance Checklist",
      excerpt: "Essential compliance tasks every business should complete each quarter to avoid penalties.",
      category: "compliance",
      readTime: "4 min read",
      image: "✅",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Remote Workforce Accounting",
      excerpt: "Best practices for managing finances and payroll in distributed team environments.",
      category: "operations",
      readTime: "5 min read",
      image: "🏠",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Insights', count: insights.length },
    { id: 'tax', name: 'Tax Strategies', count: insights.filter(i => i.category === 'tax').length },
    { id: 'technology', name: 'Technology', count: insights.filter(i => i.category === 'technology').length },
    { id: 'growth', name: 'Business Growth', count: insights.filter(i => i.category === 'growth').length },
    { id: 'compliance', name: 'Compliance', count: insights.filter(i => i.category === 'compliance').length }
  ];

  const filteredInsights = activeCategory === 'all' 
    ? insights 
    : insights.filter(insight => insight.category === activeCategory);

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">EXPERT INSIGHTS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Financial <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Insights</span> & Resources
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert analysis, trends, and strategies to help your business thrive financially
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInsights.map((insight, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105"
            >
              {/* Insight Header */}
              <div className={`bg-gradient-to-r ${insight.color} p-6`}>
                <div className="text-4xl mb-4">{insight.image}</div>
                <div className="text-cyan-100 text-sm font-medium uppercase tracking-wide">
                  {insight.readTime}
                </div>
              </div>

              {/* Insight Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {insight.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {insight.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-400">
                    {insight.category}
                  </span>
                  <Link href="/insights" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '50+', label: 'Expert Articles' },
            { number: '10K+', label: 'Monthly Readers' },
            { number: '95%', label: 'Reader Satisfaction' },
            { number: '24/7', label: 'Resource Access' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">Stay Updated with Expert Insights</h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest financial strategies and industry updates
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              No spam. Unsubscribe anytime. Read our <a href="#" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}