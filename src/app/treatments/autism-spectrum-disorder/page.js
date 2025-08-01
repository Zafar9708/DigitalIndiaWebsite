"use client";
import React from "react";
import Head from "next/head";

import {
  FaChild,
  FaComments,
  FaHandsHelping,
  FaBrain,
  FaUserFriends,
  FaClipboardCheck,
} from "react-icons/fa";

const AutismTreatment = () => {
  return (
    <>
      <Head>
        <title>Autism Treatment | GrowthWayz</title>
        <meta
          name="description"
          content="Compassionate, evidence-based autism therapy programs tailored to your child's unique needs at GrowthWayz."
        />
      </Head>

     

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                  Autism Therapy
                </span>{" "}
                That Understands
              </h1>
              <p className="text-lg text-primary opacity-90 mb-8 leading-relaxed">
                Personalized programs designed to help children with autism develop communication,
                social skills, and independence in a nurturing, sensory-friendly environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Book Free Assessment
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition">
                  Learn Our Methods
                </button>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://media.istockphoto.com/id/1053433092/photo/emotion-emoticons-used-by-a-psychologist-during-a-therapy-session-with-a-child-with-an-autism.jpg?s=612x612&w=0&k=20&c=tQBO6BvjU5QOwBeJsmbqcqByt2jOJ9R8anbq7ek97K0="
                  alt="Child receiving autism therapy"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our <span className="text-primary">Autism Therapy</span> Approach
            </h2>
            <p className="text-lg text-primary opacity-80 max-w-3xl mx-auto">
              Evidence-based techniques tailored to your child's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChild className="text-3xl text-primary" />,
                title: "ABA Therapy",
                description: "Applied Behavior Analysis to reinforce positive behaviors",
              },
              {
                icon: <FaComments className="text-3xl text-primary/90" />,
                title: "Speech Therapy",
                description: "Improving verbal and non-verbal communication",
              },
              {
                icon: <FaHandsHelping className="text-3xl text-primary/80" />,
                title: "Occupational Therapy",
                description: "Developing daily living and sensory processing skills",
              },
              {
                icon: <FaBrain className="text-3xl text-primary/80" />,
                title: "Social Skills",
                description: "Building meaningful peer interactions",
              },
              {
                icon: <FaUserFriends className="text-3xl text-primary/60" />,
                title: "Parent Training",
                description: "Equipping families with support strategies",
              },
              {
                icon: <FaClipboardCheck className="text-3xl text-primary/60" />,
                title: "Progress Tracking",
                description: "Data-driven measurement of milestones",
              },
            ].map((approach, index) => (
              <div
                key={index}
                className="bg-primary/5 p-8 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-4 rounded-full shadow-sm">{approach.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-center text-primary mb-3">{approach.title}</h3>
                <p className="text-primary text-center opacity-80">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                We Support Children With <span className="text-primary">Autism</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Communication delays",
                  "Social interaction challenges",
                  "Sensory sensitivities",
                  "Repetitive behaviors",
                  "Executive functioning",
                  "Emotional regulation",
                  "Daily living skills",
                  "School readiness",
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <p className="ml-3 text-primary opacity-80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Assessment Process</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Initial Consultation",
                    description: "Discuss your child's strengths and challenges",
                  },
                  {
                    title: "Comprehensive Evaluation",
                    description: "Standardized assessments and observations",
                  },
                  {
                    title: "Personalized Plan",
                    description: "Custom therapy roadmap with measurable goals",
                  },
                  {
                    title: "Ongoing Support",
                    description: "Regular progress reviews and adjustments",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">{step.title}</h4>
                      <p className="text-primary opacity-80">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full px-6 py-3 bg-primary text-white font-medium rounded-lg transition hover:bg-primary/90">
                Begin Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Life-Changing <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-lg text-primary max-w-3xl mx-auto opacity-80">
              How our autism therapy transforms children's lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Improved Communication",
                description: "Expressive and receptive language development",
              },
              {
                title: "Social Connections",
                description: "Meaningful peer interactions and friendships",
              },
              {
                title: "Behavior Regulation",
                description: "Reduced meltdowns and increased coping skills",
              },
              {
                title: "Academic Success",
                description: "Enhanced focus and learning readiness",
              },
              {
                title: "Daily Independence",
                description: "Self-care and life skills development",
              },
              {
                title: "Family Harmony",
                description: "Reduced stress and improved home dynamics",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="border-l-4 pl-6 py-4 hover:bg-primary/10 transition-all duration-300"
                style={{ borderColor: "currentColor" }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-primary opacity-80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Begin Your Child's Journey Today
          </h2>
          <p className="text-yellow-400 mb-8 text-xl max-w-3xl mx-auto">
            Our autism specialists are ready to help your child reach their full potential.
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

    
    </>
  );
};

export default AutismTreatment;
