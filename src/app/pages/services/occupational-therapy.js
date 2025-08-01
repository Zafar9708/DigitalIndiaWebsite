"use client";
import React from 'react';
import Head from 'next/head';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaChild, FaHandsHelping, FaBrain, FaTasks, FaSmile } from 'react-icons/fa';

export default function OccupationalTherapy() {
  return (
    <>
      <div className="hidden md:block">
        <HeaderTop />
      </div>
      <Navbar />
      <Head>
        <title>Occupational Therapy | GrowthWayz</title>
        <meta
          name="description"
          content="Empowering children to build essential life skills through personalized occupational therapy at GrowthWayz."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Occupational Therapy for Children
              </h1>
              <p className="text-lg text-primary mb-8 leading-relaxed">
                Helping children develop the skills they need for daily life through play-based, 
                child-centered therapy that builds confidence and independence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary/90">
                  Book Free Consultation
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/occupationaltherapy.jpg"
                  alt="Child receiving occupational therapy"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How We Help Children Thrive
            </h2>
            <p className="text-lg text-primary/80 max-w-3xl mx-auto">
              Our occupational therapy programs address key developmental areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHandsHelping className="text-3xl text-primary" />,
                title: "Fine Motor Skills",
                description: "Improving hand-eye coordination and dexterity"
              },
              {
                icon: <FaChild className="text-3xl text-primary" />,
                title: "Gross Motor Skills",
                description: "Enhancing balance and whole-body movement"
              },
              {
                icon: <FaBrain className="text-3xl text-primary" />,
                title: "Sensory Processing",
                description: "Helping children interpret sensory information"
              },
              {
                icon: <FaTasks className="text-3xl text-primary" />,
                title: "Daily Living Skills",
                description: "Building independence in self-care activities"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl hover:shadow-md transition-all duration-300 border border-primary/10">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full shadow-sm">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-primary mb-3">{feature.title}</h3>
                <p className="text-primary/80 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Child-Centered Approach
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Play-Based Therapy",
                    description: "Using games and fun activities to achieve therapeutic goals"
                  },
                  {
                    title: "Individualized Plans",
                    description: "Custom programs based on comprehensive assessments"
                  },
                  {
                    title: "Family Collaboration",
                    description: "Parents receive training to support progress at home"
                  },
                  {
                    title: "Progress Tracking",
                    description: "Regular evaluations to measure improvement"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold">
                        <FaSmile className="text-lg" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">{item.title}</h4>
                      <p className="text-primary/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">Who Benefits from OT?</h3>
              <div className="space-y-4">
                {[
                  "Children with developmental delays",
                  "Sensory processing challenges",
                  "Coordination difficulties",
                  "Attention and focus issues",
                  "Autism spectrum disorders",
                  "Fine motor skill delays"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <p className="ml-3 text-primary">{item}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition">
                Schedule Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Techniques */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Therapy Techniques
            </h2>
            <p className="text-lg text-primary/80 max-w-3xl mx-auto">
              Evidence-based methods tailored to each child's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sensory Integration",
                description: "Helping children process and respond to sensory input appropriately",
                color: "bg-primary/5"
              },
              {
                title: "Motor Skill Development",
                description: "Activities to improve both fine and gross motor coordination",
                color: "bg-primary/5"
              },
              {
                title: "Visual Perceptual Training",
                description: "Enhancing visual processing for reading and writing skills",
                color: "bg-primary/5"
              }
            ].map((technique, index) => (
              <div key={index} className={`${technique.color} p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full border border-primary/10`}>
                <h3 className="text-xl font-bold text-primary mb-4">{technique.title}</h3>
                <p className="text-primary/80">{technique.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Begin Your Child's Occupational Therapy Journey
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Our expert therapists are ready to help your child develop essential life skills in a fun, supportive environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
              Book Appointment
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}