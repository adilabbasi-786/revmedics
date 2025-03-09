"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const slackWebhookUrl = "YOUR_SLACK_WEBHOOK_URL"; // Replace with your actual Webhook URL

    const message = {
      text: `📩 *New Consultation Booking:*\n\n
      *Service Type:* ${formData.serviceType}\n
      *Healthcare Type:* ${formData.healthcareType}\n
      *Full Name:* ${formData.fullName}\n
      *Email:* ${formData.email}\n
      *Phone:* ${formData.phone}\n
      *Website:* ${formData.website || "N/A"}\n
      *Message:* ${formData.message}\n
      *SMS Consent:* ${formData.smsConsent === "yes" ? "✅ Yes" : "❌ No"}`,
    };

    try {
      const response = await fetch(slackWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        alert("Form submitted successfully and sent to Slack!");
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
        alert("Failed to send data to Slack.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred.");
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
                  <option value="billing">Medical Billing</option>
                  <option value="coding">Medical Coding</option>
                  <option value="rcm">Revenue Cycle Management</option>
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
                  <option value="hospital">Hospital</option>
                  <option value="clinic">Clinic</option>
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
                  Do you agree to receive SMS from iRCM, Inc?
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
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#1e3a6e] text-white py-3 px-8 rounded-full font-medium hover:bg-[#152c54] transition-colors duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
