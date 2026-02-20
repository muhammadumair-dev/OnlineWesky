import React from 'react'
import myImg from "../../assets/logo.png";

function Logo() {
  return (
    <div className="md:w-[250px] logo ">
      <img className="md:w-screen" src={myImg} alt="pic" />

    </div>
  )
}

export default Logo