import ContactUs from "components/ContactUs";
import GallerySlider from "components/GallerySlider";
import HeroSection from "components/HeroSection";
import ServicesSection from "components/MissionVisionSection";
import ServicesWeProvide from "components/ServicesWeProvide";
import WelcomeSection from "components/WelcomeSection";
import OurExpertTeam from "components/WhatParentsSay";
import WhyChooseUs from "components/WhyChooseUs";

export default function Home() {
  return (
    <>
   <HeroSection />
   <WelcomeSection />
   <ServicesSection />
   <ServicesWeProvide />
   <WhyChooseUs />
   <GallerySlider />
   <OurExpertTeam />
   <ContactUs />
   
   </>
  );
}
