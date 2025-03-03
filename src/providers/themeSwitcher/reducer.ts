import { handleActions } from 'redux-actions';
import { ITheme, THEME_INITIAL_STATE } from "./context";
import { ThemeActionEnums } from "./actions";

const themeReducer = handleActions<ITheme, ITheme>(
    {
        [ThemeActionEnums.changeTheme]: (state: ITheme, action: ReduxActions.Action<ITheme>) => {
            const { payload } = action;

            //TODO: This simple because I am not using a string?
            return payload;
        }
    },
    THEME_INITIAL_STATE
);

export default themeReducer;