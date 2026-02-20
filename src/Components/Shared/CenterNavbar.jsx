import React from 'react'
import Logo from '../Widgets/Logo'
import SearchBar from '../Widgets/SearchBar'
import CenterNbtn from './CenterNbtn'
import {FaHeart , FaUser, FaShoppingCart } from "react-icons/fa";
import MenuNav from './MenuNav';


function CenterNavbar() {
  const products = [
    {  name: "Wishlist" ,icon: <FaHeart /> },
    {  name: "Login / Registe" ,icon:< FaUser/>},
    {  name: "Cart/ 411.76", icon: <FaShoppingCart /> }
  ];
  return (
    <div className=" w-[98%] flex items-center justify-between"><div className="flex items-center gap-[50px]"><MenuNav/><Logo/><SearchBar/></div><div className="flex cenbtn gap-[20px]">
  {products
    .filter(item => item.id !== 2)
    .map(item => (
      <CenterNbtn
        key={item.id}
        icon={item.icon}
        name={item.name}
      />
    ))}
</div></div>
  )
}

export default CenterNavbar