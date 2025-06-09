import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../images/QNB LOGO-2.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#22272a] to-[#003366] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              alt="Q.N.B Transport" 
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-300 mb-4 text-center md:text-left">
              Your trusted partner in global logistics and transportation solutions, delivering excellence since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:-translate-y-1">
                <Facebook size={18} className="text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:-translate-y-1">
                <Twitter size={18} className="text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:-translate-y-1">
                <Linkedin size={18} className="text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:-translate-y-1">
                <Instagram size={18} className="text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:md:left-0 after:w-10 after:h-0.5 after:bg-white/30 after:left-1/2 after:md:left-0 after:-translate-x-1/2 after:md:translate-x-0">
              Quick Links
            </h5>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Tracking
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:md:left-0 after:w-10 after:h-0.5 after:bg-white/30 after:left-1/2 after:md:left-0 after:-translate-x-1/2 after:md:translate-x-0">
              Our Services
            </h5>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link to="/services#air" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Air Freight
                </Link>
              </li>
              <li>
                <Link to="/services#ocean" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Ocean Freight
                </Link>
              </li>
              <li>
                <Link to="/services#ground" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Ground Shipping
                </Link>
              </li>
              <li>
                <Link to="/services#warehouse" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link to="/services#logistics" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Logistics Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:md:left-0 after:w-10 after:h-0.5 after:bg-white/30 after:left-1/2 after:md:left-0 after:-translate-x-1/2 after:md:translate-x-0">
              Contact Us
            </h5>
            <address className="text-gray-300 not-italic text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start mb-2">
                <span className="mr-2">📍</span> #48 OKIGWE ROAD<br />
                Aba Abia State<br />
                Nigeria
              </p>
              <p className="flex items-center justify-center md:justify-start mb-2">
                <span className="mr-2">📞</span> +2349029526706
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-2">✉️</span> qnbhelpdesk@yahoo.com
              </p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2023 Q.N.B Transport. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;