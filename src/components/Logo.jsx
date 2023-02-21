import React from "react";

import google from "../images/google.png";
import airbnb from "../images/airbnb.png";
import creative from "../images/creativemarket.png";
import shopify from "../images/shopify.png";
import amazon from "../images/amazon.png";

const images = [
  { img: google },
  { img: airbnb },
  { img: creative },
  { img: shopify },
  { img: amazon },
];

const Logo = () => {
  return (
    <div className="pb-28">
      <h1 className="mb-12 text-center font-bold text-xl text-[#464461]">Trusted by greatest companies</h1>
      <div className="flex items-center justify-between">
        {images.map((items) => {
          return (
            <>
              <img src={items.img} alt="photo" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Logo;
