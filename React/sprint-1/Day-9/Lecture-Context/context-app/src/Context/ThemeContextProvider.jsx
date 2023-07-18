import { createContext, useState } from "react"
export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [Theme, setTheme] = useState("dark")
    function ToggleTheme() {
        setTheme(Theme === "light" ? "dark" : "light")
    }
    return (

        <ThemeContext.Provider value={{ Theme, ToggleTheme }}>
            {props.children}

        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider