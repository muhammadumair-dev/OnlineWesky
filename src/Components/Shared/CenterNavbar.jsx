import React from 'react'
import Logo from '../Widgets/Logo'
import SearchBar from '../Widgets/SearchBar'
import CenterNbtn from './CenterNbtn'
import {FaHeart , FaUser, FaShoppingCart } from "react-icons/fa";
import MenuNav from './MenuNav';


function CenterNavbar() {
  const products = [
    {  name: "Wishlist" ,icon: <FaHeart /> },
    {  name: "Login / Registe" , className:"hidden lg:inline", icon:< FaUser/>},
    {  name: "Cart/ 411.76", icon: <FaShoppingCart /> }
  ];
  return (
    <div className=" w-[95%] lg:justify-between flex items-center sm:justify-center  md:w-fullgama justify-between  gap-0 sm:gap-[90px]"><div className="flex items-center sm:justify-between justify-center  w-[250px] md:w-[470px]  sm:w-[380px] gap-[35px]"><MenuNav/><Logo/><SearchBar/></div><div className="flex cenbtn sm:gap-5 gap-[6px]">
  {products
    .filter(item => item.id !== 2)
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