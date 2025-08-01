'use client'
import React from 'react'
import Head from 'next/head'
import { FaRunning, FaUserInjured, FaClinicMedical, FaRegCalendarAlt, FaChild, FaRegSmile } from 'react-icons/fa'

const Physiotherapy = () => {
  return (
    <>
      <Head>
        <title>Pediatric Physiotherapy | GrowthWayz</title>
        <meta name="description" content="Specialized physiotherapy for children's development at GrowthWayz" />
      </Head>

      {/* Diagonal Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[#0F416D] opacity-95"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)"
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Pediatric <span className="text-white/90">Physiotherapy</span>
              </h1>
              <p className="text-xl text-white/85 mb-8 max-w-lg">
                Helping children achieve their full physical potential through specialized therapeutic interventions
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  className="px-6 py-3 bg-white text-[#0F416D] font-medium rounded-lg hover:bg-gray-100 transition"
                >
                  Book Assessment
                </button>
                <button 
                  className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#0F416D] transition"
                >
                  Our Methods
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md ml-auto shadow-2xl">
                <div className="absolute inset-0 bg-[#0F416D] opacity-10"></div>
                <img 
                  src="https://www.hope-amc.com/wp-content/uploads/fly-images/5497/physical-therapy-dubai-1170x1000-c.jpg" 
                  alt="Child receiving physiotherapy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-20 -mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { number: "200+", label: "Children Helped" },
              { number: "95%", label: "Parent Satisfaction" },
              { number: "10+", label: "Specialized Therapists" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <p className="text-3xl font-bold mb-2" style={{ color: '#0F416D' }}>{stat.number}</p>
                <p className="font-medium" style={{ color: '#0F416D' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Icon Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F416D' }}>
              Our Physiotherapy Approach
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#0F416D' }}>
              Play-based therapy designed for children's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaRunning className="text-3xl" />,
                title: "Motor Skill Development",
                description: "Improving coordination, balance, and movement patterns"
              },
              { 
                icon: <FaUserInjured className="text-3xl" />,
                title: "Injury Rehabilitation",
                description: "Recovery programs for sports injuries and accidents"
              },
              { 
                icon: <FaChild className="text-3xl" />,
                title: "Developmental Support",
                description: "Early intervention for developmental delays"
              },
              { 
                icon: <FaClinicMedical className="text-3xl" />,
                title: "Post-Surgical Recovery",
                description: "Specialized post-operative rehabilitation"
              },
              { 
                icon: <FaRegSmile className="text-3xl" />,
                title: "Pain Management",
                description: "Techniques to reduce chronic pain and discomfort"
              },
              { 
                icon: <FaRegCalendarAlt className="text-3xl" />,
                title: "Lifelong Skills",
                description: "Building foundations for ongoing physical health"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="border rounded-xl p-8 hover:shadow-md transition-all"
                style={{ borderColor: 'rgba(15,65,109,0.2)' }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full mb-6" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                  {React.cloneElement(feature.icon, { className: "text-[#0F416D]" })}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F416D' }}>{feature.title}</h3>
                <p style={{ color: '#0F416D' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial + Image Split */}
      {/* <section className="py-20" style={{ backgroundColor: 'rgba(15,65,109,0.03)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
                <div className="absolute inset-0 bg-[#0F416D] opacity-10"></div>
                <img 
                  src="/images/physio-session.jpg" 
                  alt="Physiotherapy session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#0F416D' }}>
                  What Parents Say
                </h3>
                <blockquote className="mb-6 italic" style={{ color: '#0F416D' }}>
                  "The physiotherapists at GrowthWayz transformed my child's confidence in movement. Their play-based approach made therapy something my daughter actually looked forward to."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="/images/parent-avatar.jpg"
                      alt="Happy parent"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: '#0F416D' }}>Sarah K.</p>
                    <p className="text-sm" style={{ color: 'rgba(15,65,109,0.7)' }}>Mother of 6-year-old</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ color: '#0F416D' }}>
            Our Treatment Process
          </h2>
          
          <div className="space-y-12">
            {[
              {
                title: "Initial Assessment",
                description: "Comprehensive evaluation of your child's physical abilities and challenges"
              },
              {
                title: "Goal Setting",
                description: "Collaborative development of personalized treatment objectives"
              },
              {
                title: "Therapy Sessions",
                description: "Engaging, play-based interventions tailored to your child's needs"
              },
              {
                title: "Progress Tracking",
                description: "Regular evaluations to measure improvement and adjust plans"
              },
              {
                title: "Home Program",
                description: "Custom exercises and activities to reinforce progress at home"
              }
            ].map((step, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#0F416D' }}>
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0F416D' }}>{step.title}</h3>
                  <p style={{ color: '#0F416D' }}>{step.description}</p>
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
            Start Your Child's Physiotherapy Journey
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our team specializes in helping children overcome physical challenges through evidence-based, compassionate care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#0F416D] font-medium rounded-lg hover:bg-gray-100 transition">
              Book Initial Assessment
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#0F416D] transition">
              Call: (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Physiotherapy