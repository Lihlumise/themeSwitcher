import { PropsWithChildren, useContext, useReducer } from "react";
import { ITheme, THEME_INITIAL_STATE, ThemeActionsContext, ThemeProviderProps, ThemeStateContext } from "./context";
import themeReducer from "./reducer";
import { changeThemeAction } from "./actions";

export const ThemeProvider: React.FC<PropsWithChildren<ThemeProviderProps>> = (props) => {
    const { children } = props;

    const [state, dispatch] = useReducer(themeReducer, THEME_INITIAL_STATE);

    const changeTheme = (theme: ITheme) => {
        dispatch(changeThemeAction(theme));
    };
    //TODO: useMemo
    return (<ThemeStateContext.Provider value={state} >
        <ThemeActionsContext.Provider value={{ changeTheme }}>
            {children}
        </ThemeActionsContext.Provider>

    </ThemeStateContext.Provider>)
};

export const useThemeState = () => {
    const context = useContext(ThemeStateContext);

    if (!context){
        throw new Error("useThemeState must be within a ThemeProvider");
    }
    return context;
};

export const useThemeAction = () => {
    const context = useContext(ThemeActionsContext);
    if (!context){
        throw new Error("useThemeAction must be within a ThemeProvider");
    }
    return context;
}
