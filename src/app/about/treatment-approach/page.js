'use client'
import React from 'react'
import Head from 'next/head'
import { FaClipboardList, FaUserMd, FaChild, FaHandsHelping, FaChartLine, FaUsers } from 'react-icons/fa'

const TreatmentApproach = () => {
  return (
    <>
      <Head>
        <title>Our Treatment Approach | GrowthWayz CDC</title>
        <meta name="description" content="Discover GrowthWayz CDC's evidence-based, child-centered treatment philosophy" />
      </Head>

      {/* Hero with Process Visualization */}
      <div className="relative min-h-[400px] flex items-center justify-center text-center bg-[#0F416D]">
        <div className="absolute inset-0 opacity-10 bg-white"></div>
        <div className="relative z-10 max-w-5xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-white/90">Treatment Approach</span>
          </h1>
          <p className="text-xl text-white/85 max-w-3xl mx-auto">
            A personalized, evidence-based framework designed to help each child thrive
          </p>
        </div>
      </div>

      {/* Process Infographic */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 md:left-1/2 md:-translate-x-1/2 md:h-full md:w-4/5" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}></div>
            
            {[
              {
                step: "1",
                title: "Comprehensive Assessment",
                description: "Multi-dimensional evaluation of your child's strengths and needs"
              },
              {
                step: "2",
                title: "Personalized Plan",
                description: "Customized goals and intervention strategies"
              },
              {
                step: "3",
                title: "Therapy Sessions",
                description: "Engaging, play-based interventions"
              },
              {
                step: "4",
                title: "Progress Tracking",
                description: "Regular evaluations and plan adjustments"
              },
              {
                step: "5",
                title: "Family Training",
                description: "Empowering parents with at-home strategies"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`relative pl-16 pb-12 last:pb-0 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'}`}
              >
                <div 
                  className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white md:left-1/2 md:-translate-x-1/2"
                  style={{ backgroundColor: '#0F416D' }}
                >
                  {step.step}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all" style={{ border: '1px solid rgba(15,65,109,0.1)' }}>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0F416D' }}>{step.title}</h3>
                  <p style={{ color: '#0F416D' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20" style={{ backgroundColor: 'rgba(15,65,109,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ color: '#0F416D' }}>
            Our Therapeutic Principles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaClipboardList className="text-3xl" />,
                title: "Evidence-Based",
                description: "Using interventions proven effective through research",
                methods: ["ABA techniques", "Sensory integration", "Developmental models"]
              },
              {
                icon: <FaChild className="text-3xl" />,
                title: "Child-Centered",
                description: "Therapy tailored to each child's unique needs",
                methods: ["Play-based learning", "Interest-led activities", "Adaptive pacing"]
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: "Family Focused",
                description: "Parents as essential therapy partners",
                methods: ["Parent coaching", "Home programs", "Collaborative goal-setting"]
              },
              {
                icon: <FaUserMd className="text-3xl" />,
                title: "Multidisciplinary",
                description: "Integrated care from diverse specialists",
                methods: ["Therapist collaboration", "Holistic plans", "Team conferences"]
              },
              {
                icon: <FaHandsHelping className="text-3xl" />,
                title: "Strengths-Based",
                description: "Building on existing capabilities",
                methods: ["Positive reinforcement", "Skill scaffolding", "Success-focused"]
              },
              {
                icon: <FaChartLine className="text-3xl" />,
                title: "Data-Driven",
                description: "Objective progress measurement",
                methods: ["Regular assessments", "Outcome tracking", "Plan adjustments"]
              }
            ].map((principle, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-all h-full"
                style={{ borderTop: '4px solid #0F416D' }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full mb-6" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                  {React.cloneElement(principle.icon, { className: "text-[#0F416D]" })}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F416D' }}>{principle.title}</h3>
                <p className="mb-4" style={{ color: '#0F416D' }}>{principle.description}</p>
                <ul className="space-y-2">
                  {principle.methods.map((method, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                      <span style={{ color: '#0F416D' }}>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#0F416D' }}>
            Our Methodologies
          </h2>
          
          <div className="space-y-12">
            {[
              {
                title: "Applied Behavior Analysis (ABA)",
                description: "A scientific approach focusing on improving specific behaviors through reinforcement strategies",
                applications: [
                  "Increasing positive behaviors",
                  "Reducing harmful behaviors",
                  "Teaching new skills"
                ],
                effectiveness: "Proven effective for children with autism and developmental delays"
              },
              {
                title: "DIR/Floortime Model",
                description: "Developmental, Individual-differences, Relationship-based approach focusing on emotional development",
                applications: [
                  "Enhancing social interactions",
                  "Improving communication",
                  "Building emotional connections"
                ],
                effectiveness: "Particularly effective for children with ASD and sensory processing challenges"
              },
              {
                title: "Sensory Integration Therapy",
                description: "Helping children process and respond appropriately to sensory information",
                applications: [
                  "Addressing sensory aversions",
                  "Improving motor skills",
                  "Enhancing focus and regulation"
                ],
                effectiveness: "Shown to improve daily functioning in children with SPD and related conditions"
              }
            ].map((method, index) => (
              <div 
                key={index}
                className="border-l-4 pl-6 py-2"
                style={{ borderColor: '#0F416D' }}
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F416D' }}>{method.title}</h3>
                <p className="mb-4" style={{ color: '#0F416D' }}>{method.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-3" style={{ color: '#0F416D' }}>Common Applications:</h4>
                    <ul className="space-y-2">
                      {method.applications.map((app, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                          <span style={{ color: '#0F416D' }}>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#0F416D]/5 p-4 rounded-lg">
                    <h4 className="font-bold mb-2" style={{ color: '#0F416D' }}>Effectiveness:</h4>
                    <p style={{ color: '#0F416D' }}>{method.effectiveness}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#0F416D' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Learn More About Our Approach?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss how we can tailor our methods to your child's needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#0F416D] font-medium rounded-lg hover:bg-gray-100 transition shadow-lg">
              Book a Consultation
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#0F416D] transition">
              Download Our Brochure
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default TreatmentApproach