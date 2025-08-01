"use client";
import React from "react";
import Head from "next/head";

import {
  FaChild,
  FaBrain,
  FaHandsHelping,
  FaUsers,
  FaChartLine,
  FaSmile,
} from "react-icons/fa";

const PRIMARY = "#0F416D";
const WHITE = "#FFFFFF";

export default function BehaviorTherapy() {
  return (
    <>
      <Head>
        <title>Behavior Therapy | GrowthWayz</title>
        <meta
          name="description"
          content="Transformative behavior therapy for children at GrowthWayz - building skills for life through evidence-based approaches."
        />
      </Head>

      {/* Hero Section */}
      <section
        className="py-16 md:py-24"
        style={{
          background: `linear-gradient(to bottom right, ${WHITE}, rgba(15, 65, 109, 0.1))`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: PRIMARY }}
              >
                <span
                  style={{
                    background: `linear-gradient(to right, ${PRIMARY}, rgba(15, 65, 109, 0.7))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Behavior Therapy
                </span>{" "}
                That Works
              </h1>
              <p
                className="text-lg mb-8 leading-relaxed opacity-90"
                style={{ color: PRIMARY }}
              >
                Empowering children to develop positive behaviors, emotional
                regulation, and social skills through compassionate,
                evidence-based therapy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="px-8 py-3 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(to right, ${PRIMARY}, rgba(15, 65, 109, 0.8))`,
                  }}
                >
                  Book Free Assessment
                </button>
                <button
                  className="px-8 py-3 border-2 font-semibold rounded-full transition"
                  style={{
                    borderColor: PRIMARY,
                    color: PRIMARY,
                  }}
                >
                  Learn Our Methods
                </button>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/behavioral_therapy.jpg"
                  alt="Child receiving behavior therapy"
                  className="w-full h-auto object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, rgba(15, 65, 109, 0.2), rgba(15, 65, 109, 0.2))`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY }}>
              Our <span style={{ color: PRIMARY }}>Behavior Therapy</span>{" "}
              Services
            </h2>
            <p className="text-lg max-w-3xl mx-auto opacity-80" style={{ color: PRIMARY }}>
              Comprehensive programs addressing behavioral challenges with proven
              techniques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBrain className="text-3xl" style={{ color: PRIMARY }} />,
                title: "ABA Therapy",
                description: "Applied Behavior Analysis for measurable progress",
              },
              {
                icon: <FaChild className="text-3xl" style={{ color: PRIMARY }} />,
                title: "Social Skills",
                description:
                  "Building positive peer interactions and friendships",
              },
              {
                icon: (
                  <FaHandsHelping className="text-3xl" style={{ color: PRIMARY }} />
                ),
                title: "Emotional Regulation",
                description: "Teaching coping strategies and self-control",
              },
              {
                icon: <FaUsers className="text-3xl" style={{ color: PRIMARY }} />,
                title: "Parent Training",
                description: "Empowering families with effective strategies",
              },
              {
                icon: <FaChartLine className="text-3xl" style={{ color: PRIMARY }} />,
                title: "Progress Tracking",
                description: "Data-driven approach to measure improvement",
              },
              {
                icon: <FaSmile className="text-3xl" style={{ color: PRIMARY }} />,
                title: "Positive Reinforcement",
                description: "Encouraging desired behaviors naturally",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl hover:shadow-md transition-all duration-300"
                style={{ backgroundColor: "rgba(15, 65, 109, 0.05)" }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-4 rounded-full shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <h3
                  className="text-xl font-bold text-center mb-3"
                  style={{ color: PRIMARY }}
                >
                  {service.title}
                </h3>
                <p className="text-center opacity-80" style={{ color: PRIMARY }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Addressed */}
      <section className="py-16" style={{ backgroundColor: "rgba(15, 65, 109, 0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: PRIMARY }}
              >
                Challenges We <span style={{ color: PRIMARY }}>Address</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "ADHD behaviors",
                  "Autism Spectrum",
                  "Anxiety & fears",
                  "Aggression",
                  "Defiance",
                  "Meltdowns",
                  "Social difficulties",
                  "School refusal",
                ].map((challenge, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className="h-5 w-5 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: "rgba(15, 65, 109, 0.2)",
                        }}
                      >
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: PRIMARY }}
                        ></div>
                      </div>
                    </div>
                    <p className="ml-3 opacity-80" style={{ color: PRIMARY }}>{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: PRIMARY }}
              >
                Our Assessment Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Initial Consultation",
                    description: "Discuss concerns and child's history",
                  },
                  {
                    title: "Behavioral Evaluation",
                    description: "Standardized assessments and observation",
                  },
                  {
                    title: "Customized Plan",
                    description: "Tailored intervention strategies",
                  },
                  {
                    title: "Ongoing Support",
                    description: "Regular reviews and adjustments",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div
                        className="flex items-center justify-center h-10 w-10 rounded-full font-bold"
                        style={{ backgroundColor: "rgba(15, 65, 109, 0.2)", color: PRIMARY }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold" style={{ color: PRIMARY }}>
                        {step.title}
                      </h4>
                      <p className="opacity-80" style={{ color: PRIMARY }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="mt-6 w-full px-6 py-3 text-white font-medium rounded-lg transition"
                style={{ backgroundColor: PRIMARY }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(15, 65, 109, 0.8)")
                }
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = PRIMARY)}
              >
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY }}>
              Lasting <span style={{ color: PRIMARY }}>Benefits</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto opacity-80" style={{ color: PRIMARY }}>
              How behavior therapy transforms children's lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Improved Behavior",
                description:
                  "Reduction in challenging behaviors and increased positive actions",
              },
              {
                title: "Emotional Growth",
                description: "Better coping skills and emotional regulation",
              },
              {
                title: "Social Success",
                description: "Stronger peer relationships and communication",
              },
              {
                title: "Academic Progress",
                description: "Increased focus and classroom participation",
              },
              {
                title: "Family Harmony",
                description: "Reduced stress and improved home dynamics",
              },
              {
                title: "Life Skills",
                description:
                  "Development of independence and self-care abilities",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="border-l-4 pl-6 py-4 hover:bg-[rgba(15,65,109,0.1)] transition-all duration-300"
                style={{ borderColor: PRIMARY }}
              >
                <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY }}>
                  {benefit.title}
                </h3>
                <p className="opacity-80" style={{ color: PRIMARY }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16"
        style={{
          background: `linear-gradient(to right, rgba(15, 65, 109, 0.8), ${PRIMARY})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See Positive Changes?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Our behavior therapists are ready to help your child develop essential skills for success at home, school, and life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-8 py-3 bg-white font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
              style={{ color: PRIMARY }}
            >
              Book Appointment
            </button>
            <button 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition"
            >
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}