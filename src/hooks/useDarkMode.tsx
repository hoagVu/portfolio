import useLocalStorage from "@/hooks/useLocalStorage";
import { THEME_MODE } from "@/utils/constants";
import { useEffect } from "react";

const useDarkMode = () => {
  const defaultDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log("defaultDark", defaultDark);
  };

  useEffect(() => {
    setTheme(defaultDark ? THEME_MODE.Dark : THEME_MODE.Light);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultDark]);

  return {
    isDarkMode: theme !== THEME_MODE.Light,
    currentTheme: theme,
    toggleDarkMode: switchTheme,
  };
};

export default useDarkMode;
