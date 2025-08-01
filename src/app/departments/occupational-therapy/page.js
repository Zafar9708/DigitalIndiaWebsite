'use client'
import React from 'react'
import Head from 'next/head'
import { FaHandsHelping, FaChild, FaPuzzlePiece, FaPenAlt, FaUtensils, FaLaugh,FaBookOpen ,FaVideo,FaQuestionCircle } from 'react-icons/fa'

const OccupationalTherapy = () => {
  return (
    <>
      <Head>
        <title>Pediatric Occupational Therapy | GrowthWayz</title>
        <meta name="description" content="Specialized occupational therapy for children's development at GrowthWayz" />
      </Head>

      {/* Geometric Hero Section */}
      <div className="relative overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[#0F416D]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 60% 100%, 0 80%)"
            }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-full h-1/3 bg-white"
            style={{
              clipPath: "polygon(0 30%, 60% 0, 100% 30%, 100% 100%, 0 100%)"
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Occupational <span className="text-white/90">Therapy</span>
              </h1>
              <p className="text-xl text-white/85 mb-8">
                Helping children develop essential skills for daily life through therapeutic play
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  className="px-6 py-3 bg-white text-[#0F416D] font-medium rounded-lg hover:bg-gray-100 transition shadow-md"
                >
                  Schedule Evaluation
                </button>
                <button 
                  className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#0F416D] transition"
                >
                  Learn About OT
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full aspect-square max-w-md ml-auto">
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[#0F416D] opacity-10"></div>
                  <img 
                    src="https://occupationaltherapy.com.au/wp-content/uploads/2023/05/Image-for-Art-of-Play-scaled.jpeg" 
                    alt="Child in occupational therapy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hexagonal Stats */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 mb-20">
        <div className="grid grid-cols-3 gap-4">
          {[
            { number: "18+", label: "Life Skills" },
            { number: "92%", label: "Success Rate" },
            { number: "0-12", label: "Age Range" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="relative bg-white p-4 shadow-lg text-center"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <p className="text-2xl font-bold mb-1" style={{ color: '#0F416D' }}>{stat.number}</p>
              <p className="text-sm font-medium" style={{ color: '#0F416D' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Development Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F416D' }}>
              Skills We Develop
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#0F416D' }}>
              Building foundations for independence and confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaHandsHelping className="text-3xl" />,
                title: "Fine Motor Skills",
                description: "Precision hand movements for writing, buttoning, and tool use"
              },
              { 
                icon: <FaChild className="text-3xl" />,
                title: "Sensory Processing",
                description: "Helping children interpret and respond to sensory input"
              },
              { 
                icon: <FaPuzzlePiece className="text-3xl" />,
                title: "Visual Perception",
                description: "Improving ability to interpret and organize visual information"
              },
              { 
                icon: <FaPenAlt className="text-3xl" />,
                title: "Handwriting",
                description: "Developing legible, efficient writing skills"
              },
              { 
                icon: <FaUtensils className="text-3xl" />,
                title: "Self-Care",
                description: "Dressing, feeding, and personal hygiene independence"
              },
              { 
                icon: <FaLaugh className="text-3xl" />,
                title: "Social Skills",
                description: "Play skills and peer interaction development"
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl hover:shadow-lg transition-all"
                style={{ 
                  backgroundColor: 'rgba(15,65,109,0.03)',
                  borderTop: '4px solid #0F416D'
                }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full mb-6" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                  {React.cloneElement(skill.icon, { className: "text-[#0F416D]" })}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F416D' }}>{skill.title}</h3>
                <p style={{ color: '#0F416D' }}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20" style={{ backgroundColor: 'rgba(15,65,109,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#0F416D' }}>
            Parent Resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBookOpen className="text-3xl" />,
                title: "Developmental Milestones",
                content: "Learn about typical developmental progressions and when to seek support"
              },
              {
                icon: <FaVideo className="text-3xl" />,
                title: "Therapy At Home",
                content: "Video library of activities to reinforce skills between sessions"
              },
              {
                icon: <FaQuestionCircle className="text-3xl" />,
                title: "FAQ Guide",
                content: "Answers to common questions about pediatric OT processes"
              }
            ].map((resource, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
                style={{ borderTop: '4px solid #0F416D' }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6" 
                     style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                  {React.cloneElement(resource.icon, { className: "text-[#0F416D]" })}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#0F416D' }}>
                  {resource.title}
                </h3>
                <p style={{ color: '#0F416D' }}>{resource.content}</p>
                <button 
                  className="mt-6 px-6 py-2 rounded-lg font-medium"
                  style={{ 
                    backgroundColor: 'rgba(15,65,109,0.1)',
                    color: '#0F416D'
                  }}
                >
                  Explore
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#0F416D' }}>
              Sign Up for Our Parent Newsletter
            </h3>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border"
                style={{ borderColor: 'rgba(15,65,109,0.3)' }}
              />
              <button 
                className="px-6 py-3 rounded-lg font-medium text-white"
                style={{ backgroundColor: '#0F416D' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ color: '#0F416D' }}>
            Our Therapeutic Approach
          </h2>
          
          <div className="space-y-12">
            {[
              {
                title: "Play-Based Therapy",
                description: "Using games and fun activities to achieve therapeutic goals"
              },
              {
                title: "Sensory Integration",
                description: "Helping children process and respond to sensory information"
              },
              {
                title: "Environmental Adaptation",
                description: "Modifying surroundings to support skill development"
              },
              {
                title: "Family Collaboration",
                description: "Training parents to reinforce skills at home"
              }
            ].map((approach, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#0F416D' }}>
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0F416D' }}>{approach.title}</h3>
                  <p style={{ color: '#0F416D' }}>{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#0F416D' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Help Your Child Thrive Daily
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our occupational therapists create personalized plans to help children master life's everyday challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#0F416D] font-medium rounded-lg hover:bg-gray-100 transition shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#0F416D] transition">
              Meet Our Therapists
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default OccupationalTherapy