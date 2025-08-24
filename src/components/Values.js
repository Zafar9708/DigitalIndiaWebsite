'use client';
import Image from 'next/image';

const Values = () => {
  const values = [
    {
      title: "Integrity",
      description: "We believe in honest diagnostics, transparent pricing, and ethical business practices.",
      image: "https://media.istockphoto.com/id/1500707444/vector/business-transparency-an-open-honest-and-straightforward-process-about-the-company-or.jpg?s=612x612&w=0&k=20&c=GQXgmamgtNTKHTqM0vE7oqGTotHCc5RL8eMjmt1zX8E=", // Replace with value-related image
      icon: "🤝",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Expertise",
      description: "Our team consists of certified professionals who continuously update their skills with the latest technology.",
      image: "https://itdworld.com/blog/wp-content/uploads/2023/10/learning-development-cover.jpg", // Replace with value-related image
      icon: "🎓",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Reliability",
      description: "We stand by our work with warranties and ensure timely service delivery for all our customers.",
      image: "https://www.givainc.com/images/5_star_customer_service_skills.png", // Replace with value-related image
      icon: "⏰",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and techniques to provide cutting-edge solutions to our clients.",
      image: "https://media.licdn.com/dms/image/v2/D5612AQEf0iYUSJbiUw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703133227466?e=2147483647&v=beta&t=gGeMq8dPEQG4uz2eGlb1VTPXTzHDpEC5SBQWp2Fh-T0", // Replace with value-related image
      icon: "💡",
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. We listen, understand, and deliver beyond expectations.",
      image: "https://www.teamly.com/blog/wp-content/uploads/2023/04/Customer-Expectations-and-Exceptional-Service.png", // Replace with value-related image
      icon: "❤️",
      color: "from-red-500 to-red-700"
    },
    {
      title: "Quality",
      description: "We use only genuine parts and follow strict quality control measures in every repair we undertake.",
      image: "https://www.compliancequest.com/wp-content/uploads/2023/10/industrial-quality-control.jpg", // Replace with value-related image
      icon: "⭐",
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do and define who we are as a company
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${value.color} opacity-70`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {value.icon}
                  </div>
                  
                  {/* Value Title */}
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    {value.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700">{value.description}</p>
                  
                  {/* Decorative element */}
                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Values Matter</h3>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto">
              These values aren't just words on a page—they're the foundation of every interaction 
              with our customers. They guide our decisions, shape our services, and ensure that 
              we consistently deliver exceptional experiences that build trust and long-term relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;