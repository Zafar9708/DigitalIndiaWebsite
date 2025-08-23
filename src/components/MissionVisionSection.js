// 'use client';
// import React from 'react';
// import Link from 'next/link';

// const mediumGreen = '#38A169';
// const mediumYellow = '#F6E05E';

// export default function ServicesSection() {
//   return (
//     <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-5 py-2 bg-medium-green/10 rounded-full mb-6">
//             <span className="text-medium-green font-semibold text-sm uppercase tracking-wider">OUR EXPERTISE</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Comprehensive <span className="text-medium-green">Accounting</span> Services
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Professional financial solutions designed to optimize your business performance and drive sustainable growth
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Accounting Services Card */}
//           <div 
//             className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500 border-l-4 border-medium-green group"
//           >
//             <div className="flex items-center mb-8">
//               <div className="p-4 rounded-2xl mr-6 bg-medium-green/10 group-hover:bg-medium-green/20 transition-colors duration-300">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-10 w-10"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke={mediumGreen}
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
//                 </svg>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900 group-hover:text-medium-green transition-colors duration-300">
//                 Accounting Services
//               </h2>
//             </div>
            
//             <ul className="text-gray-700 space-y-5 mb-10">
//               {[ 
//                 'Complete bookkeeping and financial record maintenance',
//                 'Accounts payable and receivable management',
//                 'Bank reconciliation and financial statement preparation',
//                 'Monthly, quarterly, and annual financial reporting',
//                 'Cash flow management and forecasting'
//               ].map((service, idx) => (
//                 <li key={idx} className="flex items-start group">
//                   <div className="mr-4 mt-1">
//                     <div className="w-6 h-6 bg-medium-green/20 rounded-full flex items-center justify-center group-hover:bg-medium-green transition-colors duration-300">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4 text-medium-green group-hover:text-white transition-colors duration-300"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                   </div>
//                   <span className="text-lg text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{service}</span>
//                 </li>
//               ))}
//             </ul>
            
//             <Link href="/services/accounting">
//               <button
//                 className="w-full bg-medium-green hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group-hover:shadow-lg transform group-hover:-translate-y-1"
//               >
//                 Explore Accounting Services
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </button>
//             </Link>
//           </div>

//           {/* Tax & Advisory Services Card */}
//           <div 
//             className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500 border-l-4 border-medium-yellow group"
//           >
//             <div className="flex items-center mb-8">
//               <div className="p-4 rounded-2xl mr-6 bg-medium-yellow/10 group-hover:bg-medium-yellow/20 transition-colors duration-300">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-10 w-10"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke={mediumYellow}
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
//                 </svg>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900 group-hover:text-medium-yellow transition-colors duration-300">
//                 Tax & Advisory Services
//               </h2>
//             </div>
            
