import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { Link } from 'react-router-dom'
import NewsletterModal from '../Widgets/NewsletterModal';

function TopNavbar() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <div className="flex lg:justify-between justify-center p-1 w-[98%]">

      <strong className="uppercase font-medium text-[13px]">
        All you Need in Alcohol
      </strong>

      <ul className="lg:flex hidden gap-5 text-[#9F9F9F]">

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>

        <li>
          <button onClick={() => setIsNewsletterOpen(true)} className="flex items-center gap-1 text-[#9F9F9F] hover:text-amber-500">
            <CgMail /> Newsletter
          </button>
        </li>

      </ul>

      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />

    </div>
  );
}

export default TopNavbar;