import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How ProAbility Works to promote Neurodiversity Inclusion</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account: Be a Job Seeker or an Employer, we cater to both sides!</p>
              <p>
              Joining ProAbility is your first step towards embracing neurodiversity. 
              Create your account in just a few simple steps to unlock opportunities oriented towards 
              your unique abilities.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p> Discover Neurodiversity-Inclusive Jobs or Post Inclusive Opportunities!</p>
              <p>
              Discover a diverse range of job opportunities or showcase your company's commitment to 
              inclusivity by posting a job on ProAbility. Our platform connects neurodiverse 
              individuals with employers who value their skills and perspectives.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job Or Recruit Suitable Candidates, fostering a bridge for neurodivergently talented individuals and forward-thinking employers!</p>
              <p>
              Apply for jobs that match your strengths and interests, or recruit candidates who bring fresh 
              perspectives to your team. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;