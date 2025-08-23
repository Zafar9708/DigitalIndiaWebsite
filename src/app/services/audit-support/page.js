'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AuditSupport() {
  const [activeStep, setActiveStep] = useState(0);

  const auditTypes = [
    {
      icon: "🏢",
      title: "Internal Audits",
      description: "Comprehensive internal control assessments and process evaluations"
    },
    {
      icon: "📊",
      title: "External Audits",
      description: "Preparation and support for external auditor examinations"
    },
    {
      icon: "🔍",
      title: "Compliance Audits",
      description: "Regulatory compliance verification and reporting"
    },
    {
      icon: "💻",
      title: "IT Audits",
      description: "Technology system controls and security assessments"
    }
  ];

  const processSteps = [
    {
      step: "Preparation",
      description: "Document gathering and preliminary review"
    },
    {
      step: "Assessment",
      description: "Risk evaluation and control testing"
    },
    {
      step: "Reporting",
      description: "Findings documentation and recommendations"
    },
    {
      step: "Resolution",
      description: "Issue addressing and implementation support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      {/* Header Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800/10 to-gray-700/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-600 rounded-3xl mb-8">
            <span className="text-4xl">🔍</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-transparent">
              Audit Support
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Expert audit preparation and support services to ensure compliance, 
            identify opportunities for improvement, and navigate the audit process with confidence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-gray-700/25 transition-all"
            >
              Get Audit Support
            </Link>
            <Link 
              href="/resources" 
              className="border-2 border-gray-600/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-600/10 transition-all"
            >
              Audit Resources
            </Link>
          </div>
        </div>
      </header>

      {/* Audit Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Audit Support</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Expert assistance for all types of audits and examinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditTypes.map((type, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-400/50 transition-all duration-300 group text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-300">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Audit Support Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach to successful audit preparation and execution
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-700 to-gray-600"></div>
            <div className="space-y-12 pl-16">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-8 top-0 w-6 h-6 bg-gray-600 rounded-full border-4 border-gray-900"></div>
                  <div 
                    className={`bg-gray-800/30 p-6 rounded-2xl border backdrop-blur-sm cursor-pointer transition-all ${
                      activeStep === index ? 'border-gray-500/50' : 'border-gray-700/50 hover:border-gray-400/30'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-300">Step {index + 1}: {step.step}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Audit Support?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "⏱️", title: "Time Savings", desc: "Reduce preparation time by up to 60%" },
              { icon: "💰", title: "Cost Reduction", desc: "Minimize audit fees and potential penalties" },
              { icon: "🛡️", title: "Risk Mitigation", desc: "Identify and address issues before auditors do" },
              { icon: "📈", title: "Process Improvement", desc: "Turn audit findings into business improvements" },
              { icon: "🎯", title: "Expert Guidance", desc: "Experienced professionals with audit expertise" },
              { icon: "⚖️", title: "Compliance", desc: "Ensure full regulatory compliance" }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm text-center">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-300">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-700/10 to-gray-600/10 rounded-2xl p-12 border border-gray-600/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Audit?</h2>
            <p className="text-gray-300 text-xl mb-8">
              Let our experts guide you through the audit process with confidence and peace of mind
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-gray-700/25 transition-all"
              >
                Get Audit Support
              </Link>
              <Link 
                href="/resources" 
                className="border-2 border-gray-600/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-600/10 transition-all"
              >
                Download Checklist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}