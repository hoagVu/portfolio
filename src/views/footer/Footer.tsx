/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import "./Footer.scss";
import Typewriter from "typewriter-effect";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer>
      <div>© Viet Hoang Vu {new Date().getFullYear()}</div>
      <Typewriter
        options={{ loop: true, autoStart: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("“To infinity and beyond!” - Buzz Lightyear")
            .pauseFor(200)
            .deleteAll()

            .typeString(
              "“Do stupid stuff, but do it with confidence.” - flusha"
            )
            .pauseFor(200)
            .deleteAll()

            .pauseFor(200)
            .deleteAll()

            .start();
        }}
      />
    </footer>
  );
};

export default Footer;
