import React from "react";
import firstImg from "./assets/first.png";

const AboutUs = () => {
  return (
    <div className="w-full bg-black">
      <div className="container w-full">
        <div className="w-full flex justify-between">
          <div>
            <img src={firstImg} alt="" />
          </div>
          <div>
            <div>
              <span>Компания</span>
              <span className="bg-black">KEYPUMPS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
