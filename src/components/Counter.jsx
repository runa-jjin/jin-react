import { useState, useEffect } from 'react'
import Button from './Button'

function Counter() {
  const [count, setCount] = useState(0)
  const countMessage = `Count: ${count}`

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

  useEffect(() => {
    console.log('count 변경됨')
  }, [count])

  const handleClickPlus = () => setCount((count) => count + 1)
  const handleClickMinus = () => setCount((count) => count - 1)

  return (
    <div className="card">
      <div style={countStyle}>
        Count: {count}
      </div>
      <div style={countStyle}>
        State에 영향받는 메시지 : {countMessage}
      </div>
      <div style={buttonContainerStyle}>
        <Button onClick={handleClickMinus}>
          −
        </Button>
        <Button onClick={handleClickPlus}>
          +
        </Button>
      </div>
    </div>
  )
}

export default Counter