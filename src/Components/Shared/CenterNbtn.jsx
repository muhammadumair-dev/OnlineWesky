import React from 'react'
function CenterNbtn({ name, icon ,className }) {
  return (
    <button className={`border cenbtn flex items-center uppercase text-[14px] font-medium py-1.5 rounded-md transition duration-300 gap-1.5 hover:bg-black hover:text-white px-3 ${className}`}>
      <span className="hi lg:flex md:hidden">{name}</span>
      <span>{icon}</span>
    </button>
  )
}

export default CenterNbtn