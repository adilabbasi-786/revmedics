"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    { name: "Home", link: "/", hasDropdown: false },
    { name: "Why iRCM", link: "/why-ircm", hasDropdown: true },
    { name: "Services", link: "/services", hasDropdown: true },
    { name: "Specialties", link: "/specialties", hasDropdown: true },
    { name: "Domain Areas", link: "/domain-areas", hasDropdown: true },
    { name: "Resources", link: "/resources", hasDropdown: true },
    { name: "Contact Us", link: "/contact", hasDropdown: false },
  ];

  return (
    <header
      className={`w-full  fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#1e3a5f] text-white py-2 px-4 md:px-6 ">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 w-full md:w-auto mb-2 md:mb-0   lg:pl-20">
            <a
              href="tel:(800)516-5234"
              className="flex items-center text-sm gap-1 hover:text-gray-200"
            >
              <Phone size={16} />
              <span>(800) 516-5234</span>
            </a>
            <a
              href="mailto:info@ircm.com"
              className="flex items-center text-sm gap-1 hover:text-gray-200"
            >
              <Mail size={16} />
              <span>info@ircm.com</span>
            </a>
            <div className="flex items-center text-sm gap-1">
              <MapPin size={16} />
              <span>134 N 4th St, Brooklyn, NY 11249</span>
            </div>
          </div>
          <a
            href="/payment"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md text-sm transition-colors"
          >
            Make A Payment
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-3 px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center lg:pl-20 pl-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-12">
              <div className="flex items-center">
                <div className="text-[#1e3a5f] font-bold text-2xl">
                  <span className="text-[#1e3a5f]">i</span>
                  <span className="text-[#1e3a5f]">RCM</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {/* <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-[#1e3a5f] font-medium"
                  onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </button>

                {item.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 mt-1 transition-all duration-200 ${
                      activeDropdown === item.name
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <Link
                      href={`${item.link}/option1`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 1
                    </Link>
                    <Link
                      href={`${item.link}/option2`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 2
                    </Link>
                    <Link
                      href={`${item.link}/option3`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 3
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav> */}

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
