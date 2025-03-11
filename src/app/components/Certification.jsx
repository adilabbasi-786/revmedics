import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CertificationPage() {
  const certifications = [
    {
      title: "HIPAA Compliance",
      logo: "/hipacomplaint.jpg",
      description:
        "We are proud to uphold strict compliance with the Health Insurance Portability and Accountability Act (HIPAA).",
    },
    {
      title: "CPB Certified",
      logo: "/cpb.png",
      description:
        "Our team boasts the Certified Professional Biller certification, a testament to our expertise in medical billing and coding.",
    },
    {
      title: "AAPC Certified",
      logo: "/aapc.png",
      description:
        "Our AAPC certification highlights our mastery of coding, ensuring that your claims are coded accurately & submitted efficiently.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0a3d62] mb-16">
          Our Certification and Compliance
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-sm relative"
            >
              {/* Certification Card */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-24 h-24 mb-6 relative">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={`${cert.title} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#0a3d62] mb-4">
                  {cert.title}
                </h3>
                <p className="text-gray-600 leading-relaxed px-4">
                  {cert.description}
                </p>
              </div>

              {/* Arrow connecting to next certification */}
              {index < certifications.length - 1 && (
                <div className="hidden md:block absolute -right-8 top-20 transform -translate-y-1/2">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
