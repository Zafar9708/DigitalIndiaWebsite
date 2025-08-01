"use client"
import React from 'react';
import Head from 'next/head';

import { FaCheckCircle, FaChild, FaComments, FaUserMd } from 'react-icons/fa';

const PRIMARY = "#0F416D";
const WHITE = "#FFFFFF";

export default function SpeechTherapy() {
    return (
        <> 
            
            <Head>
                <title>Speech Therapy | GrowthWayz</title>
                <meta name="description" content="Professional speech therapy services for children at GrowthWayz" />
            </Head>

            {/* Hero Section */}
            <section 
                className="py-16 md:py-24"
                style={{
                    background: `linear-gradient(to bottom right, ${WHITE}, rgba(15, 65, 109, 0.1))`
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: PRIMARY }}>
                                <span style={{
                                    background: `linear-gradient(to right, ${PRIMARY}, rgba(15, 65, 109, 0.7))`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}>
                                    Speech Therapy
                                </span> for Children
                            </h1>
                            <p className="text-lg mb-8 leading-relaxed" style={{ color: PRIMARY }}>
                                Empowering children to find their voice through personalized, evidence-based speech therapy programs designed to boost communication skills and confidence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    className="px-8 py-3 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    style={{
                                        background: `linear-gradient(to right, ${PRIMARY}, rgba(15, 65, 109, 0.8))`
                                    }}
                                >
                                    Book Free Consultation
                                </button>
                                <button 
                                    className="px-8 py-3 border-2 font-semibold rounded-full transition"
                                    style={{
                                        borderColor: PRIMARY,
                                        color: PRIMARY
                                    }}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/therapyimage.jpg"
                                    alt="Child receiving speech therapy"
                                    className="w-full h-auto object-cover"
                                />
                                <div 
                                    className="absolute inset-0"
                                    style={{
                                        background: `linear-gradient(to top, rgba(15, 65, 109, 0.3), rgba(15, 65, 109, 0.2))`
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY }}>
                            Our <span style={{ color: PRIMARY }}>Speech Therapy</span> Services
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto" style={{ color: PRIMARY }}>
                            Comprehensive programs addressing all aspects of communication development
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaUserMd className="text-3xl" style={{ color: PRIMARY }} />,
                                title: "Certified Therapists",
                                description: "Licensed professionals with specialized pediatric training"
                            },
                            {
                                icon: <FaChild className="text-3xl" style={{ color: PRIMARY }} />,
                                title: "Child-Focused",
                                description: "Play-based therapy tailored to each child's needs"
                            },
                            {
                                icon: <FaComments className="text-3xl" style={{ color: PRIMARY }} />,
                                title: "Multi-Method Approach",
                                description: "Combining verbal, non-verbal and social communication"
                            },
                            {
                                icon: <FaCheckCircle className="text-3xl" style={{ color: PRIMARY }} />,
                                title: "Progress Tracking",
                                description: "Regular assessments and parent feedback"
                            }
                        ].map((feature, index) => (
                            <div 
                                key={index} 
                                className="p-8 rounded-xl hover:shadow-md transition-all duration-300"
                                style={{ backgroundColor: "rgba(15, 65, 109, 0.05)" }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="bg-white p-4 rounded-full shadow-sm">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-center mb-3" style={{ color: PRIMARY }}>{feature.title}</h3>
                                <p className="text-center" style={{ color: PRIMARY }}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Needs Therapy */}
            <section className="py-16" style={{ backgroundColor: "rgba(15, 65, 109, 0.05)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: PRIMARY }}>
                                Signs Your Child May Need <span style={{ color: PRIMARY }}>Speech Therapy</span>
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Difficulty pronouncing certain sounds or words",
                                    "Limited vocabulary for their age",
                                    "Struggles to follow directions or understand questions",
                                    "Frustration when trying to communicate",
                                    "Stuttering or prolonged pauses when speaking",
                                    "Difficulty with social interactions"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div 
                                                className="h-5 w-5 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: "rgba(15, 65, 109, 0.2)" }}
                                            >
                                                <div 
                                                    className="h-2 w-2 rounded-full"
                                                    style={{ backgroundColor: PRIMARY }}
                                                ></div>
                                            </div>
                                        </div>
                                        <p className="ml-3" style={{ color: PRIMARY }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY }}>Our Assessment Process</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Initial Consultation",
                                        description: "We discuss your concerns and your child's history"
                                    },
                                    {
                                        title: "Comprehensive Evaluation",
                                        description: "Standardized tests and play-based assessments"
                                    },
                                    {
                                        title: "Personalized Plan",
                                        description: "Detailed report with recommended therapy goals"
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div 
                                                className="flex items-center justify-center h-10 w-10 rounded-full font-bold"
                                                style={{ 
                                                    backgroundColor: "rgba(15, 65, 109, 0.2)",
                                                    color: PRIMARY
                                                }}
                                            >
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold" style={{ color: PRIMARY }}>{step.title}</h4>
                                            <p style={{ color: PRIMARY }}>{step.description}</p>
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
                                onMouseOut={(e) => 
                                    (e.currentTarget.style.backgroundColor = PRIMARY)
                                }
                            >
                                Schedule Assessment
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY }}>
                            Our <span style={{ color: PRIMARY }}>Therapy Approach</span>
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto" style={{ color: PRIMARY }}>
                            Evidence-based methods delivered with care and creativity
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Play-Based Learning",
                                description: "Using games and activities to make therapy enjoyable while targeting specific goals"
                            },
                            {
                                title: "Family Involvement",
                                description: "Training parents to reinforce skills at home for faster progress"
                            },
                            {
                                title: "Multisensory Techniques",
                                description: "Engaging all senses to enhance learning and retention"
                            }
                        ].map((approach, index) => (
                            <div 
                                key={index} 
                                className="p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full"
                                style={{ 
                                    background: `linear-gradient(to bottom right, rgba(15, 65, 109, 0.1), rgba(15, 65, 109, 0.05))`,
                                    borderLeft: `4px solid ${PRIMARY}`
                                }}
                            >
                                <h3 className="text-xl font-bold mb-4" style={{ color: PRIMARY }}>{approach.title}</h3>
                                <p style={{ color: PRIMARY }}>{approach.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section 
                className="py-16"
                style={{
                    background: `linear-gradient(to right, rgba(15, 65, 109, 0.8), ${PRIMARY})`
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Help Your Child Find Their Voice?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                        Contact us today to schedule an assessment or learn more about our speech therapy programs.
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