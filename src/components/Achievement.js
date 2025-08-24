'use client';
import Image from 'next/image';

const Achievement = () => {
  const achievements = [
    {
      year: "2012",
      title: "First 1000 Repairs",
      description: "Reached our first major milestone of servicing 1000 devices",
      image: "https://images.computerhistory.org/timeline/timeline_computers_1973.wang2200.jpg" // Replace with achievement image
    },
    {
      year: "2015",
      title: "Business Expansion",
      description: "Opened our second service center and introduced on-site services",
      image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/nothing-113900579-16x9_0.jpg?VersionId=3ejBVszAmvP8hR_3ThJ0mP39EJwTGveB" // Replace with achievement image
    },
    {
      year: "2018",
      title: "Quality Certification",
      description: "Received ISO certification for our quality management processes",
      image: "https://www.mortonmccann.com/hs-fs/hubfs/Imported%20sitepage%20images/ISO9001_1200x627-1024x535.jpg?width=1024&height=535&name=ISO9001_1200x627-1024x535.jpg" // Replace with achievement image
    },
    {
      year: "2023",
      title: "10K+ Customers",
      description: "Celebrated serving over 10,000 satisfied customers across India",
      image: "https://www.nextiva.com/cdn-cgi/image/width=1979,height=1115,fit=cover,gravity=auto,format=auto/blog/wp-content/uploads/sites/10/customer-service-examples-feature-image2.png?resize=1024,577" // Replace with achievement image
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Milestones that mark our journey of growth and excellence in service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                    {achievement.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                  
                  {/* Decorative element */}
                  <div className="mt-4 w-12 h-1 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="mt-16 bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Best Computer Repair Service 2022",
              "Customer Choice Award 2021",
              "Excellence in IT Services 2020"
            ].map((award, index) => (
              <div key={index} className="text-center p-6 bg-gray-700 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-white">{award}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;