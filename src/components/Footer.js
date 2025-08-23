'use client';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl border-2 border-cyan-300">
                A
              </div>
              <div className="ml-3">
                <span className="text-2xl font-bold text-white">Atlabb</span>
                <span className="block text-sm text-cyan-400 font-medium">Accounting Solutions</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Professional accounting services that drive your business growth. We provide comprehensive financial solutions 
              tailored to help businesses thrive in today's competitive landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
              OUR SERVICES
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Bookkeeping Services",
                "Tax Preparation & Planning",
                "Financial Consulting",
                "Payroll Processing",
                "Audit Support",
                "CFO Services",
                "Business Advisory",
                "Tax Optimization",
                "Financial Reporting",
                "Compliance Management"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Pricing", href: "/pricing" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Blog", href: "/blog" },
                { name: "Careers", href: "/careers" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Sitemap", href: "/sitemap" }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
              CONTACT INFO
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <FaMapMarkerAlt className="w-4 h-4 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">123 Financial District, San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-WHATSAPP</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@atlabb.com</span>
              </div>
              <div className="flex items-start">
                <FaClock className="w-4 h-4 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 2:00 PM</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-3">NEWSLETTER SIGNUP</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 bg-white/5 border border-cyan-500/30 rounded-l-lg text-white text-sm focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-cyan-600 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-sm font-semibold text-white mb-4 text-center">PROFESSIONAL CERTIFICATIONS</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Certified Public Accountant", abbr: "CPA" },
              { name: "Chartered Accountant", abbr: "CA" },
              { name: "Certified Financial Planner", abbr: "CFP" },
              { name: "QuickBooks ProAdvisor", abbr: "QBPA" },
              { name: "Xero Certified Advisor", abbr: "XCA" }
            ].map((cert, index) => (
              <div key={index} className="bg-white/5 px-4 py-2 rounded-lg border border-cyan-500/20">
                <div className="text-cyan-400 font-bold text-center">{cert.abbr}</div>
                <div className="text-gray-300 text-xs text-center">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Atlabb Accounting Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chat button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110">
          <FaWhatsapp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
}