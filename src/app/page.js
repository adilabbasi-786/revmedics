import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/Hero-section";
import ServicesSection from "./components/Service-section";
import WhyChooseUs from "./components/WhyChooseUs";
import ConsultationBooking from "./components/Consultationbooking";
import TestimonialSlider from "./components/testimonial-slider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <HeroSection className="mb-24" />
      <div className="container mx-auto px-4">
        <ServicesSection />
        <WhyChooseUs />
        <ConsultationBooking />
        <TestimonialSlider />
      </div>

      <Footer />
    </div>
  );
}
