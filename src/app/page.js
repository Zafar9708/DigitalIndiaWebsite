// import ContactUs from "components/ContactUs";
// import FinancialInsightsSection from "components/FinancialInsights";
// import HeroSection from "components/HeroSection";
// import ServicesSection from "components/MissionVisionSection";
// import ProcessSection from "components/Process";
// import ServicesWeProvide from "components/ServicesWeProvide";
// import TechnologySection from "components/Technology";
// import TestimonialsSection from "components/Testimonials";
// import WelcomeSection from "components/WelcomeSection";
// import WhyChooseUs from "components/WhyChooseUs";

// export default function Home() {
//   return (
//     <>
//    <HeroSection />
//    <WelcomeSection />
//    <ServicesSection />
//    <ServicesWeProvide />
//    <WhyChooseUs />
//    <ProcessSection />
//    <TechnologySection />
//    <FinancialInsightsSection />
//    <TestimonialsSection />

//    <ContactUs />
   
//    </>
//   );
// }


'use client';
import ContactUs from "components/ContactUs";
import FinancialInsightsSection from "components/FinancialInsights";
import HeroSection from "components/HeroSection";
import ServicesSection from "components/MissionVisionSection";
import ProcessSection from "components/Process";
import ServicesWeProvide from "components/ServicesWeProvide";
import TechnologySection from "components/Technology";
import TestimonialsSection from "components/Testimonials";
import WelcomeSection from "components/WelcomeSection";
import WhyChooseUs from "components/WhyChooseUs";
import FullWidthSection from "components/FullWidthSection";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <FullWidthSection>
        <HeroSection />
      </FullWidthSection>
      
      <FullWidthSection>
        <WelcomeSection />
      </FullWidthSection>
      
      <FullWidthSection>
        <ServicesSection />
      </FullWidthSection>
      
      <FullWidthSection>
        <ServicesWeProvide />
      </FullWidthSection>
      
      <FullWidthSection>
        <WhyChooseUs />
      </FullWidthSection>
      
      <FullWidthSection>
        <ProcessSection />
      </FullWidthSection>
      
      <FullWidthSection>
        <TechnologySection />
      </FullWidthSection>
      
      <FullWidthSection>
        <FinancialInsightsSection />
      </FullWidthSection>
      
      <FullWidthSection>
        <TestimonialsSection />
      </FullWidthSection>
      
      <FullWidthSection>
        <ContactUs />
      </FullWidthSection>
    </div>
  );
}