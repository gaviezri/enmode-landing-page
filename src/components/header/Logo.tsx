import { useNavTheme } from '../../context/NavThemeContext'

const Logo = () => {
  const { navTheme } = useNavTheme()
  return (
    <a
      href="#"
      className="select-none hover:opacity-60 text-2xl"
      style={{
        fontFamily: 'Audiowide, system-ui, sans-serif',
        letterSpacing: '0.06em',
        color: navTheme === 'dark' ? '#F0EBE5' : '#0D0C10',
        transition: 'color 0.4s ease',
      }}
    >
      EnMode
    </a>
  )
}

export default Logo
