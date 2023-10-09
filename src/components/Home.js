import React from "react";
import NavBar from "./NavBar";
import avtar from "../assets/avatar.png";
import SocialLinks from "./SocialLinks";

export default function Home() {
  return (
    <div className="background contact">
      <NavBar />
      <div className="belowSticky">
        <SocialLinks />
        <div className="homeFlex">
          <div>
            <br></br>
            <br></br>
            <h1 style={{fontSize:'60px'}}>I'm a Software Developer</h1>
            <br></br>
            <h4>
              " Seeking a challenging and rewarding position <br></br>in an esteemed
              organization, I aim to utilize my<br></br> skills and abilities to
              contribute to both my <br></br>professional and personal growth. With a
              strong<br></br>work ethic, problem-solving abilities, and a<br></br> commitment to
              continuous learning, I am<br></br> dedicated to delivering high-quality
              results and <br></br>making a positive impact in any team or project I <br></br>am a
              part of."
            </h4>
          </div>
          <div>
            <img src={avtar} alt="avtar"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
