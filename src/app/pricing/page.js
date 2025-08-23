'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: "$99",
      yearlyPrice: "$999",
      features: [
        "Basic Bookkeeping",
        "Monthly Financial Reports",
        "Tax Preparation (Basic)",
        "Email Support",
        "Quarterly Review",
        "Up to 50 transactions/month"
      ],
      cta: "Get Started",
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: "$299",
      yearlyPrice: "$2,999",
      features: [
        "Advanced Bookkeeping",
        "Weekly Financial Reports",
        "Tax Planning & Preparation",
        "Priority Support",
        "Monthly Financial Review",
        "CFO Consultation (2 hrs/month)",
        "Up to 200 transactions/month",
        "Payroll Management"
      ],
      cta: "Choose Plan",
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      description: "Complete financial management solution",
      monthlyPrice: "$599",
      yearlyPrice: "$5,999",
      features: [
        "Full-Service Accounting",
        "Real-time Financial Dashboard",
        "Strategic Tax Optimization",
        "24/7 Dedicated Support",
        "Weekly Financial Strategy Sessions",
        "Unlimited CFO Consultation",
        "Unlimited Transactions",
        "Advanced Analytics & Reporting",
        "Custom Integration",
        "Multi-currency Support"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const savings = {
    monthly: " billed monthly",
    yearly: " billed yearly (save 15%)"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Choose the perfect plan for your business needs. All plans include expert support 
            and comprehensive financial services.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center mb-12">
            <span className={`mr-4 ${billingCycle === 'monthly' ? 'text-cyan-400' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-gray-700 rounded-full p-1 transition-colors"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-cyan-500 rounded-full transition-transform ${
                billingCycle === 'yearly' ? 'transform translate-x-8' : ''
              }`}></div>
            </button>
            <span className={`ml-4 ${billingCycle === 'yearly' ? 'text-cyan-400' : 'text-gray-400'}`}>
              Yearly <span className="text-green-400 text-sm">(Save 15%)</span>
            </span>
          </div>
        </div>
      </header>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl shadow-cyan-500/20'
                    : 'border-gray-700/50 bg-gray-800/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    {billingCycle === 'monthly' ? savings.monthly : savings.yearly}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Comparison</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Detailed comparison of all features across our pricing plans
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold">Starter</th>
                    <th className="text-center py-4 px-6 font-semibold">Professional</th>
                    <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Monthly Financial Reports", "✓", "✓", "✓"],
                    ["Weekly Financial Reports", "✗", "✓", "✓"],
                    ["Real-time Dashboard", "✗", "✗", "✓"],
                    ["Tax Preparation", "Basic", "Advanced", "Strategic"],
                    ["CFO Consultation", "✗", "2 hrs/month", "Unlimited"],
                    ["Support", "Email", "Priority", "24/7 Dedicated"],
                    ["Transactions/month", "50", "200", "Unlimited"],
                    ["Payroll Management", "✗", "✓", "✓"],
                    ["Multi-currency", "✗", "✗", "✓"],
                    ["Custom Integration", "✗", "✗", "✓"]
                  ].map(([feature, starter, professional, enterprise], index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-700/20' : ''}>
                      <td className="py-4 px-6 text-gray-300">{feature}</td>
                      <td className="py-4 px-6 text-center">
                        <span className={starter === "✗" ? "text-red-400" : "text-cyan-400"}>
                          {starter}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={professional === "✗" ? "text-red-400" : "text-cyan-400"}>
                          {professional}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={enterprise === "✗" ? "text-red-400" : "text-cyan-400"}>
                          {enterprise}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated based on your billing cycle."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees for any of our plans. You only pay the monthly or yearly subscription fee."
              },
              {
                question: "Do you offer discounts for non-profits?",
                answer: "Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more information."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                question: "Can I cancel my subscription?",
                answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 text-xl mb-8">
              Join thousands of businesses that trust Atlabb Accounting with their financial success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 hover:bg-white/10 transition-all"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}