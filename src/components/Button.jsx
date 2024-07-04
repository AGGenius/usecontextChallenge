import { useTheme } from "../themes/ThemeContext";

const ThemeButton = () => {
    const {theme, changeTheme} = useTheme();

    const handleChangeTheme = () => {
        theme === 'light' ? changeTheme('dark') : changeTheme('light');
    }

    return  (
        <>
            <button onClick={handleChangeTheme}>Cambiar tema</button>
        </>
    )
}

export default ThemeButton;