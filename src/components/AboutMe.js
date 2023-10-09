import React from "react";
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";

export default function AboutMe() {
  return (
    <div className="background contact">
      <NavBar />
      <div className="belowSticky">
        <SocialLinks />
        <div>
            <h1 className="head">About Me</h1>
          <h2 style={{ textAlign: "center" }}>Welcome to my Portfolio</h2>
          <div className="about">
            <p style={{ fontSize: "20px", textAlign: "justify" }}>
              Welcome to my portfolio! I'm Deepak Kori, a passionate web
              developer skilled in HTML, CSS, JavaScript, and React JS.
              Programming has become my true passion, as it allows me to bring
              ideas to life and make a positive impact in the digital
              world.
            </p>
            <p style={{ fontSize: "20px", textAlign: "justify" }}>
              Currently I'm working as a Intern at Maxdigi Solutions Pvt.ltd.
              From the moment I started my journey as a web developer, I have
              been captivated by the boundless possibilities that programming
              offers. The ability to create visually appealing websites, build
              user-friendly applications, and solve complex problems with
              elegant solutions has truly fascinated me. Programming not only
              challenges me intellectually but also fuels my creativity, as I
              can transform concepts into functional and beautiful digital
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
