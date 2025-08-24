'use client';
import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does a typical repair take?",
      answer: "Most repairs are completed within 24-48 hours. Simple fixes like software installation or virus removal can be done same-day, while complex hardware repairs may take 2-3 days depending on part availability."
    },
    {
      question: "Do you offer pickup and delivery service?",
      answer: "Yes! We offer free pickup and delivery within 10km of our location. For areas beyond 10km, a nominal delivery charge may apply. Contact us for specific pricing."
    },
    {
      question: "What is your warranty policy?",
      answer: "We provide a 90-day warranty on all repairs and a 1-year warranty on replaced parts. The warranty covers both labor and parts for the specified period."
    },
    {
      question: "Can I get a free diagnosis?",
      answer: "Absolutely! We offer free diagnostic services for all devices. Our technicians will examine your device and provide a detailed quote before any work begins."
    },
    {
      question: "Do you work on all brands and models?",
      answer: "Yes, we service all major brands including Dell, HP, Lenovo, Apple, Asus, Acer, and more. Our technicians are certified and experienced with various models and configurations."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI payments, credit/debit cards, and bank transfers. Payment is due upon completion of the repair service."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900">{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Support */}
      <div className="mt-8 bg-blue-50 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-3">Still have questions?</h3>
        <p className="text-gray-700 mb-4">Our support team is here to help you with any questions you may have.</p>
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            📞 Call Support
          </button>
          <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            💬 Live Chat
          </button>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="mt-6 p-4 bg-gray-50 rounded-xl">
        <h4 className="font-semibold text-gray-900 mb-2">📞 Quick Contact</h4>
        <div className="space-y-2 text-sm">
          <p className="text-gray-600">Phone: <strong>+91  9990473018</strong></p>
          <p className="text-gray-600">Email: <strong>support@digitalindiatech.com</strong></p>
          <p className="text-gray-600">WhatsApp: <strong>+91  9990473018</strong></p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;