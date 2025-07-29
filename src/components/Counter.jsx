import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const countStyle = {
    fontSize: '2rem',
    margin: '20px 0'
  }
  
  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center'
  }
  
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
  }

  return (
    <div className="card">
      <div style={countStyle}>
        Count: {count}
      </div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <button style={buttonStyle} onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default Counter 