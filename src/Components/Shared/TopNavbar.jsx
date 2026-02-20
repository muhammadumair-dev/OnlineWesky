import React from 'react'
import { CgMail } from "react-icons/cg";

function TopNavbar() {
    return (
        <div className="flex All justify-between p-1 w-[98%] ">
            <div><strong class="uppercase font-medium text-[13px] text-[#121212D9] ">All you Need in Alcohol</strong></div>
            <div className="none sm:bg-amber-600">
                <ul className="flex none gap-5 text-[#9F9F9F] font-normal text-[15px]">
                    <li><a href=""  className=" hover:text-[#121212D9] ">About Us</a></li>
                    <li><a href="" className=" hover:text-[#121212D9] ">Contact</a></li>
                    <li><a href="" className=" hover:text-[#121212D9] ">FAQs</a></li>
                    <li><a href="" className="flex items-center gap-1  hover:text-[#121212D9]"><CgMail />Newsletter</a></li>
                </ul>
            </div>
        </div>
    )
}

export default TopNavbar