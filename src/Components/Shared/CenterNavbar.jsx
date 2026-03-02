import React, { useContext } from 'react'
import Logo from '../Widgets/Logo'
import SearchBar from '../Widgets/SearchBar'
import CenterNbtn from './CenterNbtn'
import {FaHeart , FaUser, FaShoppingCart } from "react-icons/fa";
import MenuNav from './MenuNav';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';


function CenterNavbar() {
  const { cart, isVisible, setIsVisible } = useContext(CartContext);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const products = [
    {  name: "Wishlist" ,icon: <FaHeart /> },
    {  name: "Login / Registe" , className:"hidden lg:inline"},
    {
      name: "",
      icon: (
        <button
          onClick={() => navigate('/cart')}
          className="relative"
        >
          <FaShoppingCart />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {count}
            </span>
          )}
        </button>
      ),
    },
  ];

  return (
    <div className=" w-[98%] lg:justify-between flex items-center sm:justify-center  h-fit md:w-full justify-between  gap-0 sm:gap-[150px]"><MenuNav/><div className="flex items-center  justify-between  gap-5     "><Logo/><SearchBar/></div><div className="flex   xl:gap-[8px]   gap-[2px]">
  {products
    .filter(item => item.id !== 2 )
    .map(item => (
      <CenterNbtn
        key={item.id}
        icon={item.icon}
        name={item.name}
        className={item.className}
      />
    ))}
</div></div>
  )
}

export default CenterNavbar