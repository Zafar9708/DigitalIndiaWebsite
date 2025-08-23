


// 'use client';
// import { useRef, useEffect } from "react";
// import Link from "next/link";

// export default function HeroSection() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const videoElement = videoRef.current;
    
//     if (videoElement) {
//       // Try to play the video
//       videoElement.play().catch(error => {
//         console.log("Autoplay prevented:", error);
//       });
//     }
//   }, []);

//   return (
//     <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
//       {/* Floating particles */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-cyan-500/30 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${i * 0.5}s`,
//               animationDuration: `${15 + Math.random() * 10}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Video Background Container */}
//       <div className="absolute inset-0 z-0">
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className="w-full h-full object-cover"
//           poster="/images/hero-poster.jpg"
//         >
//           <source src="/videos/hero-background.mp4" type="video/mp4" />
//           <source src="/videos/hero-background.webm" type="video/webm" />
//           <img 
//             src="/images/hero-fallback.jpg" 
//             alt="Atlabb Accounting Services" 
//             className="w-full h-full object-cover"
//           />
//         </video>
        
//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/50"></div>
        
//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
//       </div>

//       {/* Text Content */}
//       <div className="relative z-10 h-full flex items-center justify-center text-center">
//         <div className="max-w-4xl mx-auto px-4">
//           {/* Header badge */}
//           <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
//             <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
//             <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">FINANCIAL EXCELLENCE</span>
//           </div>

//           {/* Main heading with gradient text */}
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Professional Accounting
//             </span>
//             <br />
//             <span className="text-white">Solutions for Growth</span>
//           </h1>
          
//           {/* Subheading */}
//           <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
//             At Atlabb Accounting, we provide comprehensive financial services including 
//             bookkeeping, tax preparation, financial consulting, and strategic business 
//             advisory to help your business thrive and grow.
//           </p>

//           {/* Stats indicators */}
//           <div className="grid grid-cols-3 gap-8 mb-10 max-w-2xl mx-auto">
//             {[
//               { number: '15+', label: 'Years Experience' },
//               { number: '250+', label: 'Happy Clients' },
//               { number: '98%', label: 'Satisfaction Rate' }
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-300 text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Link
//               href="/contact"
//               className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
//             >
//               Get Free Consultation
//               <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//               </svg>
//             </Link>
//             <Link
//               href="/services"
//               className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
//             >
//               Explore Our Services
//             </Link>
//           </div>

//           {/* Trust indicators */}
//           <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-300 text-sm">
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
//               <span>Certified Professional Accountants</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
//               <span>AI-Powered Financial Tools</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
//               <span>24/7 Client Support</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
//         <div className="animate-bounce">
//           <div className="w-8 h-12 border-4 border-white/20 rounded-full flex justify-center backdrop-blur-sm">
//             <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </div>

//       {/* Global styles for animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }


'use client';
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const videoElement = videoRef.current;
    if (videoElement) {
      // Try to play the video
      videoElement.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  // Predefined positions to avoid hydration mismatch
  const particlePositions = [
    { left: "55.72%", top: "30.48%", delay: "0s", duration: "22.89s" },
    { left: "7.80%", top: "58.45%", delay: "0.5s", duration: "22.31s" },
    { left: "73.00%", top: "68.11%", delay: "1s", duration: "21.34s" },
    { left: "46.85%", top: "53.84%", delay: "1.5s", duration: "23.02s" },
    { left: "83.37%", top: "79.27%", delay: "2s", duration: "20.45s" },
    { left: "68.70%", top: "3.40%", delay: "2.5s", duration: "15.77s" },
    { left: "12.72%", top: "41.60%", delay: "3s", duration: "21.63s" },
    { left: "92.10%", top: "41.63%", delay: "3.5s", duration: "24.58s" },
    { left: "14.25%", top: "66.56%", delay: "4s", duration: "16.18s" },
    { left: "53.34%", top: "23.61%", delay: "4.5s", duration: "18.67s" },
    { left: "99.65%", top: "7.15%", delay: "5s", duration: "24.40s" },
    { left: "28.52%", top: "2.42%", delay: "5.5s", duration: "23.89s" },
    { left: "14.56%", top: "95.19%", delay: "6s", duration: "23.83s" },
    { left: "32.98%", top: "51.32%", delay: "6.5s", duration: "18.09s" },
    { left: "50.32%", top: "62.29%", delay: "7s", duration: "23.11s" },
    { left: "20.31%", top: "16.23%", delay: "7.5s", duration: "17.89s" },
    { left: "40.92%", top: "5.99%", delay: "8s", duration: "18.84s" },
    { left: "99.48%", top: "71.34%", delay: "8.5s", duration: "21.66s" },
    { left: "98.58%", top: "85.15%", delay: "9s", duration: "20.85s" },
    { left: "70.75%", top: "91.38%", delay: "9.5s", duration: "22.25s" }
  ];

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating particles - Only render on client to avoid hydration issues */}
      {isClient && (
        <div className="absolute inset-0">
          {particlePositions.map((position, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-500/30 rounded-full animate-float"
              style={{
                left: position.left,
                top: position.top,
                animationDelay: position.delay,
                animationDuration: position.duration
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Video Background Container */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
          <img 
            src="/images/hero-fallback.jpg" 
            alt="Atlabb Accounting Services" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header badge */}
          <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10 mt-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">FINANCIAL EXCELLENCE</span>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 mt-2 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Professional Accounting
            </span>
            <br />
            <span className="text-white">Solutions for Growth</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            At Atlabb Accounting, we provide comprehensive financial services including 
            bookkeeping, tax preparation, financial consulting, and strategic business 
            advisory to help your business thrive and grow.
          </p>

          {/* Stats indicators */}
          <div className="grid grid-cols-3 gap-8 mb-10 max-w-2xl mx-auto">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '250+', label: 'Happy Clients' },
              { number: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              Get Free Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-300 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              <span>Certified Professional Accountants</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              <span>AI-Powered Financial Tools</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              <span>24/7 Client Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-8 h-12 border-4 border-white/20 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
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
    </section>
  );
}