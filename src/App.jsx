import './App.css'
import { Routes, Route, Link } from 'react-router'
import Posts from './posts/Posts'
import Counter from './counter/Counter'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<h1>fetch 상세화면</h1>} />
      </Routes>
    </>
  )
}

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/fetch">Fetch</Link> | <Link to="/counter">Counter</Link>
    </nav>
  )
}

export default App
