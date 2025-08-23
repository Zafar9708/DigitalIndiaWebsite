'use client';
import React, { useState } from 'react';

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    username: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ username: '', companyName: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your financial management? Reach out to our expert team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Our team is ready to help you achieve financial excellence. Reach out through any of these channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: '📧',
                  title: 'Email',
                  details: 'info@atlabb.com',
                  description: 'Send us a message anytime'
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  details: '+91 9999999999',
                  description: 'Mon-Fri from 8am to 6pm'
                },
                {
                  icon: '📍',
                  title: 'Office',
                  details: 'Greater Noida, India',
                  description: 'Greater Noida, 110030'
                },
                {
                  icon: '💬',
                  title: 'Live Chat',
                  details: 'Available 24/7',
                  description: 'Instant support on our website'
                }
              ].map((contact, index) => (
                <div key={index} className="flex items-start group">
                  <div className="text-2xl mr-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                      {contact.title}
                    </h4>
                    <p className="text-cyan-400 mb-1">{contact.details}</p>
                    <p className="text-gray-400 text-sm">{contact.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                      {social.charAt(0)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl mb-6">
                Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl mb-6">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your accounting needs and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending Message...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-gray-400 text-sm text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
          {[
            {
              title: 'Response Time',
              description: 'We typically respond to all inquiries within 24 hours during business days.',
              icon: '⏰'
            },
            {
              title: 'Expert Consultation',
              description: 'First consultation is always free with no obligation.',
              icon: '🎯'
            },
            {
              title: 'Security Guaranteed',
              description: 'All your information is encrypted and securely stored.',
              icon: '🔒'
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}