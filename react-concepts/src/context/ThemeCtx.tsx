// top level import
import { ReactElement, ReactNode, createContext, useContext, useState } from "react";

// context type definition
type ThemeType = {
    theme: string,
    setTheme?: (theme: string) => void
}

const ThemeCtx = createContext<ThemeType>({ theme: 'light' });

// props type definition
type IProps = {
    children: ReactNode
}

// Context definition
export function ThemeCtxWrapper({ children }: IProps): ReactElement {
    const [theme, setTheme] = useState<string>('light');
    return (
        <ThemeCtx.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeCtx.Provider>
    )
}

// helper hook to access context within components
export function useTheme(): ThemeType {
    return useContext(ThemeCtx);
};
