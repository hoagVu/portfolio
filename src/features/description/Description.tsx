import * as React from "react";
import "./Description.scss";
import Typewriter from "typewriter-effect";

interface IDescriptionProps {}

const Description: React.FunctionComponent<IDescriptionProps> = (props) => {
  return (
    <div className="description">
      <span className="sub-title">
        <span className="title-intro">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("G'day, ")
                .pauseFor(500)
                .typeString("I'm Hoang.<br/>")
                .pauseFor(100)
                .typeString("I'm a Vietnamese web developer.")
                .start();
            }}
          />
        </span>
        <span className="label">
          As a seasoned web developer with expertise in JavaScript technologies.
          I have a strong passion for building high-performing, scalable, and
          visually appealing web applications.
        </span>
        <span>
          I am dedicated to staying up-to-date with the latest industry
          developments and continually improving my skills to deliver the best
          possible solutions to my clients.
        </span>
      </span>
      <div className="avatar">
        <img src="/src/assets/images/avatar.jpeg" alt="" />
        <div className="avatar-linear"></div>
      </div>
    </div>
  );
};

export default Description;
