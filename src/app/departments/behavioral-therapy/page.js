'use client'
import React from 'react'
import Head from 'next/head'
import { FaBrain, FaChartLine, FaUsers, FaClipboardCheck, FaBalanceScale, FaSmile } from 'react-icons/fa'

const BehavioralTherapy = () => {
  return (
    <>
      <Head>
        <title>Behavioral Therapy | GrowthWayz</title>
        <meta name="description" content="Evidence-based behavioral therapy for children at GrowthWayz" />
      </Head>

      {/* Gradient Hero with Abstract Shapes */}
      <div className="relative overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(15,65,109,0.9) 0%, rgba(15,65,109,0.7) 100%)"
            }}
          ></div>
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
              transform: "translate(30%, -30%)"
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Behavioral <span className="text-white/90">Therapy</span>
              </h1>
              <p className="text-xl text-white/85 mb-8">
                Positive behavior support strategies to help children thrive emotionally and socially
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  className="px-6 py-3 bg-white text-[#0F416D] font-medium rounded-lg hover:bg-gray-100 transition shadow-md"
                >
                  Schedule Assessment
                </button>
                <button 
                  className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#0F416D] transition"
                >
                  Our Methods
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full aspect-square max-w-md ml-auto">
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://www.shutterstock.com/image-photo/child-psychologists-office-kid-refuses-600nw-2366266423.jpg" 
                    alt="Child in behavioral therapy session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data-Driven Stats */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 mb-20">
        <div className="grid grid-cols-3 gap-6">
          {[
            { value: "89%", label: "Improvement Rate", description: "In target behaviors" },
            { value: "4-6", label: "Weeks", description: "To see initial progress" },
            { value: "1:1", label: "Therapist Ratio", description: "Personalized sessions" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center border-t-4"
              style={{ borderColor: '#0F416D' }}
            >
              <p className="text-3xl font-bold mb-2" style={{ color: '#0F416D' }}>{stat.value}</p>
              <p className="font-bold mb-1" style={{ color: '#0F416D' }}>{stat.label}</p>
              <p className="text-sm" style={{ color: 'rgba(15,65,109,0.7)' }}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Approach Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F416D' }}>
              Our Behavioral Framework
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#0F416D' }}>
              Evidence-based techniques tailored to each child's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaBrain className="text-3xl" />,
                title: "Cognitive Behavioral",
                description: "Identifying and reshaping thought patterns",
                methods: ["Thought mapping", "Coping skills", "Emotion regulation"]
              },
              { 
                icon: <FaChartLine className="text-3xl" />,
                title: "ABA Techniques",
                description: "Applied Behavior Analysis strategies",
                methods: ["Positive reinforcement", "Task analysis", "Data tracking"]
              },
              { 
                icon: <FaUsers className="text-3xl" />,
                title: "Social Skills",
                description: "Building positive interactions",
                methods: ["Role playing", "Peer modeling", "Group therapy"]
              },
              { 
                icon: <FaClipboardCheck className="text-3xl" />,
                title: "Behavior Plans",
                description: "Structured intervention strategies",
                methods: ["Goal setting", "Progress monitoring", "Parent training"]
              },
              { 
                icon: <FaBalanceScale className="text-3xl" />,
                title: "Emotional Regulation",
                description: "Managing feelings effectively",
                methods: ["Mindfulness", "Sensory strategies", "Self-monitoring"]
              },
              { 
                icon: <FaSmile className="text-3xl" />,
                title: "Positive Parenting",
                description: "Family-centered support",
                methods: ["Consistency training", "Communication skills", "Home plans"]
              }
            ].map((approach, index) => (
              <div 
                key={index}
                className="border rounded-xl p-6 hover:shadow-lg transition-all h-full"
                style={{ borderColor: 'rgba(15,65,109,0.2)' }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                  {React.cloneElement(approach.icon, { className: "text-[#0F416D]" })}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0F416D' }}>{approach.title}</h3>
                <p className="mb-4" style={{ color: '#0F416D' }}>{approach.description}</p>
                <ul className="space-y-2">
                  {approach.methods.map((method, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full mt-2 mr-2" style={{ backgroundColor: '#0F416D' }}></span>
                      <span style={{ color: '#0F416D' }}>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behavior Spectrum Visual */}
      <section className="py-20" style={{ backgroundColor: 'rgba(15,65,109,0.03)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#0F416D' }}>
              Understanding Behavior Patterns
            </h2>
            
            <div className="relative h-4 rounded-full mb-12" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
              <div className="absolute inset-0 flex">
                {['Triggers', 'Behavior', 'Consequence', 'Intervention'].map((label, i) => (
                  <div key={i} className="flex-1 relative">
                    <div 
                      className="absolute -top-8 left-0 right-0 text-center font-medium"
                      style={{ color: '#0F416D' }}
                    >
                      {label}
                    </div>
                    <div 
                      className="absolute -bottom-8 left-0 right-0 text-center text-sm"
                      style={{ color: 'rgba(15,65,109,0.7)' }}
                    >
                      {[
                        "Environmental factors",
                        "Observable actions",
                        "Natural outcomes",
                        "Therapist strategies"
                      ][i]}
                    </div>
                  </div>
                ))}
              </div>
              <div 
                className="absolute h-full rounded-full"
                style={{ 
                  width: '100%',
                  background: "linear-gradient(to right, rgba(15,65,109,0.2), #0F416D)"
                }}
              ></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#0F416D' }}>Common Challenges Addressed</h3>
                <ul className="space-y-3">
                  {[
                    "Attention difficulties (ADHD)",
                    "Anxiety and fears",
                    "Aggressive behaviors",
                    "Social withdrawal",
                    "School refusal",
                    "Defiance and tantrums"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                      <span style={{ color: '#0F416D' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#0F416D' }}>Our Assessment Tools</h3>
                <div className="space-y-4">
                  {[
                    { name: "Functional Behavior Assessment", duration: "2-3 sessions" },
                    { name: "Developmental Screening", duration: "Initial consultation" },
                    { name: "Parent/Teacher Reports", duration: "Ongoing" },
                    { name: "Direct Observation", duration: "1-2 sessions" }
                  ].map((tool, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(15,65,109,0.1)' }}>
                      <span style={{ color: '#0F416D' }}>{tool.name}</span>
                      <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(15,65,109,0.1)', color: '#0F416D' }}>
                        {tool.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#0F416D' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Child's Positive Behavior Journey
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our behavioral therapists create customized plans to help children develop emotional regulation and positive social skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#0F416D] font-medium rounded-lg hover:bg-gray-100 transition shadow-lg">
              Book Consultation
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#0F416D] transition">
              Download Parent Guide
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default BehavioralTherapy