import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const countMessage = `Count: ${count}`

  return (
    <div className="card">
      <div style={countStyle}>
        Count: {count}
      </div>
      <div style={countStyle}>
        State에 영향받는 메시지 : {countMessage}
      </div>
      <div style={buttonContainerStyle}>
        <button 
          style={buttonStyle} 
          onClick={() => setCount((count) => count - 1)}
          onMouseOver={(e) => {
            Object.assign(e.target.style, buttonHoverStyle);
          }}
          onMouseOut={(e) => {
            Object.assign(e.target.style, buttonStyle);
          }}
        >
          −
        </button>
        <button 
          style={buttonStyle}
          onClick={() => setCount((count) => count + 1)}
          onMouseOver={(e) => {
            Object.assign(e.target.style, buttonHoverStyle);
          }}
          onMouseOut={(e) => {
            Object.assign(e.target.style, buttonStyle);
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter 



const countStyle = {
  fontSize: '1.5rem',
  margin: '20px 0',
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  fontWeight: '500',
  color: '#334155'
}

const buttonContainerStyle = {
  display: 'flex',
  gap: '12px',
  justifyContent: 'center'
}

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

const textStyle = {
  fontSize: '0.875rem',
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  color: '#64748b',
  textAlign: 'center',
  marginTop: '1.5rem'
}

const codeStyle = {
  fontFamily: 'monospace',
  backgroundColor: '#f1f5f9',
  padding: '0.2rem 0.4rem',
  borderRadius: '4px',
  fontSize: '0.875rem',
  color: '#334155'
}