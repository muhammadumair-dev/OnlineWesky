import React from "react";
import { FaFacebookF, FaInstagram,FaTwitter } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import Frightbtn from "../Shared/Frightbtn";
function FooterCenter() {

  const icons = [
    { id: 1, icon: FaFacebookF, style: "bg-blue-800 " },
    { id: 2, icon: FaInstagram, style: "bg-blue-600" },
    { id: 3, icon: FaTwitter, style: "bg-blue-400" },
        { id: 3, icon: CgMail, style:"bg-black" },
    { id: 4, icon: IoCall , style: "bg-green-400 " }
  ];

  return (
    <div className="h-[320px] lg:h-[400px] py-[50px] block  flex justify-between text-white bg-[url('https://www.onlinecava.com/wp-content/uploads/2020/05/onlinecava-footer.jpg')] bg-cover bg-center px-4">

      {/* Left Section */}
      <div className="w-[48%] wid">
        <h1 className="text-2xl font-bold mb-4">About us</h1>

        <p className="text-sm mb-6">
          Onlinecava.com founded in 2013 and has since served thousands of satisfied customers Worldwide.
          Onlinecava.com stocks over 2000+ alcoholic products including Single Malt Whisky,
          Blended Whisky, Irish Whiskey, Premium Gin, Vodka, Rum and more other spirits.
        </p>

        {/* Icons Section */}
        <div className="flex text-white gap-1.5 text-[16px]">
          {icons.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`cursor-pointer transition duration-300 p-2.5 rounded-full ${item.style}`}
              >
                <IconComponent />
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[50%] wid mart">
        <h1 className="text-2xl font-bold mb-4">FILTER BY</h1>
        <div>
          <Frightbtn/>
        </div>
      </div>

    </div>
  );
}

export default FooterCenter;
