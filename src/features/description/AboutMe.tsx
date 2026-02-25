import * as React from "react";
import "./AboutMe.scss";

interface IAboutMeProps {}

const AboutMe: React.FunctionComponent<IAboutMeProps> = () => {
  return (
    <div className="about-me-content">
      <p>
        In addition to technical skills, I value creativity and attention to
        detail in every product I build. I aim to deliver interfaces that are
        both visually appealing and practical for real users.
      </p>
      <p>
        I have hands-on experience implementing responsive design principles,
        writing clean maintainable code, and optimizing performance to ensure
        smooth experiences across devices.
      </p>
    </div>
  );
};

export default AboutMe;
