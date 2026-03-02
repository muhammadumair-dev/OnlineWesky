import React from 'react';
import CategoryDropdown from '../Shared/CategoryDropdown';

function NavbarSelecter() {
  const drinks = [
    { id: 1, selectname: "Gift Ideas", options: ["Wine", "Special Packages", "Gift Card"] },
    { id: 2, selectname: "New In", options: [] },
    { id: 3, selectname: "Whisky", options: ["Single Malt", "Blended", "Bourbon"] },
    { id: 4, selectname: "Gin & Tonic", options: ["London Dry", "Flavoured Gin", "Premium Gin"] },
    { id: 5, selectname: "Rum & Cachaca", options: ["White Rum", "Dark Rum", "Cachaca"] },
    { id: 6, selectname: "Vodka", options: ["Premium Vodka", "Flavoured Vodka"] },
    { id: 7, selectname: "Wine & Champagne", options: ["Red", "White", "Rose"] },
    { id: 8, selectname: "More", options: ["Accessories", "Gifts", "Glassware"] }
  ];

  return (
    <div className=" lg:inline  hidden py-3 ">
      <div className="flex bg-[#F4F4F4] h-[50px] items-center ">
        {drinks.map((item) => (
          <CategoryDropdown 
            key={item.id} 
            selectname={item.selectname} 
            name={item.options} 
          />
          
        ))}
      </div>
    </div>
  );
}

export default NavbarSelecter;
