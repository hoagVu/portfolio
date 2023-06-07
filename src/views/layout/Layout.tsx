import * as React from "react";
import "./Layout.scss";
import useDarkMode from "@/hooks/useDarkMode";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  const { currentTheme } = useDarkMode();
  return <div className="container">Layout {currentTheme}</div>;
};

export default Layout;
