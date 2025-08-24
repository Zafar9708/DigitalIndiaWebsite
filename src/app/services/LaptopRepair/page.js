'use client';
import { useState } from 'react';

const LaptopRepair = () => {
  const [activeIssue, setActiveIssue] = useState(0);

  const commonIssues = [
    {
      title: "Screen Replacement",
      description: "Cracked or damaged screen repair with genuine parts",
      symptoms: ["Black screen", "Flickering display", "Cracks or lines"],
      time: "2-4 hours",
      cost: "₹3,000 - ₹8,000"
    },
    {
      title: "Keyboard Issues",
      description: "Faulty keyboard repair or replacement",
      symptoms: ["Keys not working", "Sticky keys", "Physical damage"],
      time: "1-2 hours",
      cost: "₹1,500 - ₹4,000"
    },
    {
      title: "Battery Problems",
      description: "Battery replacement and power issues resolution",
      symptoms: ["Not charging", "Quick drainage", "Swollen battery"],
      time: "1 hour",
      cost: "₹2,000 - ₹5,000"
    },
    {
      title: "Motherboard Repair",
      description: "Complex motherboard diagnostics and repair",
      symptoms: ["No power", "Overheating", "Random shutdowns"],
      time: "4-8 hours",
      cost: "₹4,000 - ₹12,000"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">💻</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Laptop Repair</h2>
        <p className="text-gray-600">Expert repair services for all laptop brands and models</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Common Issues */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Common Laptop Issues We Fix</h3>
          <div className="space-y-4">
            {commonIssues.map((issue, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  activeIssue === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setActiveIssue(index)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{issue.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{issue.description}</p>
                  </div>
                  <span className="text-2xl">{index === 0 ? '🖥️' : index === 1 ? '⌨️' : index === 2 ? '🔋' : '🔧'}</span>
                </div>
                
                {activeIssue === index && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-600">Time:</span>
                        <p className="font-semibold text-blue-600">{issue.time}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Cost:</span>
                        <p className="font-semibold text-green-600">{issue.cost}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Common Symptoms:</span>
                      <ul className="mt-2 space-y-1">
                        {issue.symptoms.map((symptom, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service Details */}
        <div>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose Our Laptop Repair Service?</h3>
            <div className="space-y-3">
              {[
                "✅ Certified technicians with brand-specific training",
                "✅ Genuine replacement parts with warranty",
                "✅ Free diagnostic assessment",
                "✅ 90-day service warranty on repairs",
                "✅ Quick turnaround time (most repairs in 24-48 hours)",
                "✅ Transparent pricing with no hidden costs"
              ].map((feature, index) => (
                <p key={index} className="text-gray-700 text-sm">{feature}</p>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Brands We Service</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Dell', 'HP', 'Lenovo', 'Apple', 'Asus', 'Acer', 'MSI', 'Samsung'].map((brand, index) => (
                <div key={index} className="flex items-center bg-white p-3 rounded-lg">
                  <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-2">
                    <span className="text-xs">🔧</span>
                  </span>
                  <span className="text-sm font-medium text-gray-800">{brand}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors w-full">
              Book Laptop Repair
            </button>
            <p className="text-sm text-gray-600 mt-2">Free pickup and delivery available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopRepair;