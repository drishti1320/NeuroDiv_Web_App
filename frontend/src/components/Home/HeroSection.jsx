import React from "react";
import { Link } from 'react-router-dom';
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "Jobs",
      subTitle: " See Live Jobs.",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "Employers",
      subTitle: "Register your Companies.",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "Connections",
      subTitle: "Bridge the diffrences.",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "Culture",
      subTitle: "Build an Inclusive Work Culture.",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>ProAbilty. </h1>
            <br></br>
            <h2>A platform for your professional journey through diverse abilities</h2>
            <p>
            At ProAbility, inclusion and diversity are at our core. 
            Our platform bridges neurodiverse talent with forward-thinking employers. 
            Whether you're seeking a supportive work environment or aiming to diversify your team, 
            ProAbility is your go-to resource.
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
  
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
  
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;