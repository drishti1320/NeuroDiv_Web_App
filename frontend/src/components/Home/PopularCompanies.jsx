import React from "react";
import { FaMicrosoft } from "react-icons/fa";
import { SiIbm } from "react-icons/si";
import { LuHotel } from "react-icons/lu";


const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Known for its Autism Hiring Program.",
      openPositions: 150,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "IBM",
      location: "Training employees with autism and other neurodivergent conditions.",
      openPositions: 250,
      icon: <SiIbm />,
    
    },
    {
      id: 3,
      title: "Marriott International",
      location: " Their Neurodiversity Employment Program hiring in roles within hospitality.",
      openPositions: 120,
      icon: <LuHotel />
      ,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>Leading examples paving the way for inclusive environments.</h3>
        <p>From big giants to budding startups, embracing neurodiversity inclusion lights 
          the path to a promising future! Here are some inspiring examples. 
           <b> If they can do it, so can you!</b></p>
        <div className="banner">
          {companies.map((element) => {
            return (
              
              <div className="card" key={element.id}>
               
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Over {element.openPositions} + neurodivergent talent this year.</button>
                
              </div>
              
  
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;