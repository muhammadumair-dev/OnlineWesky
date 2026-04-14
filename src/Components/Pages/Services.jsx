import React from 'react';
import About from './About';
import { FaWrench, FaBolt, FaFaucet, FaTools, FaHome } from 'react-icons/fa';

const serviceCategories = [
  {
    id: 1,
    title: "Home Repair & Handyman Services",
    icon: <FaHome className="text-3xl text-amber-600" />,
    services: [
      "General home repairs",
      "Door and window repairs",
      "Drywall patching",
      "Minor carpentry",
      "Furniture assembly"
    ]
  },
  {
    id: 2,
    title: "Electrical Repair Services",
    icon: <FaBolt className="text-3xl text-amber-600" />,
    services: [
      "Electrical troubleshooting",
      "Light fixture installation",
      "Outlet and switch repairs",
      "Ceiling fan installation"
    ]
  },
  {
    id: 3,
    title: "Plumbing Repair Services",
    icon: <FaFaucet className="text-3xl text-amber-600" />,
    services: [
      "Leak detection and repairs",
      "Faucet repairs",
      "Drain cleaning",
      "Toilet repair"
    ]
  },
  {
    id: 4,
    title: "Property Maintenance Services",
    icon: <FaTools className="text-3xl text-amber-600" />,
    services: [
      "Preventive maintenance",
      "Property inspections",
      "Minor repairs"
    ]
  },
  {
    id: 5,
    title: "Installation & Repair Services",
    icon: <FaWrench className="text-3xl text-amber-600" />,
    services: [
      "Light installation",
      "Fixture replacement",
      "Home improvement installations"
    ]
  }
];

function Services() {
  return (
    <>
      <About
        title="OUR SERVICES"
        title2="Professional Home Repair & Maintenance Solutions"
      />
      
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Houston Easy Repairs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted experts for fast, reliable home repair and maintenance services. 
            We provide comprehensive solutions for residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Service Areas
            </h3>
            <p className="text-gray-600">
              We proudly serve the following locations
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Rosenberg', 'Houston', 'Richmond', 'Sugar Land', 'Katy'].map((area, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full border border-amber-600 text-gray-900 font-medium hover:bg-amber-600 hover:text-white transition-colors duration-200 cursor-default"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
