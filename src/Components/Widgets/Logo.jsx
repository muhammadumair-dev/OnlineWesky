import React from 'react'
import myImg from "../../assets/logo.png";

function Logo() {
  return (
    <div className="md:w-[250px] flex items-end sm:w-[200px] w-[150px]  ">
      <img className="sm:w-[100%] w-[100%] "  src={myImg} alt="pic" />

    </div>
  )
}

export default Logo