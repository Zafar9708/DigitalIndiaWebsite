'use client';
import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Small Business Owner",
      content: "My laptop suddenly stopped working right before an important presentation. Digital India Tech Solutions provided same-day service and fixed the issue at a reasonable price. Highly recommended!",
      rating: 5,
      image: "/api/placeholder/80/80" // Replace with actual image path
    },
    {
      name: "Priya Sharma",
      role: "College Student",
      content: "I accidentally spilled water on my laptop and thought I lost all my thesis data. These experts recovered everything and got my laptop working again. Thank you for saving my academic work!",
      rating: 5,
      image: "/api/placeholder/80/80" // Replace with actual image path
    },
    {
      name: "Vikram Singh",
      role: "IT Manager",
      content: "We've been using their services for our office computers for over two years now. Their on-site support has minimized our downtime significantly. Professional and reliable service.",
      rating: 5,
      image: "/api/placeholder/80/80" // Replace with actual image path
    },
    {
      name: "Ananya Patel",
      role: "Graphic Designer",
      content: "The hardware upgrade they performed on my iMac dramatically improved its performance. Now I can work on large design files without any lag. Great service and fair pricing!",
      rating: 5,
      image: "/api/placeholder/80/80" // Replace with actual image path
    },
    {
      name: "Mohammed Ali",
      role: "Software Developer",
      content: "I had a complex data recovery need from a failed SSD. Other shops said it was impossible, but the team at Digital India Tech Solutions managed to recover 98% of my data. Amazing work!",
      rating: 5,
      image: "/api/placeholder/80/80" // Replace with actual image path
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-tr-full opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</h3>
                  <p className="text-blue-600">{testimonials[activeIndex].role}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg italic">
                "{testimonials[activeIndex].content}"
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'} transition-colors`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">2000+</div>
            <div className="text-gray-600">Devices Repaired</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;