'use client';
import { useState } from 'react';

const DesktopRepair = () => {
  const [activeProblem, setActiveProblem] = useState(0);

  const commonProblems = [
    {
      title: "Hardware Diagnostics",
      description: "Comprehensive testing of all desktop components",
      issues: ["No power", "Random crashes", "Performance issues"],
      time: "1-2 hours",
      cost: "₹500 (free if repair done)"
    },
    {
      title: "Power Supply Issues",
      description: "PSU replacement and power-related problems",
      issues: ["Won't turn on", "Random shutdowns", "Electrical issues"],
      time: "1-2 hours",
      cost: "₹2,000 - ₹5,000"
    },
    {
      title: "Component Replacement",
      description: "Faulty part identification and replacement",
      issues: ["RAM failure", "HDD/SSD issues", "Graphics card problems"],
      time: "2-3 hours",
      cost: "Cost of part + ₹1,000 labor"
    },
    {
      title: "Cooling System Repair",
      description: "Overheating issues and cooling solution installation",
      issues: ["Overheating", "Loud fan noise", "System throttling"],
      time: "2-3 hours",
      cost: "₹1,500 - ₹4,000"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🖥️</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Desktop Computer Repair</h2>
        <p className="text-gray-600">Comprehensive repair services for desktop computers and workstations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Service Overview */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Desktop Repair Services</h3>
          
          <div className="space-y-4 mb-6">
            {commonProblems.map((problem, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  activeProblem === index
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
                onClick={() => setActiveProblem(index)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{problem.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{problem.description}</p>
                  </div>
                  <span className="text-2xl">{index === 0 ? '🔍' : index === 1 ? '⚡' : index === 2 ? '🔧' : '❄️'}</span>
                </div>
                
                {activeProblem === index && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-600">Time:</span>
                        <p className="font-semibold text-green-600">{problem.time}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Cost:</span>
                        <p className="font-semibold text-green-600">{problem.cost}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Common Issues:</span>
                      <ul className="mt-2 space-y-1">
                        {problem.issues.map((issue, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2">On-Site Service Available</h4>
            <p className="text-sm text-gray-600">We offer on-site repair services for businesses and home users</p>
          </div>
        </div>

        {/* Benefits and Features */}
        <div>
          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Desktop Repair Advantages</h3>
            <div className="space-y-3">
              {[
                "🔄 Component-level repair to save costs",
                "📊 Performance optimization included",
                "🛡️ Dust cleaning and thermal paste application",
                "🔧 Cable management and organization",
                "📝 Detailed diagnostic report",
                "⏰ Same-day service for common issues"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">We Repair All Types</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Gaming PCs', 'Workstations', 'Office Computers', 'Home PCs', 'All-in-Ones', 'Custom Builds'].map((type, index) => (
                <div key={index} className="flex items-center bg-white p-3 rounded-lg">
                  <span className="w-6 h-6 bg-green-100 rounded flex items-center justify-center mr-2">
                    <span className="text-xs">✔️</span>
                  </span>
                  <span className="text-sm font-medium text-gray-800">{type}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors w-full">
              Schedule Desktop Repair
            </button>
            <p className="text-sm text-gray-600 mt-2">Free diagnostic for all desktop computers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopRepair;