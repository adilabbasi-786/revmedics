"use client";

import Image from "next/image";

const partners = [
  { name: "CureMD", logo: "/curemd.png" },
  { name: "CareCloud", logo: "/carecloud.png" },
  { name: "Athena Health", logo: "/athena.png" },
  { name: "AdvancedMD", logo: "/advancemd.png" },
  { name: "DigiDMS", logo: "/digi dms.png" },
  { name: "Office Ally", logo: "/office allay.png" },
  { name: "eClinicalWorks", logo: "/eclinical.png" },
  { name: "Valant", logo: "/valant.png" },
  { name: "Dr Chrono", logo: "/dr chrono.webp" },
  { name: "EHI", logo: "/ehi.png" },
  { name: "Health Fusion", logo: "/health fusion.png" },
  { name: "InSync", logo: "/insync.png" },
  { name: "Intergy", logo: "/intergy.jpg" },
  { name: "Kareo", logo: "/kareo.png" },
  { name: "MDLand", logo: "/mdland.png" },
];

export default function ExpertiseSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e3a6e] mb-4">
            Our Expertise on Medical Billing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our expertise on modern suite of tools can transform
            your practice, optimizing cash flow, reducing overheads, and
            increasing patient satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full h-20 relative flex items-center justify-center p-4 hover:opacity-80 transition-opacity"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
