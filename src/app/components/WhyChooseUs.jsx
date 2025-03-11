"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "./ui/card";
import { ClipboardList, RefreshCcw, TrendingUp } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export default function WhyChooseUs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Handle selection change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Scroll to index
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  // Setup carousel listeners
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play effect
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext(); // Move to next slide
    }, 3000); // Change slide every 3 seconds (adjust as needed)
    return () => clearInterval(interval); // Clear on unmount
  }, [emblaApi]);

  // Features array
  const features = [
    {
      icon: <ClipboardList className="h-12 w-12 text-primary" />,
      title: "Free Initial Practice Assessment",
      description:
        "Complimentary Practice Assessment to identify areas of improvement within your practice to optimize performance.",
    },
    {
      icon: <RefreshCcw className="h-12 w-12 text-primary" />,
      title: "Revenue Cycle Experts",
      description:
        "Specialized billing, coding & collection experts optimize your payment cycle with an optimal and defined approach.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Increase practice Profitability",
      description:
        "Increase collections by 20% and reduce staffing costs with our specialized Revenue Cycle Management team.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Dedicated Account Manager",
      description:
        "A dedicated account manager is added to your practice to make sure that you get specialized support and care.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "No Fixed Agreement / Cancel Any Time",
      description:
        "No long-term contracts; you can cancel anytime. We value your trust and focus on delivering exceptional service.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Specialty Specified EHR/EMR Softwares",
      description:
        "Specialty-specific EHR/EMR software used to capture, manage and transmit clinical data for accurate billing and coding services.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't settle for average profits, maximize your revenue and gain a
            deeper understanding of your healthcare business with Revmedics.
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] px-2"
              >
                <Card className="border rounded-md shadow-sm h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="mb-4 mt-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                index === selectedIndex ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
