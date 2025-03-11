import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/Hero-section";
import ServicesSection from "./components/Service-section";
import ExpertiseSection from "./components/ExpertiseSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ConsultationBooking from "./components/Consultationbooking";
import TestimonialSlider from "./components/testimonial-slider";
import Footer from "./components/Footer";
import Biospace from "./components/Biospace";
import CertificationPage from "./components/Certification";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection className="mb-24" />
        <div className="container mx-auto px-4">
          <ServicesSection />
          <ExpertiseSection />
          <WhyChooseUs />
          <Biospace />
          <CertificationPage />
          <ConsultationBooking />
          <TestimonialSlider />
        </div>
      </main>
      <Footer />
    </div>
  );
}
