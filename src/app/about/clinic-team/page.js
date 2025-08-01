'use client'
import React from 'react'
import Head from 'next/head'
import { FaUserMd, FaChild, FaBrain, FaHandsHelping, FaComments, FaClinicMedical } from 'react-icons/fa'

const ClinicTeam = () => {
  return (
    <>
      <Head>
        <title>Our Team | GrowthWayz CDC</title>
        <meta name="description" content="Meet the dedicated professionals at GrowthWayz Child Development Center" />
      </Head>

      {/* Hero with Team Photo */}
      <div className="relative min-h-[400px] flex items-center justify-center text-center bg-[#0F416D]">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/team-photo.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-5xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-white/90">Care Team</span>
          </h1>
          <p className="text-xl text-white/85 max-w-3xl mx-auto">
            Compassionate specialists dedicated to your child's development
          </p>
        </div>
      </div>

      {/* Team Stats */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 mb-16">
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "15+", label: "Specialists" },
            { value: "200+", label: "Years Combined Experience" },
            { value: "100%", label: "Licensed Professionals" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4"
              style={{ borderColor: '#0F416D' }}
            >
              <p className="text-3xl font-bold mb-2" style={{ color: '#0F416D' }}>{stat.value}</p>
              <p className="font-medium" style={{ color: '#0F416D' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team by Department */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ color: '#0F416D' }}>
            Our Specialist Teams
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUserMd className="text-3xl" />,
                title: "Behavioral Therapists",
                description: "Specialists in ABA and positive behavior support",
                count: "6 Therapists"
              },
              {
                icon: <FaChild className="text-3xl" />,
                title: "Occupational Therapists",
                description: "Experts in sensory and motor skill development",
                count: "4 Therapists"
              },
              {
                icon: <FaComments className="text-3xl" />,
                title: "Speech Pathologists",
                description: "Communication and language specialists",
                count: "3 Therapists"
              },
              {
                icon: <FaBrain className="text-3xl" />,
                title: "Developmental Psychologists",
                description: "Cognitive and emotional development experts",
                count: "2 Specialists"
              },
              {
                icon: <FaHandsHelping className="text-3xl" />,
                title: "Physical Therapists",
                description: "Movement and mobility specialists",
                count: "2 Therapists"
              },
              {
                icon: <FaClinicMedical className="text-3xl" />,
                title: "Clinical Support Staff",
                description: "Dedicated to making your experience seamless",
                count: "5 Team Members"
              }
            ].map((dept, index) => (
              <div 
                key={index}
                className="border rounded-xl p-8 hover:shadow-lg transition-all"
                style={{ borderColor: 'rgba(15,65,109,0.2)' }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                  {React.cloneElement(dept.icon, { className: "text-[#0F416D]" })}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#0F416D' }}>{dept.title}</h3>
                <p className="text-center mb-4" style={{ color: '#0F416D' }}>{dept.description}</p>
                <p className="text-center font-medium" style={{ color: '#0F416D' }}>{dept.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Spotlight */}
      <section className="py-20" style={{ backgroundColor: 'rgba(15,65,109,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ color: '#0F416D' }}>
            Meet Some of Our Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Lead Behavioral Therapist",
                bio: "BCBA with 12 years experience in pediatric behavior intervention",
                img: "https://www.shutterstock.com/image-photo/medical-concept-indian-beautiful-female-600nw-1635029716.jpg",
                specialties: ["ABA Therapy", "Social Skills", "Parent Training"]
              },
              {
                name: "Michael Rodriguez",
                role: "Occupational Therapist",
                bio: "Specializing in sensory integration and fine motor development",
                img: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
                specialties: ["Sensory Processing", "Handwriting", "Self-Care Skills"]
              },
              {
                name: "Amira Patel",
                role: "Speech-Language Pathologist",
                bio: "Focus on early language development and AAC communication",
                img: "https://media.istockphoto.com/id/1730222050/photo/photo-of-doctor-lady-smile-looking-at-camera-wear-stethoscope-white-uniform-isolate-white.jpg?s=612x612&w=0&k=20&c=KfZT1DzVMcGvHZZg4NnUhHwvOiI5xPYRe1AWvCwOqE4=",
                specialties: ["Expressive Language", "Articulation", "Social Communication"]
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0F416D] opacity-10"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#0F416D' }}>{member.name}</h3>
                  <p className="mb-4 font-medium" style={{ color: 'rgba(15,65,109,0.8)' }}>{member.role}</p>
                  <p className="mb-4" style={{ color: '#0F416D' }}>{member.bio}</p>
                  <div className="pt-4 border-t" style={{ borderColor: 'rgba(15,65,109,0.1)' }}>
                    <h4 className="font-bold mb-3" style={{ color: '#0F416D' }}>Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((spec, i) => (
                        <span 
                          key={i} 
                          className="text-sm px-3 py-1 rounded-full"
                          style={{ 
                            backgroundColor: 'rgba(15,65,109,0.1)',
                            color: '#0F416D'
                          }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#0F416D' }}>
            Our Team Culture
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] mb-8">
                <div className="absolute inset-0 bg-[#0F416D] opacity-10"></div>
                <img 
                  src="https://media.istockphoto.com/id/1141333760/photo/healthcare-professionals-during-a-meeting-at-the-hospital.jpg?s=612x612&w=0&k=20&c=k7j0mmbdKEuSzrPztNlGIyJuhiePMVICaXAhKL-AR-A=" 
                  alt="Team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="space-y-6" style={{ color: '#0F416D' }}>
                <p>
                  At GrowthWayz CDC, we've built a collaborative environment where specialists across disciplines work together to provide integrated care for your child.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                    <span><strong>Weekly case reviews</strong> ensure all therapists are aligned on each child's progress</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                    <span><strong>Continuous training</strong> keeps our team updated on the latest evidence-based practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                    <span><strong>Child-first philosophy</strong> guides every decision and interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                    <span><strong>Family-centered approach</strong> means we view parents as essential team members</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#0F416D' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Meet Your Child's Therapy Team?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss how our specialists can support your child's development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#0F416D] font-medium rounded-lg hover:bg-gray-100 transition shadow-lg">
              Book a Consultation
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#0F416D] transition">
              Meet Our Full Team
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClinicTeam