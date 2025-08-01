'use client';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-primary">
      <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-4" style={{ color: '#FFFFFF' }}>ABOUT US</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Welcome to our hub of diverse services designed to support individuals facing unique challenges.
            Explore a range of specialized offerings crafted to empower and uplift, tailored for those navigating life's hurdles with resilience and determination.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-4" style={{ color: '#FFFFFF' }}>OUR SERVICES</h3>
          <ul className="text-sm space-y-2 opacity-90">
            <li>Occupational Therapy</li>
            <li>Speech Therapy</li>
            <li>Behavioral Therapy</li>
            <li>Parent Counseling</li>
            <li>Developmental Screening</li>
            <li>ADHD Management</li>
            <li>Autism Support</li>
            <li>Early Intervention</li>
            <li>Special Education</li>
            <li>Social Skills Training</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-4" style={{ color: '#FFFFFF' }}>USEFUL LINKS</h3>
          <ul className="text-sm space-y-2 opacity-90">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Therapies</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Appointments</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-4" style={{ color: '#FFFFFF' }}>CONTACT US</h3>
          <div className="flex items-center gap-2 mb-2">
            <FaWhatsapp className="text-primary" />
            <span>Phone: +91 63881 03445</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FaEnvelope className="text-primary" />
            <span>Email: growthwayz@gmail.com</span>
          </div>
          <h4 className="text-base font-semibold mb-2">FOLLOW US</h4>
          <div className="flex gap-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>

          <h4 className="text-base font-semibold mb-2 mt-4">OUR OFFICES</h4>
          <p>
            <strong>📍 Address:</strong> A264, Sector 46, Noida, 201301, India
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary py-3 text-center text-sm text-white opacity-90">
        &copy; {new Date().getFullYear()} GrowthWayz. All rights reserved.
      </div>
    </footer>
  );
}
