"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { FileText, Lock, Phone } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[600px] md:min-h-[600px] overflow-hidden mt-[10px] lg:mt-4">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/col.jpg"
            alt="New York City skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1e3a5f]/90"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col justify-center h-full">
          <div className="max-w-3xl lg:pl-20 pl-4">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              #1 Leading Medical <br className="hidden sm:block" />
              Billing Company in{" "}
              <span className="text-[#4cd964]">CO and Nationwide </span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-base md:text-lg mb-10 max-w-2xl">
              Revmedics leads as a top medical billing company in CO with
              cutting-edge AI technology and certified skilled professionals. We
              are more than just a medical billing company – we’re here to help
              you build and grow your practice. We unlock your potential by
              streamlining your processes and increasing your revenue. From
              starting your practice and handling credentialing to providing
              expert billing and coding services, we offer a complete RCM
              solution while building your reputation and goodwill.
            </p>

            {/* Badges container */}
            <div className="flex flex-wrap items-center gap-6">
              {/* AAPC Certified */}
              <div className="bg-white rounded-md px-4 py-2 flex flex-col items-center">
                <div className="text-[#00a651] font-bold text-lg">
                  AAPC<sup>®</sup>
                </div>
                <div className="text-xs text-gray-700">CERTIFIED</div>
              </div>

              {/* HIPAA Compliant */}
              <div className="bg-[#00a651] rounded-md px-4 py-2 flex items-center">
                <div className="text-white font-medium mr-2">
                  <div>HIPAA</div>
                  <div>COMPLIANT</div>
                </div>
                <div className="bg-white rounded-full p-1">
                  <svg
                    className="w-5 h-5 text-[#00a651] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
      </section>
      <section className="relative bg-[#1e3a5f] w-full overflow-hidden">
        {/* Diagonal overlay */}
        <div className="absolute right-0 top-0 h-full w-1/2 md:w-1/3 bg-white transform skew-x-12 translate-x-32 z-10" />

        <div className="container mx-auto px-4 py-8 sm:py-10 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Action buttons container */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto lg:pl-20 pl-4 items-stretch">
              {/* Free Practice Audit Button */}
              <Link
                href="/audit"
                className="group flex items-center justify-between bg-white/10 backdrop-blur-sm 
                 hover:bg-white/20 transition-all duration-300 rounded-lg px-6 py-4 
                 w-full sm:w-64"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-white" />
                  <span className="text-white font-medium text-center">
                    Free Practice Audit
                  </span>
                </div>
                <span className="text-white group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>

              {/* Connect with Us Button */}
              <Link
                href="/connect"
                className="group flex items-center justify-between bg-white/10 backdrop-blur-sm 
                 hover:bg-white/20 transition-all duration-300 rounded-lg px-6 py-4 
                 w-full sm:w-64"
              >
                <div className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-white" />
                  <span className="text-white font-medium text-center">
                    Connect with Us
                  </span>
                </div>
                <span className="text-white group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>

            {/* Contact Information */}
            <div className="flex items-center gap-4 bg-white rounded-lg px-6 py-4 w-full md:w-auto justify-center sm:justify-start text-center sm:text-left">
              <div className="bg-[#1e3a5f] rounded-full p-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-[#1e3a5f] text-xl sm:text-2xl font-bold">
                  719-867-9977
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Talk To An Expert Today
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
