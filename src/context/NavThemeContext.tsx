import { createContext, useContext, useState } from 'react'

type NavTheme = 'light' | 'dark'

interface NavThemeContextValue {
  navTheme: NavTheme
  setNavTheme: (theme: NavTheme) => void
}

const NavThemeContext = createContext<NavThemeContextValue>({
  navTheme: 'light',
  setNavTheme: () => {},
})

export function NavThemeProvider({ children }: { children: React.ReactNode }) {
  const [navTheme, setNavTheme] = useState<NavTheme>('light')
  return (
    <NavThemeContext.Provider value={{ navTheme, setNavTheme }}>
      {children}
    </NavThemeContext.Provider>
  )
}

export function useNavTheme() {
  return useContext(NavThemeContext)
}
