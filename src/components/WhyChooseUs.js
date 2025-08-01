'use client';
import React from 'react';

const primaryColor = '#0F416D';
const whiteColor = '#FFFFFF';

export default function WhyChooseUs() {
  return (
    <div className="py-16 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }} data-aos="zoom-in-up">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="zoom-in-up">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: primaryColor }}
          >
            Our Specialized Programs
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: primaryColor, opacity: 0.8 }}
          >
            Tailored interventions designed to support your child's unique developmental journey
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Program 1 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            data-aos="zoom-in-up"
            style={{ border: `1px solid ${primaryColor}33` }} // light border with opacity
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/2205514687/photo/physical-therapist-helps-a-young-girl-develop-her-motor-skills.jpg?s=612x612&w=0&k=20&c=DL6Ip9mNFAlHnl7j10w4S5KmqAB9Bh0TI6NKxWRp2SY="
                alt="Early Intervention Program"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: primaryColor }}
              >
                Early Intervention
              </h3>
              <p className="text-gray-700 mb-4">
                For children 0-3 years showing developmental delays, with play-based therapies to boost milestones.
              </p>
              <button
                className="font-medium transition"
                style={{ color: primaryColor }}
                onMouseOver={e => (e.currentTarget.style.color = '#06253d')}
                onMouseOut={e => (e.currentTarget.style.color = primaryColor)}
              >
                Learn More →
              </button>
            </div>
          </div>

          {/* Program 2 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            data-aos="zoom-in-up"
            style={{ border: `1px solid ${primaryColor}33` }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://lifeway.life/wp-content/uploads/2020/12/speech-therapy-in-ajman.jpg"
                alt="Speech & Language Therapy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: primaryColor }}
              >
                Speech & Language
              </h3>
              <p className="text-gray-700 mb-4">
                Customized programs for articulation, language comprehension, and social communication skills.
              </p>
              <button
                className="font-medium transition"
                style={{ color: primaryColor }}
                onMouseOver={e => (e.currentTarget.style.color = '#06253d')}
                onMouseOut={e => (e.currentTarget.style.color = primaryColor)}
              >
                Learn More →
              </button>
            </div>
          </div>

          {/* Program 3 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            data-aos="zoom-in-up"
            style={{ border: `1px solid ${primaryColor}33` }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1130450506/photo/toddler-girl-in-child-occupational-therapy-session-doing-sensory-playful-exercises-with-her.jpg?s=612x612&w=0&k=20&c=GdJYVjiEiGaMmFMt-4m4_pqjwGO6JV1En-UJmZ0awNo="
                alt="Sensory Integration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: primaryColor }}
              >
                Sensory Integration
              </h3>
              <p className="text-gray-700 mb-4">
                Helping children process sensory information effectively through specialized OT techniques.
              </p>
              <button
                className="font-medium transition"
                style={{ color: primaryColor }}
                onMouseOver={e => (e.currentTarget.style.color = '#06253d')}
                onMouseOut={e => (e.currentTarget.style.color = primaryColor)}
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
       <div className="text-center mt-12" data-aos="zoom-in-up">
  <button
    className="font-bold px-8 py-3 rounded-full text-lg shadow-lg transition-all duration-300
               bg-primary text-white hover:bg-primary-dark"
    style={{
      filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))',
    }}
  >
    View All Programs
  </button>
</div>
      </div>
    </div>
  );
}
