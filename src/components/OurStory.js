'use client';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small repair shop to a trusted name in computer services across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Timeline Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://www.computerrepairhomeservice.in/wp-content/uploads/2019/06/Laptop-Repair-Service-at-Home-in-Sector-72-Noida.jpg" // Replace with timeline/image collage
                alt="Our journey timeline"
                width={500}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Milestone Markers */}
            <div className="absolute top-8 left-8 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm">2010</div>
              <div className="font-semibold">Founded</div>
            </div>
            <div className="absolute top-1/2 right-8 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm">2015</div>
              <div className="font-semibold">1000+ Repairs</div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm">2023</div>
              <div className="font-semibold">10K+ Happy Customers</div>
            </div>
          </div>

          {/* Story Content */}
          <div>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Beginning</h3>
                <p className="text-gray-700">
                  Started in 2010 with a small workshop in Bengaluru, our founder Mr. Sharma 
                  envisioned providing quality computer repair services with transparency and integrity.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth & Expansion</h3>
                <p className="text-gray-700">
                  By 2015, we had served over 1000 customers and expanded our team with certified 
                  technicians. We introduced on-site services for businesses and home users.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Today & Beyond</h3>
                <p className="text-gray-700">
                  Today, we're a team of 15+ experts serving customers across multiple cities. 
                  We continue to innovate and adapt to new technologies while maintaining our 
                  commitment to quality service.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 text-lg italic text-center">
                "To provide reliable, affordable, and expert computer repair services that 
                empower individuals and businesses to maximize their technology investments."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;