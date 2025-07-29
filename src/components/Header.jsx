import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Header() {
  const titleStyle = {
    fontSize: '1.8rem',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontWeight: '600',
    color: '#334155',
    marginTop: '1rem'
  }

  const logoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px'
  }

  return (
    <>
      <div style={logoContainerStyle}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={titleStyle}>Vite + React</h1>
    </>
  )
}

export default Header 