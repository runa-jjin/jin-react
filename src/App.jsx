import './App.css'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  )
}

export default App
