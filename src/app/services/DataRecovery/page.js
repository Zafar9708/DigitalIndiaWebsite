'use client';
import { useState } from 'react';

const DataRecovery = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  const recoveryScenarios = [
    {
      type: "Accidental Deletion",
      successRate: "95%",
      description: "Recover files deleted by mistake",
      symptoms: ["Recently deleted files", "Empty recycle bin", "Missing documents"],
      process: "Quick scan and file restoration"
    },
    {
      type: "Formatting Issues",
      successRate: "90%",
      description: "Recover data from formatted drives",
      symptoms: ["Drive shows as empty", "Formatting error", "Unreadable drive"],
      process: "Deep scan and partition recovery"
    },
    {
      type: "Hardware Failure",
      successRate: "85%",
      description: "Data recovery from damaged storage devices",
      symptoms: ["Clicking sounds", "Not detected", "Physical damage"],
      process: "Clean room recovery if needed"
    },
    {
      type: "Virus Attack",
      successRate: "92%",
      description: "Recover data encrypted or hidden by malware",
      symptoms: ["Ransomware message", "Missing files", "Corrupted data"],
      process: "Malware removal and data extraction"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">💾</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Data Recovery Services</h2>
        <p className="text-gray-600">Professional data recovery from all storage devices with high success rates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recovery Scenarios */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Data Loss Scenarios We Handle</h3>
          
          <div className="space-y-4">
            {recoveryScenarios.map((scenario, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  activeScenario === index
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
                onClick={() => setActiveScenario(index)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <h4 className="font-semibold text-gray-900 mr-3">{scenario.type}</h4>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                        {scenario.successRate} success
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{scenario.description}</p>
                  </div>
                  <span className="text-2xl">{index === 0 ? '🗑️' : index === 1 ? '📀' : index === 2 ? '💥' : '🦠'}</span>
                </div>
                
                {activeScenario === index && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="mb-4">
                      <span className="text-sm text-gray-600">Recovery Process:</span>
                      <p className="font-semibold text-purple-600 mt-1">{scenario.process}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Common Symptoms:</span>
                      <ul className="mt-2 space-y-1">
                        {scenario.symptoms.map((symptom, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
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

        {/* Recovery Process and Features */}
        <div>
          <div className="bg-purple-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Our Data Recovery Process</h3>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Free Evaluation",
                  description: "We assess your device and provide recovery chances and quote"
                },
                {
                  step: "2",
                  title: "Data Recovery",
                  description: "Our experts use advanced tools to recover your valuable data"
                },
                {
                  step: "3",
                  title: "Verification",
                  description: "You verify the recovered files before payment"
                },
                {
                  step: "4",
                  title: "Delivery",
                  description: "Data delivered on new storage media with encryption"
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Devices We Recover From</h3>
            <div className="grid grid-cols-2 gap-3">
              {['HDD', 'SSD', 'USB Drives', 'Memory Cards', 'Laptops', 'Servers', 'RAID Arrays', 'External HDD'].map((device, index) => (
                <div key={index} className="flex items-center bg-white p-3 rounded-lg">
                  <span className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center mr-2">
                    <span className="text-xs">💾</span>
                  </span>
                  <span className="text-sm font-medium text-gray-800">{device}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-yellow-800">
                ⚠️ <strong>Stop using the device</strong> immediately to prevent further data loss
              </p>
            </div>
            
            <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors w-full">
              Emergency Data Recovery
            </button>
            <p className="text-sm text-gray-600 mt-2">24/7 emergency service available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataRecovery;