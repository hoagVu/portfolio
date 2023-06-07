import useDarkMode from "@/hooks/useDarkMode";
import * as React from "react";
import "./Header.scss";
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { currentTheme, toggleDarkMode } = useDarkMode();

  return (
    <header>
      Header
      <button onClick={toggleDarkMode}>
        Switch {currentTheme} to {currentTheme === "light" ? "Dark" : "Light"}{" "}
        Theme
      </button>
    </header>
  );
};

export default Header;
