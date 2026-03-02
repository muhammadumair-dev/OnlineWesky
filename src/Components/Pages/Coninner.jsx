import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t bg border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center py-4 text-left group transition-all duration-200"
      >
        <ChevronDown 
          className={`w-4 h-4 mr-3 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
        <span className="text-[14px] text-gray-700 font-medium hover:text-gray-900">
          {question}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 pl-7 text-[13px] text-gray-500 leading-relaxed animate-fadeIn">
          Placeholder answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      )}
    </div>
  );
};

const ApzContactInfo = () => {
  const faqs = [
    "What are the delivery charges for orders?",
    "Which payment methods are accepted?",
    "How long will delivery take?",
    "How secure is shopping from onlinecava.com? Is my data protected?",
    "What exactly happens after ordering?",
    "Can I send order as a gift including a message?"
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-12 bg-white font-sans text-[#333]">
      
      {/* --- Header Section --- */}
      <section className="mb-10">
        <h1 className="text-sm font-bold tracking-wider uppercase mb-1">
          APZ ONLINE SHOP
        </h1>
        <div className="h-[1px] bg-gray-200 w-full mb-6"></div>

        <div className="space-y-6 text-[14px]">
          <div>
            <p className="font-bold mb-1">Telephone numbers:</p>
            <p className="text-gray-600 font-medium">7008 7010 and +357 99885502</p>
          </div>

          <div>
            <p className="font-bold mb-1">Office Address:</p>
            <address className="not-italic text-gray-600 leading-relaxed">
              5, Konteas st.,<br />
              Zephyros Village 1 Block 11 Apt.21,<br />
              8504 Mandria, Paphos, CYPRUS
            </address>
          </div>

          <div className="text-gray-600 leading-snug">
            <p className="font-bold text-black mb-1">Registered in Republic of Cyprus</p>
            <p>Company registration no. EE 38980</p>
            <p>VAT registration no. CY008146851</p>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section>
        <h2 className="text-sm font-bold tracking-wider uppercase mb-1">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="h-[1px] bg-gray-200 w-full mb-6"></div>

        <p className="text-[14px] text-gray-700 italic mb-6">
          Please read our FAQ before sending us a message.
        </p>

        <div className="mb-6">
          {faqs.map((q, index) => (
            <FAQItem key={index} question={q} />
          ))}
          <div className="border-t border-gray-200"></div>
        </div>

        <div className="text-[13px] text-gray-700">
          Do you have more Questions?{' '}
          <a href="#" className="font-medium hover:underline cursor-pointer">
            read more FAQs
          </a>
        </div>
      </section>
      
    </div>
  );
};

export default ApzContactInfo;