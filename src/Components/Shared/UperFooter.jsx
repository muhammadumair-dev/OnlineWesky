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
   

      <div className=" flex  md:flex-wrap uppf  md:h-fit gap-5">
        
        <FooterCard />
      </div>
    </div>
  )
}

export default UperFooter
