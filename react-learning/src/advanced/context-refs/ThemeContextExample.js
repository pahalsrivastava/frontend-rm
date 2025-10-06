import React, { createContext, useContext } from 'react';
import { background } from 'storybook/internal/theming';
const ThemeContext = createContext('light');
function ThemedButton(){
    const theme = useContext(ThemeContext);
    const btnRef = useRef(null);
    const focusButton = () => btnRef.current.focus();
    return (
        <div>
            <buttonn ref={btnRef} style={{backgroundColor: theme===dark ? '#333': '#eee', color:theme === dark ? 'white': 'black'}}>
                Theme is {theme}
            </buttonn>
            <button onClick={focusButton}>Focus the themed button</button>
        </div>
    );
}
export default function ThemeContextExample(){
    return (
        <ThemeContext.Provider value="dark">
            <ThemedButton />
        </ThemeContext.Provider>
    );
}