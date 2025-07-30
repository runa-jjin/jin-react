const buttonStyle = {
  backgroundColor: '#f8fafc',
  color: '#334155',
  border: '1px solid #e2e8f0',
  padding: '8px 16px',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
}

const buttonHoverStyle = {
  ...buttonStyle,
  backgroundColor: '#e2e8f0',
  transform: 'translateY(-1px)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
}

function Button({ children, onClick }) {
  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      onMouseOver={(e) => {
        Object.assign(e.target.style, buttonHoverStyle);
      }}
      onMouseOut={(e) => {
        Object.assign(e.target.style, buttonStyle);
      }}
    >
      {children}
    </button>
  )
}

export default Button 