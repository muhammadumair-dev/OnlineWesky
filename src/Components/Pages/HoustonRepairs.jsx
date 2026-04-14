import React from 'react';
import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';

const features = [
  "Experienced and skilled technicians",
  "Fast and dependable service",
  "Affordable and transparent pricing",
  "Residential and commercial services",
  "Commitment to customer satisfaction"
];

const serviceAreas = [
  "Rosenberg",
  "Houston",
  "Richmond",
  "Sugar Land",
  "Katy"
];

function HoustonRepairs() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Houston Easy Repairs
          </h2>
          <p className="text-xl text-amber-600 font-semibold mb-4">
            Your Trusted Experts for Fast, Reliable Home Repair & Maintenance Services
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From minor fixes to major renovations, our skilled professionals deliver top-quality 
            home repair and maintenance services across the Greater Houston area. We take pride 
            in providing dependable solutions that keep your property in excellent condition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-600 transition-colors duration-200"
            >
              <FaCheckCircle className="text-amber-600 text-xl flex-shrink-0" />
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="flex items-center gap-2 mb-6">
            <FaMapMarkerAlt className="text-amber-600 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-900">
              Our Service Areas
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {serviceAreas.map((area, index) => (
              <span
                key={index}
                className="bg-amber-600 text-white px-5 py-2 rounded-full font-medium hover:bg-amber-700 transition-colors duration-200 cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Need professional repair services? Contact us today!
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default HoustonRepairs;
