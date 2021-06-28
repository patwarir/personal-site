import { Context, createContext, Dispatch, FunctionComponent, SetStateAction, useState } from "react";

export type Theme = "light" | "dark";
const defaultTheme: Theme = "light";

export const ThemeContext: Context<{ theme: Theme, setTheme: Dispatch<SetStateAction<Theme>> }> = (createContext(null) as unknown) as Context<{ theme: Theme, setTheme: Dispatch<SetStateAction<Theme>> }>;

export const ThemeProvider: FunctionComponent<{ theme?: Theme }> = (props) => {
  const [theme, setTheme] = useState(props.theme || defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
