import React from 'react'
import botBack from "../../assets/NavBot.png";
import SelectBar from '../Widgets/SelectBar';

function NavbarBottom() {
  return (
    <div className="bg-cover h-[110px] navbottom flex justify-center text-amber-50 bg-center  " style={{ backgroundImage: `url(${botBack})` }}>
      <div className="flex-col gap-[100px] botinner items-center ml-[180px] justify-cente  py-3.5 px-2.5"><h1 className="text-2xl font-medium px-6.5 " >American Whiskey</h1> <div className="flex gap-1.5 py-3 font-medium "><a href="">Home</a><span>/</span><a href="">Whisky</a><span>/</span><a href="">American Whiskey</a></div></div>
      <div className=" relative botsel lg:left-40 left-80 top-8"><SelectBar /></div>



    </div>
  )
}

export default NavbarBottom