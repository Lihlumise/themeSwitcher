import { useThemeAction, useThemeState } from "../providers/themeSwitcher/index";


const SwitcherButton: React.FC = () => {
    const  context  = useThemeState();
    const  { changeTheme } = useThemeAction();
    

    return  (<button onClick={() => changeTheme(context === "light" ? "dark" : "light")} style={{backgroundColor: context === "light" ? "pink" : "darkblue"}}>
        Switch Theme to {context === 'light' ? 'dark': 'light'}
    </button>);

};

export default SwitcherButton;
