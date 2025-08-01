'use client'
import React from 'react'
import Head from 'next/head'
import { FaBrain, FaChild, FaClinicMedical, FaUserMd, FaChartLine, FaHandHoldingHeart } from 'react-icons/fa'

const PediatricNeurology = () => {
  return (
    <>
      <Head>
        <title>Pediatric Neurology | GrowthWayz</title>
        <meta name="description" content="Specialized neurological care for children's development at GrowthWayz" />
      </Head>

      {/* Minimalist Hero */}
      <div className="relative h-[80vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-[#0F416D] opacity-90"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(15,65,109,0.9) 0%, rgba(15,65,109,0.7) 100%)"
          }}
        >
          <div className="absolute inset-0 opacity-10 bg-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pediatric <span className="border-b-4 border-white">Neurology</span>
            </h1>
            <p className="text-xl text-white opacity-90 mb-8">
              Advanced neurological care tailored to your child's developing brain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-white text-[#0F416D] font-medium rounded-lg hover:bg-opacity-90 transition">
                Book Evaluation
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#0F416D] transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Feature Strip */}
      <div className="bg-white py-12 -mt-12 relative z-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <FaBrain className="text-3xl" />, text: "Brain Development" },
              { icon: <FaChild className="text-3xl" />, text: "Child-Centered" },
              { icon: <FaClinicMedical className="text-3xl" />, text: "Advanced Diagnostics" },
              { icon: <FaUserMd className="text-3xl" />, text: "Expert Specialists" },
              { icon: <FaChartLine className="text-3xl" />, text: "Progress Tracking" },
              { icon: <FaHandHoldingHeart className="text-3xl" />, text: "Compassionate Care" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                  {React.cloneElement(item.icon, { className: "text-[#0F416D]" })}
                </div>
                <p className="font-medium" style={{ color: '#0F416D' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Split Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0F416D' }}>
              Understanding Pediatric Neurology
            </h2>
            <div className="space-y-6" style={{ color: '#0F416D' }}>
              <p>
                Our specialists focus on diagnosing and treating disorders of the nervous system in children, from newborns through adolescents.
              </p>
              <p>
                We combine cutting-edge technology with compassionate care to address conditions affecting brain, spinal cord, nerves, and muscles.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                  <span>Comprehensive neurological evaluations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                  <span>Developmental milestone assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                  <span>Family-centered treatment plans</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
              <div className="absolute inset-0 bg-[#0F416D] opacity-20"></div>
              <img 
                src="https://st.depositphotos.com/3216063/4255/i/450/depositphotos_42556235-stock-photo-reflex-symptomatology-child.jpg" 
                alt="Child neurological exam"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Cards */}
      <section className="py-20" style={{ backgroundColor: 'rgba(15,65,109,0.03)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F416D' }}>
              Conditions We Treat
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#0F416D' }}>
              Specialized care for a range of pediatric neurological conditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Epilepsy & Seizures",
                description: "Comprehensive evaluation and management of seizure disorders"
              },
              {
                title: "Developmental Delays",
                description: "Assessment of motor, cognitive, and speech development"
              },
              {
                title: "Neuromuscular Disorders",
                description: "Diagnosis and treatment of muscle and nerve conditions"
              },
              {
                title: "Headache Disorders",
                description: "Specialized pediatric migraine and headache management"
              },
              {
                title: "Autism Spectrum",
                description: "Neurological evaluation and intervention strategies"
              },
              {
                title: "Cerebral Palsy",
                description: "Multidisciplinary care and symptom management"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="h-3" style={{ backgroundColor: '#0F416D' }}></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#0F416D' }}>{item.title}</h3>
                  <p style={{ color: '#0F416D' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ color: '#0F416D' }}>
            Our Evaluation Process
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'rgba(15,65,109,0.2)' }}></div>
            
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Detailed discussion of concerns and medical history"
              },
              {
                step: "2",
                title: "Neurological Exam",
                description: "Comprehensive physical and neurological assessment"
              },
              {
                step: "3",
                title: "Diagnostic Testing",
                description: "EEG, MRI, or other tests as clinically indicated"
              },
              {
                step: "4",
                title: "Treatment Plan",
                description: "Personalized recommendations and ongoing support"
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-16 pb-12 last:pb-0">
                <div 
                  className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: '#0F416D' }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0F416D' }}>{item.title}</h3>
                <p style={{ color: '#0F416D' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#0F416D' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Begin Your Child's Neurological Care Journey
          </h2>
          <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Our team at GrowthWayz is ready to provide expert pediatric neurology care tailored to your child's needs.
          </p>
          <button className="px-8 py-3 bg-white text-[#0F416D] font-medium rounded-lg hover:bg-opacity-90 transition">
            Contact Our Specialists
          </button>
        </div>
      </section>
    </>
  )
}

export default PediatricNeurology