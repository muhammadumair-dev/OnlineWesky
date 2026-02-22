import React from 'react'
import myImg from "../../assets/logo.png";

function Logo() {
  return (
    <div className="md:w-[250px] sm:w-[200px] w-[180px] logo ">
      <img className="sm:w-[100%] w-[90%]" src={myImg} alt="pic" />

    </div>
  )
}

export default Logo