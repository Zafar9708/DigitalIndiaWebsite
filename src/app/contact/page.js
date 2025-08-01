'use client'
import React, { useState } from 'react'
import Head from 'next/head'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      <Head>
        <title>Contact Us | GrowthWayz CDC</title>
        <meta name="description" content="Get in touch with GrowthWayz Child Development Center for inquiries or appointments" />
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-[300px] flex items-center justify-center text-center bg-[#0F416D]">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-5xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-white/90">GrowthWayz</span>
          </h1>
          <p className="text-xl text-white/85 max-w-3xl mx-auto">
            We're here to answer your questions and support your child's development journey
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#0F416D' }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium" style={{ color: '#0F416D' }}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0F416D]"
                    style={{ borderColor: 'rgba(15,65,109,0.3)' }}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium" style={{ color: '#0F416D' }}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0F416D]"
                      style={{ borderColor: 'rgba(15,65,109,0.3)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium" style={{ color: '#0F416D' }}>Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0F416D]"
                      style={{ borderColor: 'rgba(15,65,109,0.3)' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium" style={{ color: '#0F416D' }}>Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0F416D]"
                    style={{ borderColor: 'rgba(15,65,109,0.3)' }}
                  >
                    <option value="">Select a subject</option>
                    <option value="New Patient Inquiry">New Patient Inquiry</option>
                    <option value="Appointment Request">Appointment Request</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium" style={{ color: '#0F416D' }}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0F416D]"
                    style={{ borderColor: 'rgba(15,65,109,0.3)' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-[#0F416D] text-white font-medium rounded-lg hover:bg-[#0F416D]/90 transition flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#0F416D' }}>
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                      <FaMapMarkerAlt className="text-[#0F416D] text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0F416D' }}>Our Location</h3>
                    <address className="not-italic" style={{ color: '#0F416D' }}>
                      A264, Sector 46<br />
                      India
                    </address>
                    <button className="mt-3 px-4 py-2 rounded-lg font-medium" style={{ backgroundColor: 'rgba(15,65,109,0.1)', color: '#0F416D' }}>
                      Get Directions
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                      <FaPhone className="text-[#0F416D] text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0F416D' }}>Phone</h3>
                    <p className="mb-1" style={{ color: '#0F416D' }}>Main: <a href="tel:+18005551234" className="hover:underline">+91 9599086567</a></p>
                    <p style={{ color: '#0F416D' }}>Fax: (800) 555-5678</p>
                    <button className="mt-3 px-4 py-2 rounded-lg font-medium" style={{ backgroundColor: 'rgba(15,65,109,0.1)', color: '#0F416D' }}>
                      Call Now
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                      <FaEnvelope className="text-[#0F416D] text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0F416D' }}>Email</h3>
                    <p className="mb-1" style={{ color: '#0F416D' }}><a href="mailto:growthwayzcenter@gmail.com" className="hover:underline">growthwayzcenter@gmail.com</a></p>
                    <p style={{ color: '#0F416D' }}><a href="mailto:support@growthwayz.com" className="hover:underline">support@growthwayz.com</a></p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(15,65,109,0.1)' }}>
                      <FaClock className="text-[#0F416D] text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0F416D' }}>Hours</h3>
                    <ul className="space-y-1" style={{ color: '#0F416D' }}>
                      <li className="flex justify-between">
                        <span>Monday-Saturday:</span> <span>10:00 AM - 7:00 PM</span>
                      </li>
                     
                      <li className="flex justify-between">
                        <span>Sunday:</span> <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0F416D' }}>
            Ready to Begin Your Child's Journey?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#0F416D' }}>
            Contact us today to schedule an initial consultation or tour our facility
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-[#0F416D] text-white font-medium rounded-lg hover:bg-[#0F416D]/90 transition shadow-lg">
              Book a Consultation
            </button>
            <button className="px-8 py-3 border-2 border-[#0F416D] text-[#0F416D] font-medium rounded-lg hover:bg-[#0F416D]/10 transition">
              Call Now: (800) 555-1234
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs