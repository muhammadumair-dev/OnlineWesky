import React from 'react'
import FooterCard from './FooterCard'
// import UperTitle from './UperTitlejsx'

function UperFooter() {
   const FootTitle = [
    { name: "Chivas" },
    { name: "Smirnoff" },
    { name: "Mossburn" }
  ];

  return (
    <div className="w-[100%] bg-amber-">
   

      <div className=" flex uppf  gap-3">
          
        <FooterCard />
      </div>
    </div>
  )
}

export default UperFooter
