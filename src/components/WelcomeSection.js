// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function WelcomeSection() {
//   return (
//     <div className="w-full bg-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      
//       {/* Abstract background shapes */}
//       <div className="absolute top-0 left-0 w-1/3 h-96 bg-gradient-to-br from-medium-green/5 to-transparent rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
//       <div className="absolute bottom-0 right-0 w-1/2 h-80 bg-gradient-to-tr from-medium-yellow/5 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Modern header with split layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
//           <div>
//             <div className="inline-flex items-center px-4 py-2 bg-medium-green/10 rounded-full mb-8">
//               <div className="w-3 h-3 bg-medium-green rounded-full mr-3 animate-pulse"></div>
//               <span className="text-medium-green font-semibold text-sm uppercase tracking-wider">Financial Excellence</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
//               Transforming <span className="text-medium-green">Business</span> Through <span className="text-medium-yellow">Strategic</span> Accounting
//             </h2>
//           </div>
          
//           <div className="flex items-center">
//             <p className="text-xl text-gray-600 leading-relaxed">
//               At Atlabb Accounting, we blend cutting-edge technology with financial expertise to deliver 
//               unparalleled accounting solutions that drive growth, ensure compliance, and maximize your financial potential.
//             </p>
//           </div>
//         </div>

//         {/* Main content with innovative layout */}
//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">
          
//           {/* Left content - Features */}
//           <div className="space-y-8">
//             {[
//               {
//                 icon: (
//                   <svg className="w-10 h-10 text-medium-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                   </svg>
//                 ),
//                 title: "Precision Accounting",
//                 desc: "Meticulous attention to detail in every financial transaction and report"
//               },
//               {
//                 icon: (
//                   <svg className="w-10 h-10 text-medium-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
//                   </svg>
//                 ),
//                 title: "Rapid Solutions",
//                 desc: "Quick turnaround times without compromising on quality or accuracy"
//               },
//               {
//                 icon: (
//                   <svg className="w-10 h-10 text-medium-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
//                   </svg>
//                 ),
//                 title: "Dedicated Experts",
//                 desc: "Seasoned CPAs committed to your financial success and business growth"
//               }
//             ].map((feature, index) => (
//               <div key={index} className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-medium-green/20">
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-14 h-14 bg-medium-green/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-medium-green transition-colors">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {feature.desc}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Center - Main image with modern frame */}
//           <div className="relative">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
//               <div className="aspect-[4/5] relative">
//                 <Image
//                   src="/images/accounting-dashboard.jpg"
//                   alt="Modern Accounting Solutions"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               </div>
              
//               {/* Floating badge */}
//               <div className="absolute -top-5 -right-5 bg-medium-green text-white px-6 py-3 rounded-2xl shadow-lg z-20">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">15+</div>
//                   <div className="text-xs uppercase tracking-wide">Years Experience</div>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative elements */}
//             <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-medium-yellow/20 rounded-2xl rotate-12"></div>
//             <div className="absolute -z-10 -top-6 -right-6 w-28 h-28 bg-medium-green/20 rounded-2xl -rotate-12"></div>
//           </div>

//           {/* Right content - Additional features and CTA */}
//           <div className="space-y-8">
//             {[
//               {
//                 icon: (
//                   <svg className="w-10 h-10 text-medium-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
//                   </svg>
//                 ),
//                 title: "Growth Strategy",
//                 desc: "Data-driven insights to fuel your business expansion and profitability"
//               },
//               {
//                 icon: (
//                   <svg className="w-10 h-10 text-medium-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
//                   </svg>
//                 ),
//                 title: "Full Compliance",
//                 desc: "Stay ahead of regulatory changes with our expert guidance"
//               },
//               {
//                 icon: (
//                   <svg className="w-10 h-10 text-medium-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
//                   </svg>
//                 ),
//                 title: "Advanced Reporting",
//                 desc: "Comprehensive financial reports that provide actionable insights"
//               }
//             ].map((feature, index) => (
//               <div key={index} className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-medium-green/20">
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-14 h-14 bg-medium-green/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-medium-green transition-colors">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {feature.desc}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom CTA section */}
//         <div className="mt-20 text-center">
//           <div className="bg-gradient-to-r from-medium-green/5 to-medium-yellow/5 rounded-3xl p-12 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-medium-green/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-56 h-56 bg-medium-yellow/10 rounded-full translate-y-32 -translate-x-32"></div>
            
//             <div className="relative z-10">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Financial Management?</h3>
//               <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
//                 Join hundreds of businesses that trust Atlabb Accounting for their financial success
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <Link href="/services">
//                   <button className="group px-10 py-5 bg-medium-green text-gary-950 rounded-2xl hover:bg-green-600 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center mx-auto sm:mx-0">
//                     Discover Our Services
//                     <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                     </svg>
//                   </button>
//                 </Link>
//                 <Link href="/contact">
//                   <button className="px-10 py-5 border-2 border-medium-yellow text-medium-yellow rounded-2xl hover:bg-medium-yellow hover:text-gray-900 transition-all duration-300 text-lg font-semibold">
//                     Schedule Free Consultation
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WelcomeSection() {
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
        
        {/* Modern header with split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">FINANCIAL EXCELLENCE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Transforming <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Business</span> Through <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Strategic</span> Accounting
            </h2>
          </div>
          
          <div className="flex items-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              At Atlabb Accounting, we blend cutting-edge technology with financial expertise to deliver 
              unparalleled accounting solutions that drive growth, ensure compliance, and maximize your financial potential.
            </p>
          </div>
        </div>

        {/* Main content with innovative layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">
          
          {/* Left content - Features */}
          <div className="space-y-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ),
                title: "Precision Accounting",
                desc: "Meticulous attention to detail in every financial transaction and report"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                ),
                title: "Rapid Solutions",
                desc: "Quick turnaround times without compromising on quality or accuracy"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                ),
                title: "Dedicated Experts",
                desc: "Seasoned CPAs committed to your financial success and business growth"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-cyan-400/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center group-hover:bg-cyan-400/20 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center - Main image with modern frame */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
              <div className="aspect-[4/5] relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-cyan-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Financial Clarity</h4>
                    <p className="text-gray-300">Advanced accounting dashboard</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 bg-cyan-500 text-white px-6 py-3 rounded-2xl shadow-lg z-20">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs uppercase tracking-wide">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-2xl rotate-12"></div>
            <div className="absolute -z-10 -top-6 -right-6 w-28 h-28 bg-blue-500/20 rounded-2xl -rotate-12"></div>
          </div>

          {/* Right content - Additional features and CTA */}
          <div className="space-y-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                ),
                title: "Growth Strategy",
                desc: "Data-driven insights to fuel your business expansion and profitability"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                ),
                title: "Full Compliance",
                desc: "Stay ahead of regulatory changes with our expert guidance"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                  </svg>
                ),
                title: "Advanced Reporting",
                desc: "Comprehensive financial reports that provide actionable insights"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-cyan-400/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center group-hover:bg-cyan-400/20 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA section */}
        {/* <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl p-12 relative overflow-hidden border border-white/10 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-500/10 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Financial Management?</h3>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join hundreds of businesses that trust Atlabb Accounting for their financial success
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/services">
                  <button className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 text-lg font-semibold transform hover:-translate-y-1 flex items-center mx-auto sm:mx-0">
                    Discover Our Services
                    <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-10 py-5 border-2 border-white/20 text-white rounded-2xl hover:border-white/40 hover:bg-white/10 transition-all duration-300 text-lg font-semibold backdrop-blur-sm">
                    Schedule Free Consultation
                  </button>
                </Link>
              </div>
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