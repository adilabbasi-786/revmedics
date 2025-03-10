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
            src="/newyork.jpg"
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
              #1 Medical Billing <br className="hidden sm:block" />
              Company in <span className="text-[#4cd964]">NY</span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-base md:text-lg mb-10 max-w-2xl">
              Revmedics leads as a top medical billing company in NY with
              cutting-edge AI technology and certified skilled professionals.
              Our complete billing solution streamlines your practice's
              reimbursement processing and ensures effective revenue cycle
              management. Connect with our Revmedics experts today to optimize
              your practice processes and uplift its revenue.
            </p>

            {/* Badges container */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Google Reviews */}
              <div className="flex items-center">
                <div className="mr-3">
                  <svg viewBox="0 0 24 24" width="40" height="40">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="text-sm font-medium">Revmedics, Inc</div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs ml-1">180 reviews</span>
                  </div>
                </div>
              </div>

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
        <div className="absolute right-0 top-0 h-full w-1/3 bg-white transform skew-x-12 translate-x-32 z-10" />

        <div className="container mx-auto px-4 py-6 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Action buttons container */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto lg:pl-20 pl-4">
              {/* Free Practice Audit Button */}
              <Link
                href="/audit"
                className="group flex items-center justify-between bg-white/10 backdrop-blur-sm 
                       hover:bg-white/20 transition-all duration-300 rounded-lg px-6 py-4 
                       w-full sm:w-64"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-white" />
                  <span className="text-white font-medium">
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
                  <span className="text-white font-medium">
                    Connect with Us
                  </span>
                </div>
                <span className="text-white group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>

            {/* Contact Information */}
            <div className="flex items-center gap-4 bg-white rounded-lg px-6 py-4 w-full md:w-auto">
              <div className="bg-[#1e3a5f] rounded-full p-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-[#1e3a5f] text-2xl font-bold">
                  (800) 516-5234
                </div>
                <div className="text-gray-600">Talk To An Expert Today</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
