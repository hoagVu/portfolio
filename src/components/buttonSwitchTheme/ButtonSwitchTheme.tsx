import useDarkMode from "@/hooks/useDarkMode";
import * as React from "react";
import "./ButtonSwitchTheme.scss";

interface IButtonSwitchThemeProps {}

const ButtonSwitchTheme: React.FunctionComponent<
  IButtonSwitchThemeProps
> = () => {
  const { toggleDarkMode, currentTheme } = useDarkMode();

  return (
    <div className="btn-switch-theme">
      <input
        type="checkbox"
        id="checkbox"
        onClick={toggleDarkMode}
        data-theme={currentTheme}
      />
      <label htmlFor="checkbox" className="switch">
        <div className="powersign"></div>
      </label>
    </div>
  );
};

export default ButtonSwitchTheme;
