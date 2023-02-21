import React from "react";
import pattern from "../images/pattern.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="mb-52 relative">
      <img src={pattern} alt="pattern" />

      <h1 className="text-center text-4xl -translate-y-16 font-bold text-slate-400">
        Let’s hear <br />
        What they says
      </h1>
      <div className="flex relative justify-center mb-10">

        <div className="relative">
          <FaQuoteLeft className="absolute -left-16 text-6xl -top-10 text-[#706FE5]"/>
          <p className="w-[700px] leading-[250%] text-center text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
            lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum
            turpis amet id posuere torto quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <FaQuoteRight className="absolute -top-10 -right-20 text-6xl text-[#706FE5]"/>
        </div>

      </div>
        <div className="flex items-center gap-14 testimonials justify-center">
            <img src="https://images.unsplash.com/photo-1554889160-1f693e60f196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80" alt="" className="w-9 h-9"/>
            <img src="https://images.unsplash.com/photo-1620381537141-a7fcc5fc44dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="w-12 h-12"/>

            <img src="https://images.unsplash.com/photo-1507470545768-483dfc99ea8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" className="w-16 h-16 border-4 box-content border-[#706FE5]"/>
            <img src="https://images.unsplash.com/photo-1609863554781-35c7867dedb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className="w-12 h-12" />
            <img src="https://images.unsplash.com/photo-1524401033441-e87cab019093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt=""  className="w-9 h-9"/>
        </div>

      <img src={pattern} alt="pattern" className="absolute right-0 -bottom-32" />
    </div>
  );
};

export default Testimonials;
