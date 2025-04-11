import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f]">
      <div className="max-w-7xl mx-auto py-4 md:py-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {/* Company Info */}
          <div className="space-y-4 pl-4">
            <Image src="/logo.png" alt="iRCM Logo" width={150} height={80} />
            <p className="text-white pr-4">
              Revmedics is an industry leader with innovative technology and an
              expert team. We are a complete Revenue Cycle Management solution
              that streamlines reimbursements and delivers remarkable results.
            </p>
          </div>

          {/* Services */}

          <div className="pl-4 lg:pl-18 lg:mt-12 mt-0">
            <h3 className="text-xl font-bold mb-4 text-white">
              Legal Information
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-200 hover:underline">
                  Privay Policy
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-gray-200 hover:underline">
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Empty Column for Flexibility or Future Use */}
          <div></div>

          {/* Contact Info */}
          <div className="lg:ml-[-200px] ml-0 lg:mt-12 mt-0 pl-4 ">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-1 text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-200">
                  1942 Broadway St. STE 314C Boulder CO 80302
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-200">719-867-9977</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-200">info@therevmedics.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <span className="text-sm text-white">
              © 2025, Revmedics, LLC. All Rights Reserved.
            </span>
            <div className="flex items-center space-x-4">
              {[
                {
                  href: "https://linkedin.com",
                  icon: <Linkedin className="w-5 h-5" />,
                },
                {
                  href: "https://facebook.com",
                  icon: <Facebook className="w-5 h-5" />,
                },
                {
                  href: "https://twitter.com",
                  icon: <Twitter className="w-5 h-5" />,
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-white hover:text-gray-100"
                  target="_blank"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
