import { useThemeAction } from "@/providers/themeSwitcher";

const SwitcherButton: React.FC = () => {
    const  { changeTheme } = useThemeAction;
    

    return  (<button onClick={changeTheme('dark')}>
        Switch Theme
    </button>);

};

export default SwitcherButton;
