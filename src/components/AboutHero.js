'use client';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMzODc0YjAiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMTIuNSAxMi41aDM1djM1aC0zNXoiLz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-blue-300">Digital India</span> Tech Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              For over a decade, we've been the trusted partner for thousands of customers 
              seeking reliable computer repair and IT solutions across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-300">12+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-300">10K+</div>
                <div className="text-blue-100">Devices Repaired</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-300">98%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://bangaa.com/wp-content/uploads/2022/11/hardware-1024x700.jpg" // Replace with actual workspace image
                alt="Our modern repair facility"
                width={600}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Floating elements */}
              <div className="absolute top-6 left-6 bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold shadow-lg">
                🛠️ Certified Technicians
              </div>
              <div className="absolute bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                ⚡ Quick Service
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;