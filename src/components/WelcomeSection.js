'use client';
import React from 'react';
import Link from 'next/link';

export default function WelcomeSection() {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2">
            <img
              src="/images/Welcome.jpg"
              alt="Child Development"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Content Section - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Welcome to GrowthWayz Child Development Center
            </h2>
            
            <h3 className="text-xl font-semibold text-primary mb-4">ABOUT US</h3>
            
            <div className="space-y-4 text-primary">
              <p className="leading-relaxed">
                Welcome to our hub of diverse services designed to support individuals facing unique challenges.
              </p>
              <p className="leading-relaxed">
                Explore a range of specialized offerings crafted to empower and uplift, tailored for those navigating life's hurdles with resilience and determination.
              </p>
            </div>

            <Link href="/about" className="inline-block mt-8">
              <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition duration-300 text-lg font-medium">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}