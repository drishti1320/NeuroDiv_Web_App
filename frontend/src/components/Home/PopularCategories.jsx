import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "New And Emerging",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "Unleash your mobile devlopment skills",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "Rising category in Web Development! ",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "Marketing and Branding",
      subTitle: "Bringing unique perspectives in the world of emrging Brands",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "Show your meticulous calculative skills!",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "You can find futurstic AI startups and campaigns here!",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation and Editing",
      subTitle: "Rising skill in the market, bring it on!",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: " And Much More...",
      subTitle: "Not limited to just few domains!",
      icon: <IoGameController />,
    },
  ];
  return (
    <div className="categories">
      <h3>Open To Diverse Categories.</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;