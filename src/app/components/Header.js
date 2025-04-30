"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Search,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: "Privacy Policy", link: "/privacy", hasDropdown: false },
    { name: "Terms & Conditions", link: "/terms", hasDropdown: false },
    { name: "Contact Us", link: "/contactus", hasDropdown: false },
  ];

  return (
    <header className="w-full z-50">
      {/* Top Bar */}
      <div
        className={`bg-[#1e3a5f] text-white py-2 px-4 md:px-6 fixed top-0 left-0 w-full`}
      >
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 w-full md:w-auto mb-2 md:mb-0   lg:pl-20">
            <a
              href="tel:(800)516-5234"
              className="flex items-center text-sm gap-1 hover:text-gray-200"
            >
              <Phone size={16} />
              <span>719-867-9977</span>
            </a>
            <a
              href="mailto:info@therevmedics.com"
              className="flex items-center text-sm gap-1 hover:text-gray-200"
            >
              <Mail size={16} />
              <span>info@therevmedics.com</span>
            </a>
            <div className="flex items-center text-sm gap-1">
              <MapPin size={16} />
              <span>1942 Broadway St. STE 314C Boulder CO 80302</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-3 px-4 md:px-6 mt-12 lg:mt-8">
        <div className="container mx-auto flex justify-between items-center lg:pl-20 pl-4 pt-6 lg:pt-0">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png" // You'll need to add your logo
              alt="iRCM Logo"
              width={110}
              height={60}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-start space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.link}
                  className="flex items-center text-gray-700 hover:text-[#1e3a5f] font-medium"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Search Button */}
          <div className="hidden lg:flex">
            <button className="bg-[#1e3a5f] text-white p-3 rounded-md hover:bg-[#2a4e7a] transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
