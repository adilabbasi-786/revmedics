import { FileText, UserCheck, BarChart } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({ icon: Icon, title, description, href }) => (
  <Link
    href={href}
    className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group"
  >
    <div className="mb-6 text-[#1e3a5f]">
      <Icon size={48} strokeWidth={1.5} />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
      {title}
      <span className="transform group-hover:translate-x-1 transition-transform duration-300">
        →
      </span>
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </Link>
);

export default function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Medical Billing Services",
      description:
        "Precise billing processes ensure claims are handled accurately, helping you receive payments without delays.",
      href: "/services/medical-billing",
    },
    {
      icon: UserCheck,
      title: "Medical Credentialing Services",
      description:
        "We assist in getting you properly credentialed with insurers quickly and keeping your information accurate and up-to-date.",
      href: "/services/credentialing",
    },
    {
      icon: BarChart,
      title: "Medical Coding Services",
      description:
        "Updated ICD-10 and CPT coding systems are utilized to maximize reimbursements and reduce claim errors.",
      href: "/services/medical-coding",
    },
    {
      icon: BarChart,
      title: "Denial Management Services",
      description:
        "Effective denial management identifies causes, resolves disputes, and ensures timely appeals for improved claim outcomes.",
      href: "/services/medical-coding",
    },
    {
      icon: BarChart,
      title: "Out of Network Billing Services",
      description:
        "Our expertise ensures you avoid underpayments and receive timely compensation for out-of-network claims.",
      href: "/services/medical-coding",
    },
    {
      icon: BarChart,
      title: "Revenue Cycle Management",
      description:
        "Our services are expertly tailored to align with your specialty to help you boost profits and grow your practice efficiently.",
      href: "/services/medical-coding",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Full Service Medical Billing Company
          </h2>
          <p className="text-lg text-gray-600">
            Gain greater control over your practice's financial health & account
            receivables with our full-service medical billing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:pl-12 pl-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
