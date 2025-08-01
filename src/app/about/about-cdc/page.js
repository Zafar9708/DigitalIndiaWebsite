'use client'
import React from 'react'
import Head from 'next/head'
import { FaHeart, FaUsers, FaChartLine, FaAward, FaMapMarkerAlt, FaClock,FaSeedling ,FaHandHoldingHeart,FaLightbulb,FaBuilding } from 'react-icons/fa'

const AboutCDC = () => {
  return (
    <>
      <Head>
        <title>About Us | GrowthWayz CDC</title>
        <meta name="description" content="Learn about GrowthWayz Child Development Center's mission, team, and approach to pediatric care" />
      </Head>

      {/* Hero with Mission Statement */}
      <div className="relative min-h-[60vh] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-[#0F416D] opacity-95"
          style={{
            backgroundImage: "linear-gradient(rgba(15, 65, 109, 0.9), rgba(15, 65, 109, 0.8))"
          }}
        ></div>
        
        <div className="relative z-10 max-w-5xl px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-white/90">GrowthWayz CDC</span>
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
            <p className="text-xl italic mb-4" style={{ color: '#0F416D' }}>
              "Empowering children to reach their fullest potential through compassionate, evidence-based care."
            </p>
            <p className="font-medium" style={{ color: '#0F416D' }}>
              - Our Mission Statement
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0F416D' }}>
                Our Story
              </h2>
              <div className="space-y-6" style={{ color: '#0F416D' }}>
                <p>
                  Founded in 2025, GrowthWayz CDC began as a small clinic with a big vision: to transform pediatric therapy services by putting children and families at the center of care.
                </p>
                <p>
                  What started with two therapists in a single office has grown into a comprehensive child development center serving hundreds of families each year.
                </p>
                <p>
                  Today, our team of 30+ specialists provides integrated therapies under one roof, creating seamless care experiences for children with diverse needs.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <div className="absolute inset-0 bg-[#0F416D] opacity-10"></div>
              <img 
                src="https://wwwnc.cdc.gov/travel/images/travel-health-clinic.png" 
                alt="GrowthWayz CDC clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20" style={{ backgroundColor: 'rgba(15,65,109,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ color: '#0F416D' }}>
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart className="text-3xl" />,
                title: "Compassion First",
                description: "We meet every child where they are with empathy and understanding"
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: "Family-Centered",
                description: "Parents and caregivers are essential partners in therapy"
              },
              {
                icon: <FaChartLine className="text-3xl" />,
                title: "Evidence-Based",
                description: "Our methods are grounded in the latest pediatric research"
              },
              {
                icon: <FaAward className="text-3xl" />,
                title: "Excellence",
                description: "We maintain the highest clinical standards in all we do"
              },
              {
                icon: <FaMapMarkerAlt className="text-3xl" />,
                title: "Accessibility",
                description: "Creating pathways to care for all families"
              },
              {
                icon: <FaClock className="text-3xl" />,
                title: "Patience",
                description: "We honor each child's unique developmental timeline"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                  {React.cloneElement(value.icon, { className: "text-[#0F416D]" })}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F416D' }}>{value.title}</h3>
                <p style={{ color: '#0F416D' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Spotlight */}
     <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ color: '#0F416D' }}>
            Our Beginnings
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <FaSeedling className="text-2xl" />,
                  title: "A New Vision",
                  content: "Founded in 2025, GrowthWayz CDC was born from a passion to fill the need for compassionate, specialized pediatric care in our community."
                },
                {
                  icon: <FaHandHoldingHeart className="text-2xl" />,
                  title: "Community Focus",
                  content: "We've designed every aspect of our center with local families in mind, from flexible scheduling to culturally-sensitive care."
                },
                {
                  icon: <FaLightbulb className="text-2xl" />,
                  title: "Fresh Approach",
                  content: "Our modern facility incorporates the latest research in child development and therapeutic best practices."
                },
                {
                  icon: <FaBuilding className="text-2xl" />,
                  title: "Purpose-Built Space",
                  content: "Every therapy room and common area was intentionally designed to create a welcoming, effective environment for children."
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                      {React.cloneElement(item.icon, { className: "text-[#0F416D]" })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0F416D' }}>{item.title}</h3>
                    <p style={{ color: '#0F416D' }}>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
                <div className="absolute inset-0 bg-[#0F416D] opacity-10"></div>
                <img 
                  src="https://www.cdc.gov/global-health/media/images/IMG_0565_1.jpg" 
                  alt="Our new clinic space"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 text-center">
                  <p className="font-bold" style={{ color: '#0F416D' }}>GrowthWayz CDC</p>
                  <p className="text-sm" style={{ color: 'rgba(15,65,109,0.7)' }}>Opened 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="py-20" style={{ backgroundColor: 'rgba(15,65,109,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0F416D' }}>
                Our Facility
              </h2>
              <div className="space-y-6" style={{ color: '#0F416D' }}>
                <p>
                  Our 15,000 sq ft center was specially designed to create a welcoming, therapeutic environment for children. 
                </p>
                <p>
                  Features include sensory-friendly spaces, observation rooms for parents, and specialized equipment tailored to pediatric therapy needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                    <span>10 private therapy rooms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                    <span>Sensory gym with adaptive equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                    <span>Parent resource library</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#0F416D' }}></span>
                    <span>ADA-compliant facilities</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <div className="absolute inset-0 bg-[#0F416D] opacity-10"></div>
              <img 
                src="https://verainterior.com/wp-content/uploads/2024/05/Dental-Clinic-Interior-Design-jpg.webp" 
                alt="Clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#0F416D' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the GrowthWayz Difference
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a tour of our facility or meet with our team to learn how we can support your child's development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#0F416D] font-medium rounded-lg hover:bg-gray-100 transition shadow-lg">
              Book a Tour
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#0F416D] transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCDC