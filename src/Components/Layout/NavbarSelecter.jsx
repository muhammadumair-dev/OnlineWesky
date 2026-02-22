import React from 'react';
import CategoryDropdown from '../Shared/CategoryDropdown';

function NavbarSelecter() {
  const drinks = [
    { 
      id: 1, 
      selectname: "Gift Ideas", 
      options: ["Wine", "Champagne", "Sparkling Wine"] 
    },
       { 
      id: 2, 
      selectname: "New In", 
        
     
    },
    { 
      id: 3, 
      selectname: "Whisky", 
      options: ["Gin", "Tonic", "Vodka"] 
    },
    { 
      id: 4, 
      selectname: "Gin & Tonic", 
      options: ["Red Wine", "White Wine", "Rose"] 
    }
    ,
    { 
      id: 5, 
      selectname: "Rum & Cachaca", 
  
    }
     ,
    { 
      id: 5, 
      selectname: "Vodka", 
  
    },
    { 
      id: 3, 
      selectname: "Wine & Champagne", 
      options: ["Gin", "Tonic", "Vodka"] 
    },,
    { 
      id: 3, 
      selectname: "More", 
      options: ["Gin", "Tonic", "Vodka"] 
    }
  ];

  return (
    <div className=" lg:inline bg-amber-400 hidden py-3 ">
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
