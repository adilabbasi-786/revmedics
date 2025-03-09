"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { GoogleLogo } from "./ui/google-logo";
import Image from "next/image";

const testimonials = [
  {
    name: "Leva Medical",
    date: "2024-10-22",
    avatar: "L",
    rating: 5,
    text: "Great service, i always communicate with Kent Harvey, a very responsible person and very efficient on his job. Billing with them is not a problem anymore.",
  },
  {
    name: "Maryyam Adrees",
    date: "2024-10-22",
    avatar: "MA",
    rating: 5,
    text: "Five Stars!!! Highly recommended",
  },
  {
    name: "Mark Daco",
    date: "2024-10-11",
    avatar: "MD",
    rating: 5,
    text: "I recently had the pleasure of working with iRCM (shout out to Jenny, Emma, Sarah) and I highly recommend them without reservation. From start to finish...",
    hasMore: true,
  },
  {
    name: "John Smith",
    date: "2024-10-10",
    avatar: "JS",
    rating: 5,
    text: "Excellent service and very professional team. They helped us streamline our billing process.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Customer Feedback That Makes Us Proud
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Don't just take our word for it - see what our happy clients are
          saying about our personalized medical billing services.
        </p>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <GoogleLogo className="opacity-60" />
                        </div>
                        <p className="text-sm text-gray-500">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} />
                    <p className="mt-4 text-gray-600">
                      {testimonial.text}
                      {testimonial.hasMore && (
                        <button className="text-primary font-medium ml-1">
                          Read more
                        </button>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute ml-[-40px]  cursor-pointer left-0  top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hidden md:block"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6 " />
          </button>

          <button
            className="absolute cursor-pointer  right-0 mr-[-40px] top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hidden md:block"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <Button className="mt-12 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
          Read More Reviews
        </Button>
      </div>
    </section>
  );
}
