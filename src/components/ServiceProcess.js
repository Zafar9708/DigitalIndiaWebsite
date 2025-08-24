'use client';
import Image from 'next/image';

const ServiceProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: "Diagnosis & Assessment",
      description: "Our experts perform thorough diagnostics to identify the root cause of your device issues.",
      image: "https://img.freepik.com/free-photo/car-repairman-wearing-white-uniform-standing-holding-wrench-that-is-essential-tool-mechanic-with-laptop-checking-engine_1150-16591.jpg?semt=ais_hybrid&w=740&q=80", // Replace with actual process images
      details: [
        "Comprehensive hardware testing",
        "Software diagnostics",
        "Free initial assessment"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      step: 2,
      title: "Quote & Approval",
      description: "We provide transparent pricing and detailed quotes before starting any work.",
      image: "https://media.istockphoto.com/id/928791064/photo/technician-repairing-laptop-computer-closeup.jpg?s=612x612&w=0&k=20&c=QF43BNi5BL9wXRYBbUiRrp-oqnQgM1hsN7XhlHsvTSc=", // Replace with actual process images
      details: [
        "No hidden charges",
        "Multiple repair options",
        "Instant approval process"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      step: 3,
      title: "Professional Repair",
      description: "Our certified technicians perform repairs using quality parts and advanced tools.",
      image: "https://img.freepik.com/free-photo/male-technician-examining-mother-board-with-digital-multimeter_23-2147922353.jpg", // Replace with actual process images
      details: [
        "Genuine parts only",
        "ESD-safe environment",
        "Quality workmanship"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      step: 4,
      title: "Quality Testing",
      description: "Every repaired device undergoes rigorous testing to ensure optimal performance.",
      image: "https://media.product.which.co.uk/prod/images/original/35fba05cfe51-how-we-test-laptops.jpg", // Replace with actual process images
      details: [
        "Performance benchmarking",
        "Stress testing",
        "Quality assurance"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      step: 5,
      title: "Delivery & Support",
      description: "We deliver your repaired device with warranty and ongoing support options.",
      image: "https://media.istockphoto.com/id/925332638/photo/young-startup-entrepreneur-small-business-owner-working-at-home-packaging-and-delivery.jpg?s=612x612&w=0&k=20&c=7sA8xJ4dmprUdPyAO4UTBA7u9Se593ffQT0PKzFya5Q=", // Replace with actual process images
      details: [
        "Free pickup and delivery",
        "Warranty on repairs",
        "30-day support"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to ensure your devices receive the best care with complete transparency
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-blue-600 font-semibold">Step {step.step}</span>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                    <div className="aspect-w-16 aspect-h-9">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Step Number Circle */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                  </div>
                </div>

                {/* Connector Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Summary */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1-2 Days</div>
              <p className="text-blue-100">Average Repair Time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">Free</div>
              <p className="text-blue-100">Diagnosis & Quote</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">90 Days</div>
              <p className="text-blue-100">Warranty on Repairs</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
              Start Your Repair Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;