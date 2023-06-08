import * as React from "react";
import "./Header.scss";
import CatAnimation from "@/components/catAnimation/CatAnimation";
import useDarkMode from "@/hooks/useDarkMode";
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="header">
      {isDarkMode ? (
        <CatAnimation />
      ) : (
        <button onClick={() => window.scrollTo(0, 0)}>
          <img src="/src/assets/images/image.png" alt="" width={80} />
        </button>
      )}
      <div className="nav-link">
        <button
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/hoang-vu-viet-93608114b/",
              "_blank"
            );
          }}>
          myLinkedin
        </button>
      </div>
    </div>
  );
};

export default Header;
