/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import "./Layout.scss";
import Description from "@/features/description/Description";
import ButtonSwitchTheme from "@/components/buttonSwitchTheme/ButtonSwitchTheme";
import Info from "@/features/info/Info";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div className="container">
      <Description />
      <ButtonSwitchTheme />
      <Info />
    </div>
  );
};

export default Layout;
