import './App.css'
import { Routes, Route } from 'react-router'
import Fetch from './fetch/Fetch'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/fetch" element={<Fetch />} />
    </Routes>
  )
}

export default App
