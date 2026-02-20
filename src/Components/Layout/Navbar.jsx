import React from 'react'
import TopNavbar from '../Shared/TopNavbar'
import CenterNavbar from '../Shared/CenterNavbar'

function Navbar() {
  return (
    <div className="flex flex-col items-center h-[120px]"><TopNavbar/>
    <CenterNavbar/>
    </div>
  )
}

export default Navbar