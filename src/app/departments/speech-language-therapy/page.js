'use client'
import React from 'react'
import Head from 'next/head'
import { FaComment, FaLanguage, FaUserFriends, FaBook, FaAssistiveListeningSystems, FaSmile } from 'react-icons/fa'

const SpeechLanguageTherapy = () => {
  return (
    <>
      <Head>
        <title>Speech & Language Therapy | GrowthWayz</title>
        <meta name="description" content="Specialized speech and language therapy for children at GrowthWayz" />
      </Head>

      {/* Curved Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0F416D]"></div>
        <div 
          className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 text-center"
          style={{
            background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 30%)"
          }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Speech & Language <span className="text-white/90">Therapy</span>
          </h1>
          <p className="text-xl text-white/85 mb-8 max-w-3xl mx-auto">
            Unlocking communication potential through specialized pediatric therapy
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className="px-8 py-3 bg-white text-[#0F416D] font-medium rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              Schedule Evaluation
            </button>
            <button 
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#0F416D] transition"
            >
              Learn Our Methods
            </button>
          </div>
        </div>
        <div 
          className="relative z-0 h-16 md:h-24 w-full"
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: '50% 60%',
            borderTopRightRadius: '50% 60%',
            transform: 'translateY(1px)'
          }}
        ></div>
      </div>

      {/* Pill-shaped Stats */}
      <div className="max-w-5xl mx-auto px-6 -mt-8 mb-16">
        <div className="grid grid-cols-3 gap-4">
          {[
            { number: "12+", label: "Therapy Areas" },
            { number: "98%", label: "Improvement Rate" },
            { number: "500+", label: "Children Helped" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-full shadow-md text-center border border-[#0F416D]/10"
            >
              <p className="text-2xl font-bold mb-1" style={{ color: '#0F416D' }}>{stat.number}</p>
              <p className="text-sm font-medium" style={{ color: '#0F416D' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Speech Bubble Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F416D' }}>
              Our Therapy Focus Areas
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#0F416D' }}>
              Comprehensive support for all aspects of communication development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaComment className="text-2xl" />,
                title: "Expressive Language",
                description: "Helping children express thoughts and ideas"
              },
              { 
                icon: <FaLanguage className="text-2xl" />,
                title: "Receptive Language",
                description: "Improving understanding of spoken language"
              },
              { 
                icon: <FaUserFriends className="text-2xl" />,
                title: "Social Communication",
                description: "Developing conversation and interaction skills"
              },
              { 
                icon: <FaBook className="text-2xl" />,
                title: "Articulation",
                description: "Clear speech sound production"
              },
              { 
                icon: <FaAssistiveListeningSystems className="text-2xl" />,
                title: "Auditory Processing",
                description: "Strengthening listening and comprehension"
              },
              { 
                icon: <FaSmile className="text-2xl" />,
                title: "Fluency",
                description: "Support for stuttering and smooth speech"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="relative p-8 rounded-2xl hover:shadow-md transition-all"
                style={{ 
                  backgroundColor: 'rgba(15,65,109,0.03)',
                  border: '1px solid rgba(15,65,109,0.1)'
                }}
              >
                <div 
                  className="absolute -top-4 left-6 w-8 h-8 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: '#0F416D' }}
                >
                  {React.cloneElement(feature.icon, { className: "text-white" })}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4" style={{ color: '#0F416D' }}>{feature.title}</h3>
                <p style={{ color: '#0F416D' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      {/* <section className="py-20" style={{ backgroundColor: 'rgba(15,65,109,0.05)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-6 border-4" style={{ borderColor: 'rgba(15,65,109,0.1)' }}>
                <img 
                  src="/images/parent-avatar-2.jpg"
                  alt="Happy parent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold" style={{ color: '#0F416D' }}>Michael R.</p>
                <p className="text-sm" style={{ color: 'rgba(15,65,109,0.7)' }}>Father of 5-year-old</p>
              </div>
            </div>
            <blockquote className="text-xl italic mb-6" style={{ color: '#0F416D' }}>
              "After just three months of therapy at GrowthWayz, our son's vocabulary exploded. The therapists made every session feel like play while achieving remarkable progress."
            </blockquote>
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <button 
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-[#0F416D]' : 'bg-[#0F416D]/30'}`}
                  aria-label={`Testimonial ${i+1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Age-Specific Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ color: '#0F416D' }}>
            Age-Specific Programs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                age: "0-3 Years",
                title: "Early Intervention",
                description: "Supporting early communication milestones",
                icon: "👶"
              },
              {
                age: "4-6 Years",
                title: "Preschool Prep",
                description: "Building school-ready communication skills",
                icon: "🧒"
              },
              {
                age: "7-12 Years",
                title: "School-Age Support",
                description: "Academic and social communication development",
                icon: "👦"
              }
            ].map((program, index) => (
              <div 
                key={index}
                className="border rounded-xl p-8 text-center hover:shadow-md transition-all"
                style={{ borderColor: 'rgba(15,65,109,0.2)' }}
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <p className="font-bold mb-1" style={{ color: '#0F416D' }}>{program.age}</p>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F416D' }}>{program.title}</h3>
                <p style={{ color: '#0F416D' }}>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#0F416D' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Help Your Child Find Their Voice
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our speech-language pathologists create personalized plans to help children communicate with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#0F416D] font-medium rounded-full hover:bg-gray-100 transition shadow-lg">
              Book Consultation
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#0F416D] transition">
              View Therapy Plans
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default SpeechLanguageTherapy