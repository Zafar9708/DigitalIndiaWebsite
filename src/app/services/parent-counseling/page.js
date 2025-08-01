'use client';
import React from 'react';
import Head from 'next/head';


export default function ParentCounseling() {
  return (
    <>
     
      <Head>
        <title>Parent Counseling | GrowthWayz</title>
        <meta
          name="description"
          content="Supportive parent counseling services to help you raise confident and emotionally resilient children."
        />
      </Head>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[rgba(15,65,109,0.05)] to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="/images/parent_counseling.jpg"
                alt="Parent Counseling"
                className="rounded-2xl shadow-xl w-full object-cover max-h-[400px] md:max-h-[500px]"
                loading="lazy"
              />
            </div>
            <div data-aos="fade-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
                Compassionate Parent Counseling for Families
              </h1>
              <p className="text-primary mb-6 leading-relaxed text-lg">
                Raising children can be both joyful and challenging. At GrowthWayz, we provide expert
                parent counseling services focused on nurturing emotional resilience, enhancing communication,
                and supporting behavioral growth for your child.
              </p>
              <p className="text-primary mb-6 leading-relaxed text-lg">
                Our experienced therapists guide parents through modern parenting challenges, helping build stronger
                family bonds and positive home environments.
              </p>

              <ul className="list-disc pl-6 text-primary space-y-3 mb-8 text-lg">
                <li>Personalized individual and family counseling sessions</li>
                <li>Techniques for positive discipline and emotional connection</li>
                <li>Support managing stress, anxiety, and parental well-being</li>
                <li>Workshops and resources on child developmental milestones</li>
                <li>Tailored action plans to foster healthy behavior and self-esteem</li>
              </ul>

              <button className="px-8 py-3 bg-primary hover:bg-[rgba(15,65,109,0.8)] text-white rounded-lg transition duration-300 shadow-md">
                Book a Counseling Session
              </button>
            </div>
          </div>

          <div className="mt-20 max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Parent Counseling Matters
            </h2>
            <p className="text-primary mb-5 max-w-3xl mx-auto leading-relaxed text-lg opacity-90">
              Parenting is a journey filled with unique challenges and opportunities. There is no one-size-fits-all
              manual, but with guidance and support, parents can gain the tools needed to raise confident,
              emotionally healthy children.
            </p>
            <p className="text-primary mb-5 max-w-3xl mx-auto leading-relaxed text-lg opacity-90">
              Our counseling services empower parents to develop emotional intelligence, improve communication,
              and understand their children's individual needs — creating stronger relationships and nurturing
              environments.
            </p>
            <p className="text-primary max-w-3xl mx-auto leading-relaxed text-lg opacity-90">
              Together, we build resilient families — fostering happiness, understanding, and success from early
              childhood onwards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Key Benefits of Parent Counseling at GrowthWayz
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-primary">
            <div className="bg-primary/10 p-6 rounded-lg shadow hover:shadow-lg transition shadow-primary">
              <h3 className="text-primary font-semibold mb-4 text-lg">Enhanced Communication Skills</h3>
              <p>
                Learn effective communication techniques that bridge generational gaps and create emotional understanding with your child.
              </p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg shadow hover:shadow-lg transition shadow-primary">
              <h3 className="text-primary font-semibold mb-4 text-lg">Stress & Anxiety Management</h3>
              <p>
                Gain tools to handle parenting stress, reduce anxiety, and foster patience for a healthier family dynamic.
              </p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg shadow hover:shadow-lg transition shadow-primary">
              <h3 className="text-primary font-semibold mb-4 text-lg">Support for Behavioral Challenges</h3>
              <p>
                Receive expert guidance on managing difficult behaviors, setting boundaries, and nurturing positive habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-0 text-primary opacity-90">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">
            Our Approach to Child Therapy and Parent Support
          </h2>
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              At GrowthWayz, we understand that child therapy is most effective when it involves the whole family.
              Our parent counseling sessions are designed to complement therapy for children by addressing parent concerns,
              improving family dynamics, and equipping caregivers with practical strategies.
            </p>
            <p>
              Our licensed counselors tailor sessions to your unique family situation, combining evidence-based therapeutic
              techniques with compassionate listening and guidance. We cover topics such as emotional regulation,
              managing developmental disorders, and fostering social skills.
            </p>
            <p>
              Whether your child is receiving occupational therapy, speech therapy, or behavioral intervention,
              our parent counseling services aim to reinforce progress and promote harmony at home.
            </p>
            <p>
              By working together, we help families create nurturing environments where children can thrive emotionally,
              socially, and academically.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-12 bg-gradient-to-r from-primary to-[rgba(15,65,109,0.8)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Support Your Family?
          </h2>
          <p className="text-white mb-8 text-lg">
            Contact us today to schedule a parent counseling session or learn more about how we can help your child and family grow stronger together.
          </p>
          <button className="bg-white text-primary font-semibold rounded-lg px-8 py-3 shadow hover:bg-gray-100 transition">
            Book a Session
          </button>
        </div>
      </section>

      
    </>
  );
}
