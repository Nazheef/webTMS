

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section id="contact-form" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-xl font-bold text-gray-800 dark:text-white">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name *"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message / Requirements *"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
                ></textarea>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-md font-medium transition flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2  text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  Send Message
                </button>
                <div className="mt-4 flex items-center text-sm text-gray-600 text-gray-600 dark:text-gray-300">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  We'll respond within 24 hours
                </div>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-xl font-bold text-gray-800 dark:text-white" >Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-xl font-bold text-gray-800 dark:text-white">Email Us</h3>
                  <div className="text-gray-600 text-sm">
                    <div className="flex items-center mb-1 text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8a2 2 0 11-4 0 2 2 0 014 0zm-10 0a2 2 0 11-4 0 2 2 0 014 0zm10 8a2 2 0 11-4 0 2 2 0 014 0zm-10 0a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      info@treemas.com
                    </div>
                    <div className="flex items-center     text-gray-600 dark:text-gray-300">
                      sales@treemas.com
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-xl font-bold text-gray-800 dark:text-white">Call Us</h3>
                  <div className="text-gray-600 text-sm">
                    <div className="flex items-center mb-1        text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.041 11.041 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C9.083 18 3 11.917 3 6V3z" /></svg>
                      +62 21 1234 5678
                    </div>
                    <div className="flex items-center        text-gray-600 dark:text-gray-300">
                      +62 21 1234 5679
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-xl font-bold text-gray-800 dark:text-white">Visit Us</h3>
                  <div className="text-gray-600 text-sm">
                    <div className="flex items-center mb-1                 text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Menara Kadin Indonesia<br />Jakarta Pusat, Indonesia
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-xl font-bold text-gray-800 dark:text-white">Business Hours</h3>
                  <div className="text-gray-600 text-sm">
                    <div className="flex items-center mb-1             text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" /></svg>
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 1:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-bold text-gray-800 mb-2 ">Ready to Transform Your Business?</h3>
                <p className="text-gray-600 text-sm mb-4 ">
                  Join hundreds of companies that have streamlined their financial operations with our platform.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition w-full flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                  Schedule a Demo
                </button>
                <div className="text-xs text-gray-600 mt-2 flex justify-center">
                  <span className="flex items-center mr-4">✓ Free consultation</span>
                  <span className="flex items-center mr-4">✓ No obligation</span>
                  <span className="flex items-center">✓ Custom demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;



