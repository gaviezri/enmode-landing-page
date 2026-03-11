const Logo = ({ overridColor }: { overridColor?: string }) => {
  return (
    <a
      href="#"
      className="select-none hover:opacity-60 text-2xl"
      style={{
        fontFamily: 'Syne, system-ui, sans-serif',
        fontWeight: 800,
        letterSpacing: '0.06em',
        color: overridColor ?? '#0D0C10',
        transition: 'color 0.4s ease',
      }}
    >
      EnMode
    </a>
  )
}

export default Logo
