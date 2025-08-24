'use client';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch With Us</h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Ready to get your devices fixed? Contact our expert team for fast, reliable computer repair services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: '📞',
              title: 'Call Us',
              content: '+91 98765 43210',
              subtitle: '24/7 Support Available'
            },
            {
              icon: '✉️',
              title: 'Email Us',
              content: 'info@digitalindiatech.com',
              subtitle: 'Response within 2 hours'
            },
            {
              icon: '🕒',
              title: 'Working Hours',
              content: 'Mon - Sat: 9AM - 8PM',
              subtitle: 'Sunday: Emergency Only'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-blue-200 font-medium">{item.content}</p>
              <p className="text-blue-100 text-sm mt-2">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;