'use client';
import React from 'react';
import { FaChild, FaUserMd, FaHeart, FaBrain } from 'react-icons/fa';

const primaryColor = '#0F416D';
const whiteColor = '#FFFFFF';

export default function OurExpertTeam() {
  return (
    <div className="py-16 px-6 md:px-20 bg-white" data-aos="zoom-in-up">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our Expert Team
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-primary/80">
            Dedicated professionals committed to your child's growth and development
          </p>
        </div>

        {/* Team Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div
            className="text-center p-6 rounded-xl bg-primary"
            data-aos="zoom-in-up"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-white/20">
                <FaChild className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Pediatric Specialists
            </h3>
            <p className="text-base text-white/90">
              Certified therapists with specialized training in child development
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="text-center p-6 rounded-xl bg-primary"
            data-aos="zoom-in-up"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-white/20">
                <FaBrain className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Nurturing Environment
            </h3>
            <p className="text-base text-white/90">
              Warm, welcoming space where children feel safe to learn and grow
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="text-center p-6 rounded-xl bg-primary"
            data-aos="zoom-in-up"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-white/20">
                <FaHeart className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Compassionate Care
            </h3>
            <p className="text-base text-white/90">
              Warm, patient approach that makes children feel comfortable
            </p>
          </div>

          {/* Feature 4 */}
          <div
            className="text-center p-6 rounded-xl bg-primary"
            data-aos="zoom-in-up"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-white/20">
                <FaUserMd className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Innovative Methods
            </h3>
            <p className="text-base text-white/90">
              Using evidence-based, cutting-edge therapeutic techniques
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            className="font-bold px-8 py-3 rounded-full text-lg shadow-lg transition-all
                       bg-primary text-white hover:bg-primary-dark"
          >
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  );
}