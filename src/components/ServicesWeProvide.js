'use client';
import React from 'react';

const services = [
  {
    title: 'Occupational Therapy',
    description: 'Enhancing fine motor skills, coordination, and daily living activities.',
    image: '/images/occupationaltherapy.jpg',
  },
  {
    title: 'Speech Therapy',
    description: 'Helping children improve communication skills through specialized techniques.',
    image: '/images/SpeechTherapy.jpg',
  },
  {
    title: 'Behavioral Therapy',
    description: 'Fostering positive behaviors and emotional regulation in children.',
    image: '/images/behavioral_therapy.jpg',
  },
  {
    title: 'Special Education',
    description: 'Customized learning strategies for children with diverse learning needs.',
    image: '/images/special_education.jpg',
  },
  {
    title: 'Parent Counseling',
    description: 'Guiding parents to support their child’s development at home and school.',
    image: '/images/parent_counseling.jpg',
  },
  {
    title: 'Early Intervention',
    description: 'Identifying and addressing developmental delays at an early stage.',
    image: '/images/early_intervention.jpg',
  },
];

export default function ServicesWeProvide() {
  return (
    <div className="py-16 px-6 md:px-20 bg-white" data-aos="zoom-in-up">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="zoom-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Services We Provide
        </h2>
        <p className="text-primary opacity-70 text-lg">
          Discover the wide range of developmental support we offer to children and families.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="zoom-in-up"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-primary opacity-80 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
