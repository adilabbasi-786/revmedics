"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "./ui/card";
import { ClipboardList, RefreshCcw, TrendingUp } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export default function WhyChooseUs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {/* Mobile: Full width cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-full">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border rounded-md shadow-sm h-full"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 mt-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full mx-1 ${
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
