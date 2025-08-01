'use client';
import React from 'react';

const primaryColor = '#0F416D';
const primaryDark = '#0b2e4b';
const whiteColor = '#FFFFFF';

export default function ServicesSection() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-20" data-aos="zoom-in-up">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryColor }}>
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized therapies and personalized approaches for your child's development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Therapy Services Card */}
          <div 
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary"
            data-aos="zoom-in-up"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: `${primaryColor}20` }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={primaryColor}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: primaryColor }}>
                Therapy Services
              </h2>
            </div>
            
            <ul className="text-gray-700 leading-relaxed space-y-4 mb-8">
              {[ 
                'Early childhood intervention programs',
                'Speech and language therapy',
                'Occupational therapy for sensory integration',
                'Behavioral therapy and social skills training',
                'Individualized education plans'
              ].map((service, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={primaryColor}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800">{service}</span>
                </li>
              ))}
            </ul>
            
            <button
              className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
              style={{ backgroundColor: primaryColor }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = primaryDark}
              onMouseOut={e => e.currentTarget.style.backgroundColor = primaryColor}
            >
              Learn About Our Therapies
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Approach Card */}
          <div 
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary"
            data-aos="zoom-in-up"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: `${primaryColor}20` }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={primaryColor}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: primaryColor }}>
                Our Unique Approach
              </h2>
            </div>
            
            <div className="space-y-6 mb-8">
              {[
                {
                  title: 'Child-Centered Care',
                  desc: "Programs tailored to each child's unique needs and abilities",
                  iconPath: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                },
                {
                  title: 'Evidence-Based Methods',
                  desc: "Using scientifically validated techniques for maximum effectiveness",
                  iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                {
                  title: 'Family Involvement',
                  desc: 'Engaging parents in the therapeutic process for lasting results',
                  iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                }
              ].map(({ title, desc, iconPath }, idx) => (
                <div key={idx} className="flex items-start group">
                  <div
                    className="p-3 rounded-lg mr-4 group-hover:bg-primary/10 transition duration-300"
                    style={{ backgroundColor: `${primaryColor}10` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={primaryColor}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
              style={{ backgroundColor: primaryColor }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = primaryDark}
              onMouseOut={e => e.currentTarget.style.backgroundColor = primaryColor}
            >
              Our Treatment Philosophy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}