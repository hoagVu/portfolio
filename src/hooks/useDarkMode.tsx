import { setCurrentMode } from "@/features/systems/systemSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import useLocalStorage from "@/hooks/useLocalStorage";
import { THEME_MODE } from "@/utils/constants";
import { some } from "@/utils/helper";
import { useEffect } from "react";

const useDarkMode = () => {
  const defaultDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const currentTheme = useAppSelector(
    (state: some) => state.systemReducer.themeMode
  );
  const dispatch = useAppDispatch();
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? THEME_MODE.Dark : THEME_MODE.Light
  );

  const toggleDarkMode = () => {
    const result =
      theme === THEME_MODE.Light ? THEME_MODE.Dark : THEME_MODE.Light;
    setTheme(result);
    dispatch(setCurrentMode(result));
  };

  useEffect(() => {
    const result = theme
      ? theme
      : defaultDark
      ? THEME_MODE.Dark
      : THEME_MODE.Light;
    setTheme(result);
    dispatch(setCurrentMode(result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultDark, theme]);

  return {
    isDarkMode: theme !== THEME_MODE.Light,
    currentTheme,
    toggleDarkMode,
  };
};

export default useDarkMode;
