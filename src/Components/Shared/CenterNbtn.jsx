import React from 'react'
function CenterNbtn({ name, icon ,className }) {
  return (
    <button className={`border  cenbtn flex items-center sm:text-[18px] lg:w-fit lg:pt-2 lg:text-[13px] uppercase text-[12px] font-medium sm:py-2.5 py-2 rounded-md transition duration-300 gap-1 hover:bg-black hover:text-white px-3 ${className}`}>
      <span className="hidden lg:inline">{name}</span>
      <span >{icon}</span>
    </button>
  )
}

export default CenterNbtn