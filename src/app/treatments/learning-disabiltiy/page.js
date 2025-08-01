// src/pages/services/learning-disability.js
'use client'

import React from 'react'


const LearningDisability = () => {
  return (
    <>
     

      <section className="bg-gradient-to-r from-primary/10 to-primary/20 py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h1 className="text-4xl font-bold text-center text-primary mb-8">
            Learning Disability Support
          </h1>
          <p className="text-lg text-primary text-opacity-90 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Empowering children with learning disabilities to thrive through individualized care, expert intervention,
            and compassionate support that fosters confidence both inside and outside the classroom.
          </p>

          {/* Intro Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <img
                src="https://media.istockphoto.com/id/1191463800/photo/kid-with-dyslexia-drawing-with-pencil-and-child-psychologist-looking-at-it.jpg?s=612x612&w=0&k=20&c=bHpNrRZT9nPnZ6QVyaStGW-vkTlGT5QnUG4p7oKxf4A="
                alt="Learning Disability"
                className="rounded-2xl shadow-xl w-full max-h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            <div data-aos="fade-left" className="space-y-6 text-primary text-opacity-90">
              <h2 className="text-2xl font-semibold text-primary">
                What Are Learning Disabilities?
              </h2>
              <p>
                Learning disabilities are neurodevelopmental differences that affect how a person receives, processes,
                and responds to information. They can manifest as challenges in reading (dyslexia), writing (dysgraphia),
                math (dyscalculia), attention, memory, or executive function skills.
              </p>
              <p>
                Early identification and tailored support help unlock academic, social, and emotional potential.
              </p>
              <p>
                Our specialists work closely with families to create individualized plans that match strengths and address growth areas.
              </p>
            </div>
          </div>

          {/* Approach */}
          <div className="mt-16" data-aos="fade-up">
            <h3 className="text-center text-2xl font-semibold text-primary mb-6">
              Our Approach to Supporting Learning Disabilities
            </h3>
            <ul className="list-disc list-inside max-w-3xl mx-auto text-primary text-opacity-90 space-y-3 text-lg leading-relaxed">
              <li>Comprehensive evaluations using validated tools.</li>
              <li>Design customized, evidence-based learning plans.</li>
              <li>Use multisensory teaching methods for engagement.</li>
              <li>Provide individualized tutoring with experienced educators.</li>
              <li>Regular progress tracking and family-school collaboration.</li>
              <li>Teach self-advocacy and emotional resilience.</li>
            </ul>
          </div>

          {/* Specialized Services */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-center text-2xl font-semibold text-primary mb-8">
              Our Specialized Support Services
            </h3>
            <div className="grid md:grid-cols-3 gap-10 text-primary text-opacity-90">
              {[
                {
                  title: "Dyslexia Support",
                  desc: "Targeted reading interventions focusing on phonemic awareness, fluency, and comprehension.",
                },
                {
                  title: "Dysgraphia Therapy",
                  desc: "Improving writing skills through fine motor exercises and adaptive strategies.",
                },
                {
                  title: "Dyscalculia Assistance",
                  desc: "Teaching math concepts using visual aids and concrete examples.",
                },
                {
                  title: "Executive Function Coaching",
                  desc: "Helping develop planning, organization, and time management skills.",
                },
                {
                  title: "Social-Emotional Learning (SEL)",
                  desc: "Supporting emotional regulation, confidence, and positive relationships.",
                },
                {
                  title: "Parental Training & Guidance",
                  desc: "Empowering parents with tools to foster independence at home.",
                },
              ].map(({ title, desc }, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-primary mb-3">{title}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-center text-2xl font-semibold text-primary mb-6">
              Why Choose GrowthWayz?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-primary text-opacity-90">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="font-semibold mb-3 text-primary">Expert Team</h4>
                <p>
                  Certified educators, psychologists, and therapists collaborate for compassionate, tailored support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="font-semibold mb-3 text-primary">Research-Backed Methods</h4>
                <p>
                  Proven strategies combined with innovative teaching maximize learning outcomes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="font-semibold mb-3 text-primary">Parental Partnership</h4>
                <p>
                  Active parent involvement via education, training, and collaboration for a supportive environment.
                </p>
              </div>
            </div>
          </div>

          {/* Call To Action */}
          <div
            className="mt-20 bg-primary/10 p-8 text-center rounded-lg shadow-lg max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-3xl font-semibold text-primary mb-8">
              Ready to Support Your Family?
            </h3>
            <p className="text-primary text-opacity-90 max-w-xl mx-auto leading-relaxed mb-6">
              Contact us today to schedule a consultation and take the next step toward empowering your child.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition duration-300">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default LearningDisability
