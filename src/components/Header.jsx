import React from "react";
import logo from "../images/logo.png";
import { BsFillPlayFill } from "react-icons/bs";
import products from "../images/products.png";
import girl from "../images/girl.png"
import {AiFillStar} from "react-icons/ai"

const portret1 = "https://images.unsplash.com/photo-1589203832113-de9d078abc30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
const portret2 = "https://images.unsplash.com/photo-1468011749792-10026eb12caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
const portret3 = "https://images.unsplash.com/photo-1502982899975-893c9cf39028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
const portret4 ="https://images.unsplash.com/photo-1514929781313-76fcbb2136b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
const portret5 ="https://images.unsplash.com/photo-1523901056858-1b233826cb15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"

import packman from "../images/packman.png"



const link = [
  { link: "Home" },
  { link: "About Us" },
  { link: "Services" },
  { link: "Products" },
];

const Header = () => {
  return (
    <>
      <div >
        <nav className="flex justify-between pt-6 items-center mb-44">
          <img src={logo} alt="logo" />

          <ul className="flex ">
            {link.map((item, index) => (
              <li key={index} className="mr-14">
                <a href="#">{item.link}</a>
              </li>
            ))}
          </ul>
          <div>
            <button className="mr-6 font-medium">Login</button>
            <button className="bg-slate-blue">Sign Up</button>
          </div>
        </nav>
      </div>

      <div className="flex items-center justify-between relative mb-40">

        <div>
          <h1 className="text-6xl font-bold leading-[140%]">
            We Design Impactful <br /> ‍Digital{" "}
            <img src={products} alt="photos" className="inline" />{" "}
          </h1>
          <h3 className="w-[555px] text-[20px] text-[#3e5073]">
            Help find solutions with intitutive and in accordance with client
            business goals. we provide a high-quality services.
          </h3>
          <div className="flex">
            <button className="bg-slate-blue mr-6">Contact Us</button>
            <button className="flex items-center text-start font-poppins font-medium text-[#798bb0] ">
              <BsFillPlayFill className="w-4 h-4 p-3  box-content bg-[#e5e4ff] text-[#706FE5] rounded-full mr-2 "/>
              Watch our <br /> introduction video
            </button>
          </div>
        </div>

        <div className="">

          <div className="bg-[#e5e4ff] rounded-full w-96 h-96 translate-x-[60px] translate-y-[40px] border-[10px] border-[#706FE5]">

          </div>
              <img src={girl} alt="photos" className="absolute top-[-22%] left-[67%]"/>

              <div className="bg-white absolute drop-shadow-lg flex flex-col w-[250px] pl-7 py-3 rounded-2xl translate-x-[53%] -translate-y-4">
                <div className="portret flex items-center">
                  <img src={portret1} alt="photo" className=""/>
                  <img src={portret2} alt="photo" className="-translate-x-2/4"/>
                  <img src={portret3} alt="photo" className="-translate-x-full"/>
                  <img src={portret4} alt="photo" className="-translate-x-[150%]"/>
                  <img src={portret5} alt="photo" className="-translate-x-[200%]"/>
                </div>
                <h3 className="font-bold">120+ employees</h3>
                <h3 className="flex items-center font-medium">
                <AiFillStar className="text-[#706FE5]"/>
                5.0 (3.1K Reviews)
                </h3>
              </div>
        </div>
              <img src={packman} alt="packman" className="absolute right-[-55px] bottom-[-150px]" />
      </div>
    </>
  );
};

export default Header;
