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
    <div className="w-[32%] b">
   

      <div className="">
          
        <FooterCard />
      </div>
    </div>
  )
}

export default UperFooter
