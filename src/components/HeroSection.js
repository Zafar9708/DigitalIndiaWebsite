"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px]">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image
          src="/images/Hero.jpg"
          alt="Child development therapy at GrowthWayz"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Color overlay */}
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Empowering Children Through Specialized Care
            </h1>
            
            <p className="text-base md:text-lg text-white mb-6 md:mb-8">
              At GrowthWayz, we provide expert therapies for children with autism, 
              ADHD, speech delays, and other developmental challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-2 md:px-8 md:py-3 rounded-full text-center font-medium transition duration-300 text-sm md:text-base"
              >
                Book Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-2 md:px-8 md:py-3 rounded-full text-center font-medium transition duration-300 text-sm md:text-base"
              >
                Our Approach
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}