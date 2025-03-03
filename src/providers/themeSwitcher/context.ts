import { createContext, ReactNode } from "react";

export type ITheme = "light" | "dark";

export interface IThemeActions{
    changeTheme: (theme: ITheme) => void;
}

export interface ThemeProviderProps{children: ReactNode};

export const THEME_INITIAL_STATE: ITheme = "light";

export const ThemeStateContext = createContext<ITheme>(THEME_INITIAL_STATE);


export const ThemeActionsContext = createContext<IThemeActions>({
    changeTheme: () => {}
});