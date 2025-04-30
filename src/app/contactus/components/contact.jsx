"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ConsultationBooking() {
  const [formData, setFormData] = useState({
    serviceType: "",
    healthcareType: "",
    fullName: "",
    email: "",
    phone: "",
    website: "",
    message: "",
    smsConsent: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");
    setSuccessMessage("");

    // Log form data for debugging
    console.log("Submitting form data:", formData);

    try {
      console.log("Sending request to /api/slack...");

      // First try the Slack API route
      const response = await fetch("/api/slack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      // Get the full response
      let result;
      try {
        result = await response.json();
        console.log("Response data:", result);
      } catch (jsonError) {
        console.error("Error parsing JSON response:", jsonError);
        throw new Error("Failed to parse server response");
      }

      if (response.ok && result.success) {
        console.log("Form submitted successfully");
        setSubmitStatus("success");

        // Set custom success message if provided
        if (result.message) {
          setSuccessMessage(result.message);
        }

        // Reset form
        setFormData({
          serviceType: "",
          healthcareType: "",
          fullName: "",
          email: "",
          phone: "",
          website: "",
          message: "",
          smsConsent: "",
        });
      } else {
        // Handle API error with details
        console.error("API error:", result);
        setErrorMessage(result.error || "Failed to send message");
        if (result.details) {
          console.error("Error details:", result.details);
        }
        setSubmitStatus("error");
      }
    } catch (error) {
      // Handle network or parsing errors
      console.error("Error sending message:", error);
      setErrorMessage(
        "Network error: " + (error.message || "Failed to connect to server")
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Information */}
          <div className="pr-0 md:pr-8 lg:pr-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Let's Connect Now!
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              If you are interested in our services, want to know more or have
              got any question's, We would be glad to answer your query. Get in
              touch now to find out how we can skyrocket your practice growth.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#1e3a6e] mt-1" />
                <span className="text-gray-600">
                  1942 Broadway St. STE 314C Boulder CO 80302
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#1e3a6e]" />
                <span className="text-gray-600">719-867-9977</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#1e3a6e]" />
                <span className="text-gray-600">719-867-9977</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#1e3a6e]" />
                <span className="text-gray-600">info@therevmedics.com</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Social:</h2>
              <div className="flex gap-4">
                <Link href="#" className="text-[#1e3a6e] hover:text-[#15294d]">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link href="#" className="text-[#1e3a6e] hover:text-[#15294d]">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </Link>
                <Link href="#" className="text-[#1e3a6e] hover:text-[#15294d]">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link href="#" className="text-[#1e3a6e] hover:text-[#15294d]">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <p className="text-gray-600 font-medium">
                Talk to Medical Billing Expert
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mt-1">
                Schedule a Consultation
              </h2>
            </div>

            {submitStatus === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      Consultation Request Sent
                    </h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>
                        {successMessage ||
                          "Thank you for your interest! Our team will contact you shortly."}
                      </p>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setSubmitStatus(null)}
                        className="text-sm font-medium text-green-600 hover:text-green-500"
                      >
                        Submit another request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Service Type Dropdown */}
                <div className="mb-4 relative">
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent"
                    required
                  >
                    <option value="" disabled>
                      Select Service Type
                    </option>
                    <option value="billing">Medical Billing Services</option>
                    <option value="coding">Medical Coding services</option>
                    <option value="Web design">Web Design and SEO</option>
                    <option value="rcm">Revenue Cycle Management</option>
                    <option value="Medical Credentials Services">
                      Medical Credentials Services
                    </option>
                    <option value="Quality Payment Program">
                      Quality Payment Program
                    </option>
                    <option value="Medical Claim Processing">
                      Medical Claim Processing
                    </option>
                    <option value="Medical Billing Consulting">
                      Medical Billing Consulting{" "}
                    </option>
                    <option value="Outsource Medical Billing">
                      Outsource Medical Billing{" "}
                    </option>
                    <option value="Patient Billing Services">
                      Patient Billing Services{" "}
                    </option>
                    <option value="Professional Staffing Solutions">
                      Professional Staffing Solutions{" "}
                    </option>
                    <option value="Dental Credentialing Services">
                      Dental Credentialing Services
                    </option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Healthcare Type Dropdown */}
                <div className="mb-4 relative">
                  <select
                    name="healthcareType"
                    value={formData.healthcareType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent"
                    required
                  >
                    <option value="" disabled>
                      Select Healthcare Type
                    </option>
                    <option value="primary">Primary Care</option>
                    <option value="specialty">Specialty Practice</option>
                    <option value="Private Practic">Private Practice</option>
                    <option value="Solo Practice">Solo Practice</option>
                    <option value="hospital">Hospital</option>
                    <option value="clinic">Clinic</option>
                    <option value="Group Practice">Group Practices</option>
                    <option value="Health Maintenance Organization(HMOs)">
                      Health Maintenance Organization(HMOs)
                    </option>
                    <option value="Intermediate Care Facility">
                      Intermediate Care Facility
                    </option>
                    <option value="Accountable care organization">
                      Accountable care organization
                    </option>
                    <option value="Nursing Practice">Nursing Practice</option>
                    <option value="Home Health Agency">
                      Home Health Agency
                    </option>
                    <option value="Assisted Living Facility">
                      Assisted Living Facility
                    </option>
                    <option value="Other">Othery</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone and Website */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex">
                    <div className="flex items-center justify-center bg-gray-100 border border-gray-300 border-r-0 rounded-l-md px-3">
                      <span className="text-sm">🇺🇸</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(201) 555-0123"
                      value={formData.phone}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-r-md w-full focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="website"
                    placeholder="Website (Optional)"
                    value={formData.website}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent"
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent"
                    required
                  ></textarea>
                </div>

                {/* SMS Consent */}
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">
                    Do you agree to receive SMS from Revmedics, LLC?
                  </p>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="smsConsent"
                        value="yes"
                        checked={formData.smsConsent === "yes"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#1e3a6e]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="smsConsent"
                        value="no"
                        checked={formData.smsConsent === "no"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#1e3a6e]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                  <div className="mt-2 p-1">
                    <h1 className="text-md font-bold">SMS Terms of Service</h1>
                    <p className="mt-2 text-sm">
                      SMS Terms of Service By opting into SMS from a web form or
                      other medium, you are agreeing to receive SMS messages
                      from Revmedics. This includes SMS messages for appointment
                      scheduling, appointment reminders, post-visit
                      instructions, lab notifications, and billing
                      notifications. Message frequency varies. Message and data
                      rates may apply. See privacy policy at
                      <span>
                        {" "}
                        <a
                          href="/privacy"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          Privacy Ploicy
                        </a>
                      </span>
                      . Message HELP for help. Reply STOP to any message to opt
                      out.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 bg-[#1e3a6e] text-white font-medium rounded-md hover:bg-[#15294d] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e3a6e] ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Schedule Consultation"
                  )}
                </button>

                {submitStatus === "error" && (
                  <div className="mt-4 bg-red-50 border border-red-200 rounded-md p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-red-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          Error sending your request
                        </h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>{errorMessage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
