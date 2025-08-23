'use client';
import React, { useState } from 'react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Atlabb Accounting transformed our financial operations. Their strategic insights helped us grow revenue by 40% in the first year.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      company: "Global Ventures",
      role: "Finance Director",
      content: "The team's expertise in tax optimization saved us over $50,000 in the first quarter. Exceptional service!",
      avatar: "👨‍💼"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Solutions",
      role: "Business Owner",
      content: "24/7 support and proactive advice make Atlabb an invaluable partner for our growing business.",
      avatar: "👩‍🎨"
    }
  ];

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">CLIENT SUCCESS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover why businesses trust Atlabb Accounting for their financial success
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-md rounded-3xl p-8 border transition-all duration-500 cursor-pointer ${
                activeTestimonial === index 
                  ? 'border-green-400/50 scale-105' 
                  : 'border-white/10 hover:border-green-400/30'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="text-4xl mb-6">{testimonial.avatar}</div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-green-400">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '98%', label: 'Client Retention' },
            { number: '40%', label: 'Average Growth' },
            { number: '24/7', label: 'Support Available' },
            { number: '250+', label: 'Businesses Served' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}