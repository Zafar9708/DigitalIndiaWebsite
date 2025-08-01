'use client';
import React from 'react';
import Head from 'next/head';

import { FaBookOpen, FaUserGraduate, FaChalkboardTeacher, FaHandsHelping, FaClipboardList, FaSchool } from 'react-icons/fa';

export default function SpecialEducation() {
  const primary = 'text-primary'; // Assuming 'text-primary' => #0F416D
  const primaryBg = 'bg-primary'; // Assuming 'bg-primary' => #0F416D
  const primaryBgLight = 'bg-primary/10'; // 10% opacity for backgrounds

  return (
    <>
     

      <Head>
        <title>Special Education | GrowthWayz</title>
        <meta name="description" content="Personalized special education services for children with diverse learning needs at GrowthWayz" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primaryBgLight to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-primary`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/90">
                  Special Education
                </span> Services
              </h1>
              <p className="text-lg text-primary opacity-90 mb-8 leading-relaxed">
                Empowering children with diverse learning needs through personalized education plans that celebrate their unique abilities and learning styles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Book Free Assessment
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition">
                  Learn Our Approach
                </button>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/special_education.jpg"
                  alt="Child receiving special education support"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${primary}`}>
              Our <span className={primary}>Special Education</span> Programs
            </h2>
            <p className="text-lg text-primary opacity-80 max-w-3xl mx-auto">
              Tailored learning solutions designed for diverse needs and abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBookOpen className="text-3xl text-primary" />,
                title: "Individualized Education",
                description: "Custom learning plans aligned with each child's strengths and needs"
              },
              {
                icon: <FaUserGraduate className="text-3xl text-primary" />,
                title: "Learning Differences",
                description: "Specialized support for dyslexia, dyscalculia, and other challenges"
              },
              {
                icon: <FaChalkboardTeacher className="text-3xl text-primary" />,
                title: "Academic Support",
                description: "One-on-one tutoring in core subjects at the child's pace"
              },
              {
                icon: <FaHandsHelping className="text-3xl text-primary" />,
                title: "Social Skills Development",
                description: "Building communication and interaction abilities"
              },
              {
                icon: <FaClipboardList className="text-3xl text-primary" />,
                title: "IEP Development",
                description: "Comprehensive Individualized Education Programs"
              },
              {
                icon: <FaSchool className="text-3xl text-primary" />,
                title: "School Collaboration",
                description: "Working with your child's school for consistent support"
              }
            ].map((program, index) => (
              <div 
                key={index} 
                className="bg-primaryBgLight p-8 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-center">
                  <div className="bg-white p-5 rounded-full shadow-sm">
                    {program.icon}
                  </div>
                </div>
                <h3 className={`${primary} text-xl font-semibold text-center mt-5 mb-3`}>
                  {program.title}
                </h3>
                <p className={`${primary} text-center opacity-80`}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 bg-primaryBgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${primary}`}>
                Children We <span className={primary}>Support</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Autism Spectrum",
                  "ADHD/ADD",
                  "Dyslexia",
                  "Dyscalculia",
                  "Speech Delays",
                  "Sensory Issues",
                  "Learning Disabilities",
                  "Developmental Delays"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center bg-primary/20`}>
                        <div className={`h-2 w-2 rounded-full bg-primary`}></div>
                      </div>
                    </div>
                    <p className={`${primary} ml-3`}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className={`${primary} text-2xl font-bold mb-4`}>Our Assessment Process</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Initial Consultation",
                    description: "Discuss your child's educational history and challenges"
                  },
                  {
                    title: "Comprehensive Evaluation",
                    description: "Standardized testing and skill assessments"
                  },
                  {
                    title: "Personalized Plan",
                    description: "Development of customized learning strategies"
                  },
                  {
                    title: "Ongoing Support",
                    description: "Regular progress reviews and plan adjustments"
                  }
                ].map((step, idx) => (
                  <div key={idx} className="flex">
                    <div className={`flex-shrink-0 mr-4 rounded-full flex items-center justify-center h-10 w-10 bg-primary/20 font-bold text-primary`}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className={`${primary} text-lg font-semibold`}>{step.title}</h4>
                      <p className={`${primary} opacity-80`}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full py-3 px-6 bg-primary text-white rounded-lg transition hover:bg-primary/90">
                Begin Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${primary}`}>
            Our <span className={primary}>Teaching</span> Philosophy
          </h2>
          <div className={`text-primary max-w-5xl mx-auto leading-relaxed text-lg space-y-4 opacity-80`}>
            <p>
              Evidence-based methods that make learning accessible and enjoyable
            </p>
            <p>
              Multisensory learning approach engaged through visual, auditory, and kinesthetic pathways.
            </p>
            <p>
              Strength-based tactics focusing on child’s unique abilities.
            </p>
            <p>
              Structured flexibility balancing routines with individualized accommodations.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call-To-Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Unlock Your Child&apos;s Learning Potential
          </h2>
          <p className="text-yellow-400 mb-8 text-xl max-w-3xl mx-auto">
            Our special education experts are ready to help your child succeed academically and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg shadow hover:bg-gray-100 transition">
              Enroll Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

   
    </>
  );
}