//             <div className="space-y-8 mb-10">
//               {[
//                 {
//                   title: 'Tax Planning & Preparation',
//                   desc: 'Comprehensive tax strategy and filing services for businesses and individuals',
//                   icon: (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-7 w-7"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke={mediumYellow}
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                     </svg>
//                   )
//                 },
//                 {
//                   title: 'Financial Consulting',
//                   desc: 'Strategic financial advice to optimize business performance and growth',
//                   icon: (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-7 w-7"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke={mediumYellow}
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                     </svg>
//                   )
//                 },
//                 {
//                   title: 'Business Advisory',
//                   desc: 'Expert guidance on financial decisions, investments, and business strategy',
//                   icon: (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-7 w-7"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke={mediumYellow}
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                   )
//                 }
//               ].map(({ title, desc, icon }, idx) => (
//                 <div key={idx} className="flex items-start group">
//                   <div
//                     className="p-3 rounded-xl mr-5 bg-medium-yellow/10 group-hover:bg-medium-yellow/20 transition-colors duration-300"
//                   >
//                     {icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-medium-yellow transition-colors duration-300">{title}</h3>
//                     <p className="text-gray-600">{desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <Link href="/services/tax-advisory">
//               <button
//                 className="w-full border-2 border-medium-yellow text-medium-yellow hover:bg-medium-yellow hover:text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group-hover:shadow-lg transform group-hover:-translate-y-1"
//               >
//                 Discover Tax Solutions
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Additional Services Overview */}
//         <div className="mt-20 text-center">
//           <h3 className="text-3xl font-bold text-gray-900 mb-12">Additional Professional Services</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Payroll Management',
//                 desc: 'Complete payroll processing and compliance services',
//                 icon: '💰'
//               },
//               {
//                 title: 'Audit Support',
//                 desc: 'Preparation and representation during financial audits',
//                 icon: '📊'
//               },
//               {
//                 title: 'CFO Services',
//                 desc: 'Part-time CFO services for growing businesses',
//                 icon: '👔'
//               }
//             ].map((service, idx) => (
//               <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
//                 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
//                 <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-medium-green transition-colors duration-300">{service.title}</h4>
//                 <p className="text-gray-600">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import React from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">OUR EXPERTISE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Accounting</span> Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional financial solutions designed to optimize your business performance and drive sustainable growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Accounting Services Card */}
          <div 
            className="bg-white/5 backdrop-blur-md rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 border-l-4 border-cyan-400 group border border-white/10"
          >
            <div className="flex items-center mb-8">
              <div className="p-4 rounded-2xl mr-6 bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Accounting Services
              </h2>
            </div>
            
            <ul className="text-gray-300 space-y-5 mb-10">
              {[ 
                'Complete bookkeeping and financial record maintenance',
                'Accounts payable and receivable management',
                'Bank reconciliation and financial statement preparation',
                'Monthly, quarterly, and annual financial reporting',
                'Cash flow management and forecasting'
              ].map((service, idx) => (
                <li key={idx} className="flex items-start group">
                  <div className="mr-4 mt-1">
                    <div className="w-6 h-6 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover:bg-cyan-400 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-cyan-400 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300">{service}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/services/accounting">
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group-hover:shadow-lg transform group-hover:-translate-y-1"
              >
                Explore Accounting Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Tax & Advisory Services Card */}
          <div 
            className="bg-white/5 backdrop-blur-md rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 border-l-4 border-purple-400 group border border-white/10"
          >
            <div className="flex items-center mb-8">
              <div className="p-4 rounded-2xl mr-6 bg-purple-400/10 group-hover:bg-purple-400/20 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                Tax & Advisory Services
              </h2>
            </div>
            
            <div className="space-y-8 mb-10">
              {[
                {
                  title: 'Tax Planning & Preparation',
                  desc: 'Comprehensive tax strategy and filing services for businesses and individuals',
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )
                },
                {
                  title: 'Financial Consulting',
                  desc: 'Strategic financial advice to optimize business performance and growth',
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Business Advisory',
                  desc: 'Expert guidance on financial decisions, investments, and business strategy',
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                }
              ].map(({ title, desc, icon }, idx) => (
                <div key={idx} className="flex items-start group">
                  <div
                    className="p-3 rounded-xl mr-5 bg-purple-400/10 group-hover:bg-purple-400/20 transition-colors duration-300"
                  >
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{title}</h3>
                    <p className="text-gray-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/services/tax-advisory">
              <button
                className="w-full border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group-hover:shadow-lg transform group-hover:-translate-y-1"
              >
                Discover Tax Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Additional Services Overview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">Additional Professional Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Payroll Management',
                desc: 'Complete payroll processing and compliance services',
                icon: '💰',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Audit Support',
                desc: 'Preparation and representation during financial audits',
                icon: '📊',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'CFO Services',
                desc: 'Part-time CFO services for growing businesses',
                icon: '👔',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative">
                <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 backdrop-blur-md border border-white/10 transform transition-all duration-500 group-hover:scale-105`}>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h4>
                  <p className="text-gray-200">{service.desc}</p>
                </div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Discover how our comprehensive accounting services can transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
                  Schedule Consultation
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-white/20 text-white px-10 py-4 rounded-xl font-semibold hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                  View All Services
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}