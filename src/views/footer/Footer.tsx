/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import "./Footer.scss";
import Typewriter from "typewriter-effect";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const quotes = [
    "“To infinity and beyond!” - Buzz Lightyear",
    "“Quote2!” - Buzz ",
    "“Quote3!” - Lightyear",
  ];

  const [quote, setQuote] = React.useState<string>(quotes[0]);

  React.useEffect(() => {
    const interval = setInterval((_) => {
      console.log("quote", quote);
      setQuote((prev) => {
        return quotes.filter((elm) => elm !== prev)[
          Math.floor(
            Math.random() * quotes.filter((elm) => elm !== prev).length
          )
        ];
      });
    }, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

            .typeString("“Quote3!” - sadasdxzc ")
            .pauseFor(200)
            .deleteAll()

            .start();
        }}
      />
    </footer>
  );
};

export default Footer;
