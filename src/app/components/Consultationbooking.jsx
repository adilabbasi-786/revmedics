"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
            <h2 className="text-2xl font-medium text-gray-800">
              With access to
            </h2>
            <h1 className="text-5xl font-bold text-[#1e3a6e] mt-2 mb-4">
              24/7
            </h1>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Practice Management
              <br />
              Consultants
            </h2>
            <div className="w-16 h-1 bg-[#1e3a6e] mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our professional medical billing team works with hundreds of
              medical practices and health centers which improve their
              profitability, strengthen compliance, eliminate administrative
              burdens, and adapt better to industry change.
            </p>
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
                          href="https://www.therevmedics.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          https://www.therevmedics.com
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
