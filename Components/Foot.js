import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faBitcoin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const serviceAreas = [
    "Toronto",
    "Etobicoke",
    "Brampton",
    "North York",
    "Mississauga",
    "Vaughan",
    "Markham",
    "Scarborough",
    "Richmond Hill",
    "Oakville",
    "Woodbridge",
    "Whitby",
    "Ajax",
    "Pickering",
    "Burlington",
    "Oshawa"
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl" role="img" aria-label="eye">
                👁️
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  VitrectomyRentals.ca
                </h3>
                <p className="text-sm text-blue-600">
                  Recovery Equipment Specialists
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Providing the Greater Toronto Area with recovery equipment for optimal face down positioning.
            </p>
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Service Areas:</h4>
              <div className="grid grid-cols-2 gap-1">
                {serviceAreas.map((area) => (
                  <span key={area} className="text-gray-600 text-sm">{area}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Our Locations</h4>
            
            {/* North York Office */}
            <div className="space-y-2">
              <h5 className="text-md font-medium text-blue-600">North York Office</h5>
              <p className="text-sm text-gray-600">50 George Butchart Dr</p>
              <p className="text-sm text-gray-600">North York, ON M3K 0C9</p>
              <p className="text-sm text-gray-600">8:00 AM - 8:00 PM</p>
              <a 
                href="tel:2896339933"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                (289) 633-9933
              </a>
              <p className="text-sm text-green-600">✓ Available</p>
            </div>

            <a 
              href="https://maps.app.goo.gl/hgAWUviuJpC1CoNFA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800"
            >
              <span>View on Google Maps</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/price"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Equipment Pricing
                </Link>
              </li>
 <li>
                <Link
                  href="/price"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
             Benefits of Face Down Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4 p-6 bg-gray-50 rounded-xl shadow-md">
            <p className="text-md text-gray-700">
              We currently accept the following payment methods:
            </p>
            <div className="flex items-center space-x-6">
              <FontAwesomeIcon
                icon={faCcVisa}
                className="text-blue-600 text-xl"
              />
              <FontAwesomeIcon
                icon={faCcMastercard}
                className="text-red-600 text-xl"
              />
              <FontAwesomeIcon
                icon={faCcPaypal}
                className="text-blue-500 text-xl"
              />
              <FontAwesomeIcon
                icon={faBitcoin}
                className="text-yellow-500 text-xl"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {currentYear} VitrectomyRentals.ca. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
