import React from 'react'
import botBack from "../../assets/NavBot.png";
import SelectBar from '../Widgets/SelectBar';

function NavbarBottom() {
  return (
    <div className="bg-cover py-[60px] w-full flex-col justify-center items-center h-fit text-white  " style={{ backgroundImage: `url(${botBack})` }}>
      <div className="flex-col items-center   h-[80%]"><h1 className="text-2xl font-medium text-center " >American Whiskey</h1> <div className="justify-center flex gap-1.5 py-3 font-medium "><a href="">Home</a><span>/</span><a href="">Whisky</a><span>/</span><a href="">American Whiskey</a></div></div>
      <div className=" flex justify-center "><SelectBar /></div>



    </div>
  )
}

export default NavbarBottom