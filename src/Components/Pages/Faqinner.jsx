import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-100 last:border-b last:border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center py-4 text-left group transition-all duration-200 hover:bg-gray-50/50 px-1"
      >
        <ChevronDown 
          className={`w-4 h-4 mr-3 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
        <span className="text-[14px] text-[#444] font-normal">
          {question}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 pl-8 pr-4 text-[13.5px] text-gray-500 leading-relaxed animate-in fade-in slide-in-from-top-1">
          <p>
            This is placeholder content for the answer to the question. You can replace this text with specific information regarding your shipping or general policies.
          </p>
        </div>
      )}
    </div>
  );
};

const FAQSection = ({ title, items }) => (
  <div className="flex flex-col">
    <div className="mb-4">
      <h2 className="text-[15px] font-bold tracking-tight text-[#333] uppercase pb-1 inline-block border-b border-gray-300">
        {title}
      </h2>
      <div className="h-[1px] bg-gray-100 w-full -mt-[1px]"></div>
    </div>
    <div className="flex flex-col">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item} />
      ))}
    </div>
  </div>
);

const ShippingAndQuestions = () => {
  const shippingItems = [
    "Delivery methods?",
    "How long will delivery take?",
    "What exactly happens after ordering?",
    "Can I send order as a gift including a message?"
  ];

  const otherQuestions = [
    "What is wishlist?",
    "What should I do if I receive a damaged or wrong product?",
    "Can I change or cancel my order?",
    "Do you deduct VAT on orders being shipped outside the EU?"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-white font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Left Column: Shipping Information */}
        <FAQSection title="SHIPPING INFORMATION" items={shippingItems} />

        {/* Right Column: Other Questions */}
        <FAQSection title="OTHER QUESTIONS" items={otherQuestions} />
      </div>
    </div>
  );
};

export default ShippingAndQuestions;