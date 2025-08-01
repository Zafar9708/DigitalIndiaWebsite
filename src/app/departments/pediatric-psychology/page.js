'use client';
import React from 'react';
import Head from 'next/head';

import { FaRegLightbulb, FaSmileBeam, FaHeart, FaHandsHelping,FaBrain } from 'react-icons/fa';

export default function PediatricPsychologyDepartment() {
  return (
    <>
      <Head>
        <title>Pediatric Psychology | GrowthWayz</title>
        <meta
          name="description"
          content="Expert pediatric psychology to nurture emotional wellness, resilience, and confidence in children and teens."
        />
      </Head>

     

      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-7/12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Pediatric Psychology <span className="font-normal opacity-90">at GrowthWayz</span>
            </h1>
            <p className="text-lg text-white opacity-90 mb-7">
              Support for every emotional and behavioral journey — guided by specialists who care.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <button className="px-8 py-3 rounded-full bg-white text-primary font-bold shadow-md hover:bg-primary hover:text-white border-2 border-white hover:border-primary transition-all duration-200">
                Book Consult
              </button>
              <button className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-5/12 flex justify-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center">
              <FaSmileBeam className="text-primary text-7xl mb-4" />
              <div className="text-xl text-primary font-semibold text-center">
                Nurturing<br />Young Minds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Why Pediatric Psychology?
            </h2>
            <p className="text-primary opacity-80 text-lg max-w-2xl mx-auto">Children and teens benefit from psychological support to manage emotions, build resilience, and overcome behavioral hurdles. Our approach is engaging, respectful, and always family-focused.</p>
          </div>
          {/* Soft Feature Highlights */}
          <div className="grid md:grid-cols-4 gap-7 mt-16">
            <div className="rounded-xl bg-primary/10 py-8 px-5 flex flex-col items-center shadow group hover:bg-primary/20 transition-all">
              <FaHeart className="text-primary text-3xl mb-3" />
              <div className="text-lg font-bold text-primary mb-2">Emotional Guidance</div>
              <div className="text-primary opacity-80 text-center text-sm">Coping tools for worries, mood swings, and emotional wellness.</div>
            </div>
            <div className="rounded-xl bg-primary/10 py-8 px-5 flex flex-col items-center shadow group hover:bg-primary/20 transition-all">
              <FaRegLightbulb className="text-primary text-3xl mb-3" />
              <div className="text-lg font-bold text-primary mb-2">Positive Behaviors</div>
              <div className="text-primary opacity-80 text-center text-sm">Social skill-building, habit change, and self-confidence tools.</div>
            </div>
            <div className="rounded-xl bg-primary/10 py-8 px-5 flex flex-col items-center shadow group hover:bg-primary/20 transition-all">
              <FaHandsHelping className="text-primary text-3xl mb-3" />
              <div className="text-lg font-bold text-primary mb-2">Parent & Family Support</div>
              <div className="text-primary opacity-80 text-center text-sm">Parent counseling, family therapy, and guidance for all ages.</div>
            </div>
            <div className="rounded-xl bg-primary/10 py-8 px-5 flex flex-col items-center shadow group hover:bg-primary/20 transition-all">
              <FaBrain className="text-primary text-3xl mb-3" />
              <div className="text-lg font-bold text-primary mb-2">Developmental Assessments</div>
              <div className="text-primary opacity-80 text-center text-sm">Early detection of challenges and personalized therapy plans.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Comprehensive psychological evaluations',
              'Therapy for depression, anxiety, trauma, ADHD, and autism',
              'Behavior management and positive habit-forming',
              'Parent/family therapy and coaching',
              'School liaising for special needs',
              'Workshops for self-esteem, communication, and stress',
            ].map((txt, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-white p-7 shadow hover:shadow-lg border-l-4 border-primary transition-all"
              >
                <div className="text-primary font-semibold mb-2">{txt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Child’s Wellness Journey Today
          </h2>
          <p className="text-white text-lg opacity-95 mb-8">
            GrowthWayz Pediatric Psychology is here to help children thrive—emotionally, socially, and academically.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-full shadow hover:bg-primary hover:text-white border-2 border-white hover:border-primary transition">
              Book Appointment
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition">
              Contact Department
            </button>
          </div>
        </div>
      </section>

    </>
  );
}
