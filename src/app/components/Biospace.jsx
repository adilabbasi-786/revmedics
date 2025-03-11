import Image from "next/image";

export default function Biospace() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/doctor.jpg"
                alt="Healthcare professional using tablet"
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0a3d62] mb-6 leading-tight">
              Your Bespoke Medical Billing Outsourcing Company
            </h1>

            <div className="space-y-6 text-[#0a3d62]">
              <p className="text-base">
                As one of the leading medical billing companies, Revmedics
                understands the unique needs of each specialty, offering
                customized solutions to deliver optimal results. We recognize
                the complexities and challenges that small practices face, and
                we’re here to support practices of all sizes. Whether big or
                small, our experienced team ensures that every healthcare
                provider has access to top-tier billing services.
              </p>

              <p className="text-base">
                Say goodbye to revenue leaks, administrative burdens, and coding
                errors. As a dedicated Medical Billing Outsourcing Company, we
                are committed to safeguarding your practice from these pitfalls.
                Our expert team not only handles your billing with precision but
                also vigilantly monitors for coding errors—such as incorrect CPT
                codes, upcoding, and unbundling. With our services, you can
                trust that your billing processes are in safe hands, minimizing
                the risk of regulatory audits and penalties.
              </p>

              <div className="pt-4">
                <button className="bg-[#0a3d62] hover:bg-[#0c4b78] text-white font-medium py-3 px-6 rounded-full transition-colors">
                  Request A Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
