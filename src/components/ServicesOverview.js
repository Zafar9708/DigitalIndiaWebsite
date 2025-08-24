'use client';
import Link from 'next/link';

const ServicesOverview = () => {
  const services = [
    {
      title: "Laptop Repair",
      description: "Expert diagnosis and repair for all laptop brands and models. Screen replacement, keyboard issues, power problems, and more.",
      icon: "💻",
      href: "/services/laptop-repair",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Computer Repair",
      description: "Comprehensive desktop computer repair services. Hardware diagnostics, component replacement, and performance optimization.",
      icon: "🖥️",
      href: "/services/computer-repair",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Data Recovery",
      description: "Professional data recovery services for accidentally deleted files, corrupted drives, and damaged storage devices.",
      icon: "💾",
      href: "/services/data-recovery",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Software Installation",
      description: "Operating system installation, driver updates, application setup, and software troubleshooting for optimal performance.",
      icon: "📀",
      href: "/services/software-installation",
      color: "from-red-500 to-red-700"
    },
    {
      title: "Hardware Upgrades",
      description: "Boost your computer's performance with RAM upgrades, SSD installations, graphics card updates, and more.",
      icon: "🔧",
      href: "/services/hardware-upgrades",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      title: "Virus Removal",
      description: "Complete malware and virus removal services to protect your data and restore your computer's security and performance.",
      icon: "🛡️",
      href: "/services/virus-removal",
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to meet your specific needs with quality and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;