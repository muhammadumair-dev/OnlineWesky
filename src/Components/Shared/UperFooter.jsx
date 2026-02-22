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
    <div className=" mt-3 ">
   

      <div className=" ">
        
        <FooterCard />
      </div>
    </div>
  )
}

export default UperFooter
