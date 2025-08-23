'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'blog', name: 'Blog Posts' },
    { id: 'guide', name: 'Guides' },
    { id: 'webinar', name: 'Webinars' },
    { id: 'tool', name: 'Tools' },
    { id: 'case-study', name: 'Case Studies' }
  ];

  const resources = [
    {
      id: 1,
      title: "10 Tax Deductions Every Small Business Should Know",
      category: "blog",
      description: "Discover the most commonly overlooked tax deductions that can save your business thousands of dollars each year.",
      image: "/resources/tax-deductions.jpg",
      readTime: "5 min read",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "The Complete Guide to Financial Planning for Startups",
      category: "guide",
      description: "A comprehensive guide to building a solid financial foundation for your startup business.",
      image: "/resources/startup-guide.jpg",
      readTime: "15 min read",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Webinar: AI in Modern Accounting",
      category: "webinar",
      description: "Learn how artificial intelligence is transforming the accounting industry and how you can leverage it.",
      image: "/resources/ai-webinar.jpg",
      readTime: "60 min",
      date: "2024-01-08"
    },
    {
      id: 4,
      title: "Free Cash Flow Calculator",
      category: "tool",
      description: "Interactive tool to calculate and analyze your business's cash flow performance.",
      image: "/resources/calculator-tool.jpg",
      readTime: "Interactive",
      date: "2024-01-05"
    },
    {
      id: 5,
      title: "How We Helped TechCo Save $50k in Taxes",
      category: "case-study",
      description: "Case study showing our strategic approach to tax optimization for a technology company.",
      image: "/resources/case-study.jpg",
      readTime: "8 min read",
      date: "2024-01-03"
    },
    {
      id: 6,
      title: "Understanding Financial Statements: A Beginner's Guide",
      category: "guide",
      description: "Learn how to read and interpret balance sheets, income statements, and cash flow statements.",
      image: "/resources/financial-statements.jpg",
      readTime: "12 min read",
      date: "2023-12-28"
    },
    {
      id: 7,
      title: "The Future of Remote Accounting",
      category: "blog",
      description: "Exploring the trends and technologies shaping the future of remote accounting services.",
      image: "/resources/remote-accounting.jpg",
      readTime: "6 min read",
      date: "2023-12-22"
    },
    {
      id: 8,
      title: "Budget Planning Template",
      category: "tool",
      description: "Download our free Excel template for comprehensive business budget planning.",
      image: "/resources/budget-template.jpg",
      readTime: "Template",
      date: "2023-12-18"
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Resources Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Discover expert insights, tools, and guides to help you master your business finances 
            and make informed decisions.
          </p>
        </div>
      </header>

      {/* Category Filter */}
      <section className="py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <h2 className="text-3xl font-bold mt-4 mb-4">2024 Tax Planning Strategy Guide</h2>
                <p className="text-gray-300 mb-6">
                  Get ahead of the tax season with our comprehensive guide to tax planning strategies 
                  for businesses of all sizes. Learn how to maximize deductions and minimize liabilities.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-cyan-400">20 min read</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Updated January 2024</span>
                </div>
                <Link
                  href="/resources/tax-planning-guide"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  Read Guide
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="relative h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl">📊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {activeCategory === 'all' ? 'All Resources' : categories.find(c => c.id === activeCategory)?.name}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="relative h-48 mb-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-4xl group-hover:scale-110 transition-transform">
                    {resource.category === 'blog' && '📝'}
                    {resource.category === 'guide' && '📚'}
                    {resource.category === 'webinar' && '🎥'}
                    {resource.category === 'tool' && '🛠️'}
                    {resource.category === 'case-study' && '📊'}
                  </span>
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{resource.readTime}</span>
                  <span>{new Date(resource.date).toLocaleDateString()}</span>
                </div>

                <Link
                  href={`/resources/${resource.id}`}
                  className="inline-flex items-center text-cyan-400 mt-4 hover:text-cyan-300 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-300 text-xl mb-8">
              Get the latest financial insights, tips, and resources delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Personalized Advice?</h2>
            <p className="text-gray-300 text-xl mb-8">
              Our team of expert accountants is ready to help you with your specific financial challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 hover:bg-white/10 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}