import * as React from "react";
import "./Description.scss";
import Typewriter from "typewriter-effect";
import avatarImg from "/src/assets/images/avatar.jpeg";
interface IDescriptionProps {}

const Description: React.FunctionComponent<IDescriptionProps> = () => {
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
          In addition to my technical skills, I value the importance of
          creativity and attention to detail in my work as a web developer. I
          strive to bring a unique and visually appealing touch to every project
          I undertake, ensuring that the websites I create leave a lasting
          impression on users.
        </span>
        <span>
          I am experienced in implementing responsive design principles,
          ensuring that websites function seamlessly across various devices and
          screen sizes. With a focus on clean and efficient code, I prioritize
          performance optimization to deliver fast-loading and smooth user
          experiences.
        </span>
      </span>
      <div className="avatar">
        <img src={avatarImg} alt="" />
        <div className="avatar-linear"></div>
      </div>
    </div>
  );
};

export default Description;
