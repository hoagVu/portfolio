/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import "./Footer.scss";
interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer>
      <div>© Viet Hoang Vu {new Date().getFullYear()}</div>
      <div className="quote">“To infinity and beyond!” - Buzz Lightyear</div>
    </footer>
  );
};

export default Footer;
