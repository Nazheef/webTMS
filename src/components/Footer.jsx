import React from 'react';
import features from '../components/Features';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-500 text-white flex items-center justify-center rounded-lg font-bold">T</div>
              <div>
                <h3 className="font-bold">Treemas Solusi Utama</h3>
                <p className="text-sm text-gray-400">Financial Management Platform</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Transforming business financial operations through comprehensive, integrated solutions that drive efficiency and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">Instagram</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-500">Home</a></li>
              <li><a href={features}  className="hover:text-yellow-500">Features</a></li>
              <li><a href="#" className="hover:text-yellow-500">About</a></li>
              <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-500">Accounting Module</a></li>
              <li><a href="#" className="hover:text-yellow-500">Procurement Management</a></li>
              <li><a href="#" className="hover:text-yellow-500">Disbursement System</a></li>
              <li><a href="#" className="hover:text-yellow-500">Budgeting & Planning</a></li>
              <li><a href="#" className="hover:text-yellow-500">Financial Analytics</a></li>
              <li><a href="#" className="hover:text-yellow-500">Compliance Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                Menara Kadin Indonesia<br />Jakarta Pusat, Indonesia
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.041 11.041 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C9.083 18 3 11.917 3 6V3z" /></svg>
                +62 21 1234 5678<br />+62 21 1234 5679
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8a2 2 0 11-4 0 2 2 0 014 0zm-10 0a2 2 0 11-4 0 2 2 0 014 0zm10 8a2 2 0 11-4 0 2 2 0 014 0zm-10 0a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                info@treemas.com<br />sales@treemas.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Treemas Solusi Utama. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
      
export default Footer;