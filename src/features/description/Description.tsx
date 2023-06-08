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
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
        <span>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </span>
      </span>
      <div className="avatar">
        <img src="/src/assets/images/avatar.png" alt="" />
      </div>
    </div>
  );
};

export default Description;
