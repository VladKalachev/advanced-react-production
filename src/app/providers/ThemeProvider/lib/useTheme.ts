// import { useContext } from "react";
// import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";
// import { Theme } from "@/shared/const/theme";

// interface UseThemeResult {
//   toggleTheme: () => void;
//   theme: Theme;
// }

// export function useTheme(): UseThemeResult {
//   const { theme, setTheme } = useContext(ThemeContext);

//   const toggleTheme = () => {
//     const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
//     setTheme(newTheme);
//     localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
//   };

//   return {
//     theme,
//     toggleTheme,
//   };
// }

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "@/shared/const/theme";

interface UseThemeResult {
  // toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  toggleTheme: any;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  // const toggleTheme = (saveAction?: (theme: Theme) => void) => {
  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.ORANGE;
        break;
      case Theme.ORANGE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);

    // saveAction?.(newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
