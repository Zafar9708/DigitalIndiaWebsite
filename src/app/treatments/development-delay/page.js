'use client';
import React from 'react';
import Head from 'next/head';


export default function DevelopmentDelay() {
  return (
    <>
      <Head>
        <title>Development Delay | GrowthWayz</title>
        <meta
          name="description"
          content="Specialized therapies and support programs for children experiencing developmental delays, tailored to enhance growth and learning."
        />
      </Head>

   

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/70 to-primary">
                  Development Delay
                </span>{' '}
                Support Tailored for Your Child
              </h1>
              <p className="text-lg text-primary opacity-90 mb-8 leading-relaxed">
                Comprehensive and compassionate programs designed to support children with developmental delays, helping them reach critical milestones with confidence and joy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-primary/90 to-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Book Free Assessment
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition">
                  Learn Our Programs
                </button>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/08/kid-toddler-blocks-playing-1296x728-header.jpg?w=1155&h=1528"
                  alt="Child receiving development delay therapy"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Development Delay */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About <span className="text-primary">Development Delay</span>
            </h2>
            <p className="text-lg text-primary opacity-80 max-w-3xl mx-auto leading-relaxed">
              Developmental delays refer to when children do not reach developmental milestones at the expected times. These delays can impact physical, cognitive, communication, social, or emotional development.
            </p>
            <p className="text-lg text-primary opacity-80 max-w-3xl mx-auto leading-relaxed">
              Early identification and tailored intervention are essential for helping children overcome challenges and thrive in their growth journey.
            </p>
          </div>

          {/* Signs Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Delayed Motor Skills",
                description: "Difficulty with sitting, crawling, walking, or fine motor tasks.",
              },
              {
                title: "Speech & Language Delays",
                description: "Challenges in expressing and understanding language.",
              },
              {
                title: "Social & Emotional Challenges",
                description: "Trouble interacting with peers, managing emotions, or adapting to new situations.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-primary/10 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-primary font-semibold mb-3 text-xl">{item.title}</h3>
                <p className="text-primary opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Therapeutic Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-primary text-lg leading-relaxed">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="mb-4 font-semibold text-primary">Individualized Plans</h3>
              <p>
                Customized therapy plans tailored to each child's unique needs and strengths.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="mb-4 font-semibold text-primary">Play-Based Methods</h3>
              <p>
                Engaging, fun activities designed to promote skill development and confidence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="mb-4 font-semibold text-primary">Family Involvement</h3>
              <p>
                Collaborating closely with families to support progress and foster supportive home environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Benefits of Our Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Improved Motor Skills",
                description: "Enhanced coordination, strength, and motor function.",
              },
              {
                title: "Better Communication",
                description: "Increased ability to understand and use language effectively.",
              },
              {
                title: "Enhanced Social Skills",
                description: "Improved interaction and relationship-building abilities.",
              },
              {
                title: "Greater Independence",
                description: "Promoting self-care and autonomy.",
              },
              {
                title: "Emotional Regulation",
                description: "Helping children manage emotions and behavior.",
              },
              {
                title: "Stronger Family Bonds",
                description: "Supporting caregivers with tools and guidance for nurturing environments.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="border-l-4 pl-6 py-4 hover:bg-primary/10 transition-all duration-300"
                style={{ borderColor: 'currentColor' }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-primary opacity-80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Support Your Child’s Growth?
          </h2>
          <p className="text-white mb-8 text-xl max-w-3xl mx-auto">
            Contact GrowthWayz today to schedule an assessment and personalized development plan.
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
}
