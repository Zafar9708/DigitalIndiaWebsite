'use client';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: '📍',
      title: 'Visit Our Workshop',
      details: [
        'Pilkhua, Innovation Road',
        'Ghazibad, Uttar Pradesh - 245304',
        'Near Pilkhua Railway Station'
      ],
      action: 'Get Directions →'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      details: [
        'Primary: +91  9990473018',
        'Secondary: +91  9990473018',
        'Emergency: +91  9990473018'
      ],
      action: 'Call Now'
    },
    {
      icon: '✉️',
      title: 'Email Support',
      details: [
        'General: info@digitalindiatech.com',
        'Support: support@digitalindiatech.com',
        'Business: sales@digitalindiatech.com'
      ],
      action: 'Send Email'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: [
        'Available: Mon-Sat 9AM-8PM',
        'Response time: < 5 minutes',
        'Quick technical assistance'
      ],
      action: 'Start Chat'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
      
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl mr-4 flex-shrink-0">
              {method.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
              {method.details.map((detail, i) => (
                <p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>
              ))}
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-800 mt-2">
                {method.action}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Banner */}
      <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-3">🚨</span>
          <h3 className="font-semibold text-red-900">Emergency Service</h3>
        </div>
        <p className="text-red-700 text-sm mb-3">
          Need immediate assistance? Our emergency team is available 24/7 for critical issues.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
          Emergency Hotline: +91  9990473018
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;