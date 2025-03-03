import { createAction } from "redux-actions";
import { ITheme } from "./context";

export enum ThemeActionEnums {
    changeTheme = 'CHANGE_THEME',
};

// TODO: figure out the line below
export const changeThemeAction = createAction<ITheme, ITheme>(ThemeActionEnums.changeTheme, (theme: ITheme) => (theme));

