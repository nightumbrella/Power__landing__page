import React from "react";
import logo from "../images/logo__white.png";

import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { RiTwitterFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { TiSocialSkypeOutline } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-[#2E3E5C] px-[150px] w-[1440px] mx-auto pt-14 pb-14">

      <div className="flex items-center justify-between footer__line pb-8 mb-4">
        <img src={logo} alt="images/logo" />
            <div className="flex gap-5 items-center">
              <AiOutlineInstagram className="text-white bg-[#706FE5] box-content p-2 rounded-full cursor-pointer"/>
              <MdOutlineFacebook className="text-white bg-[#706FE5] box-content p-2 rounded-full cursor-pointer"/>
              <RiTwitterFill className="text-white bg-[#706FE5] box-content p-2 rounded-full cursor-pointer"/>
              <AiOutlineGithub className="text-white bg-[#706FE5] box-content p-2 rounded-full cursor-pointer"/>
              <TiSocialSkypeOutline className="text-white bg-[#706FE5] box-content p-2 rounded-full cursor-pointer"/>
            </div>
      </div>

      <div>
        <div>
        <h3 className="text-white">Company</h3>
        </div>
        <div className="flex justify-between items-center">
            <ul  className="flex justify-between gap-14">
                <li><a href="#" className="text-white">About Us</a></li>
                <li><a href="#" className="text-white">Press</a></li>
                <li><a href="#" className="text-white">Investors</a></li>
                <li><a href="#" className="text-white">Events</a></li>
                <li><a href="#" className="text-white">Terms of use</a></li>
                <li><a href="#" className="text-white">Privacy Police</a></li>
            </ul>
            <button className="bg-slate-blue">
            Contact Us
            </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;




