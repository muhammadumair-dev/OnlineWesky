
import PaymentIcon from '../Shared/PaymentIcon';

const FooterBottom = () => {
  const navLinks = [
    "About", 
    "Terms & Conditions", 
    "Privacy Policy", 
    "FAQ", 
    "Contact"
  ];

  const paymentMethods = [
    { id: 1, name: "Mastercard" },
    { id: 2, name: "VISA" },
    { id: 3, name: "UnionPay" },
    { id: 4, name: "G Pay" },
    { id: 5, name: "Apple Pay" }
  ];

  return (
    <footer className="w-full bg-white pt-10 pb-6 px-4 md:px-10 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Navigation Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 border-b border-gray-200 pb-4">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
              className="text-[#999] hover:text-[#333] text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Bottom Section: Copyright and Payments */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright Text */}
          <div className="text-[#888] text-sm leading-relaxed text-center md:text-left">
            Copyright 2013 - 2026 © 
            <span className="font-medium text-[#555] ml-1">APZ Online Shop.</span> 
            All Rights Reserved. Website created by 
            <a href="#" className="text-[#3498db] ml-1 hover:underline">Ruxbo</a>
          </div>

          {/* Payment Icons */}
          <div className="flex flex-wrap justify-center gap-2">
            {paymentMethods.map((method) => (
              <PaymentIcon key={method.id} name={method.name} />
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;