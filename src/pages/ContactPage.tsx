import React, { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", phone: "", city: "", message: "" });
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to start your trading journey? Get in touch with us today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2">
                      Our Address
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Shreyash Apartment, Opposite of HDFC Bank,
                      <br />
                      Aath Rasta Square, Laxmi Nagar,
                      <br />
                      Nagpur – 440022, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2">
                      Phone Numbers
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">+91 9373228941</p>
                      <p className="text-gray-600">+91 7276476410</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:thetradelearnify@gmail.com"
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                    >
                      thetradelearnify@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2">
                      Office Hours
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/919373228941"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-900 font-semibold mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-900 font-semibold mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-gray-900 font-semibold mb-2"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your city"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-900 font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your trading goals and any specific questions you have"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Find{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Our Location
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Shreyash+Apartment+Aath+Rasta+Square+Laxmi+Nagar+Nagpur&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                className="rounded-lg border-0"
              ></iframe>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Shreyash Apartment, Aath Rasta Square, Laxmi Nagar, Nagpur
              </p>
              <a
                href="https://maps.google.com/?q=Shreyash+Apartment+Aath+Rasta+Square+Laxmi+Nagar+Nagpur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 mt-4 text-green-600 hover:text-green-700 font-semibold"
              >
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;