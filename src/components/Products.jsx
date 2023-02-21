import React from "react";

import products1 from "../images/product1.png";
import products2 from "../images/product2.png";
import products3 from "../images/product3.png";
import products4 from "../images/product4.png";
import products5 from "../images/product5.png";

const products = [
  {
    img: products1,
    subtitle: "App Design - June 20, 2022",
    text: "App Redesign",
    subtext:
      "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },

  {
    img: products2,
    subtitle: "App Design - June 20, 2022",
    text: "Redesign channel website landng page",
  },

  {
    img: products3,
    subtitle: "App Design - June 20, 2022",
    text: "New Locator App For a New Company",
  },

  {
    img: products4,
    subtitle: "App Design - June 20, 2022",
    text: "Rental Rooms Web App Platform ",
  },

  {
    img: products5,
    subtitle: "App Design - June 20, 2022",
    text: "Calendar App for Big SASS Company",
  },
];

const Products = () => {
  return (
    <div className="text-start mb-40">
      <h1 className="text-4xl font-bold mb-4">We create world-class digital products</h1>
      <p className="text-lg mb-6">
        By information about design the world to the best instructors, heatc
        helping By information
      </p>
      <div className="products grid">
        {products.map((items, index) => {
          return (
            <div key={index}>
              <img src={items.img} alt="photo__products" className="drop-shadow-lg" />
              <p className="text-sm">{items.subtitle}</p>
              <h2 className="text-lg font-bold text-slate-700">{items.text}</h2>
              <p className="text-sm text-slate-400">{items.subtext}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Products;



