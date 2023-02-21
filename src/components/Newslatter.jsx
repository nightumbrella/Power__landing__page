import React from "react";
import { MdEmail } from "react-icons/md";
import ux from "../images/ux.png";
import logo from "../images/logo__branding.png";
import app from "../images/mobile.png";
import website from "../images/website.png";

const Newslatter = () => {
  return (
    <div className="flex items-start justify-around pb-40">

      <div className="translate-y-9">
        <h1 className="text-4xl font-bold mb-8">How we can help you</h1>
        <h3 className="w-[450px] mb-12 text-slate-500">
          Follow our newsletter. We will regular update our latest project and
          availability.
        </h3>
        <form className="relative flex items-center">
            <MdEmail className="absolute text-2xl translate-x-2 text-[#9c9bb7]"/>
            <input type="text" placeholder="Enter your email address" className="bg-[#d8d7f6] placeholder:text-[#9b9ab4] pl-10 py-4 w-[491px] p-44 rounded-md"/>
          <button className="bg-slate-blue drop-shadow-lg -translate-x-[170px] ">Subscribe</button>
        </form>
      </div>

      <div className="grid newslatter">

        <div>
          <img src={ux} alt="photo" />
          <h1>UI/UX Design</h1>
          <p>Sometimes features require a short description</p>
        </div>
        <div>
          <img src={logo} alt="photo" />
          <h1>Logo Branding</h1>
          <p>Sometimes features require a short description</p>
        </div>
        <div>
          <img src={app} alt="photo" />
          <h1>App Design</h1>
          <p>Sometimes features require a short description</p>
        </div>
        <div>
          <img src={website} alt="photo" />
          <h1>Webiste Design</h1>
          <p>Sometimes features require a short description</p>
        </div>


      </div>
    </div>
  );
};

export default Newslatter;
