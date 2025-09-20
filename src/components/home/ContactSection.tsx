import React, { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    city: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', number: '', city: '', message: '' });
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Started Today
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your financial future? Contact us for more details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">For More Details Call Us</h3>
              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 mb-8">
                <div className="flex items-center space-x-4">
                  <Phone className="text-green-600" size={32} />
                  <div>
                    <p className="text-2xl font-bold text-green-600">+91 9373228941</p>
                    <p className="text-gray-600">Primary Contact</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-900">Contact Details</h4>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold mb-2">Address</h5>
                  <p className="text-gray-700 leading-relaxed">
                    M-2 Shreyash Apartment, Aath Rasta Square,<br />
                    Laxmi Nagar, Nagpur 440022
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold mb-2">Email</h5>
                  <a
                    href="mailto:thetradelearnify@gmail.com"
                    className="text-gray-700 hover:text-green-600 transition-colors duration-300"
                  >
                    thetradelearnify@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold mb-2">Contact Numbers</h5>
                  <div className="space-y-1">
                    <p className="text-gray-700">+91 9373228941</p>
                    <p className="text-gray-700">+91 7972299513</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-6">
              <a
                href="https://wa.me/919373228941"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-600/25 transform hover:scale-105"
              >
                <MessageCircle size={24} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us Your Details</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-gray-900 font-semibold mb-2">
                  Number *
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-gray-900 font-semibold mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your trading goals (optional)"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-600/25 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>

              <div className="mt-4 text-center">
                <p className="text-gray-500 text-sm">
                  Protected by reCAPTCHA and subject to our{' '}
                  <a href="/privacy-policy" className="text-green-600 hover:text-green-700">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;