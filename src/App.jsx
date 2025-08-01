import './App.css'
import { Routes, Route, Link } from 'react-router'
import Posts from './posts/Posts'
import Post from './posts/Post'
import Counter from './counter/Counter'
import BasicLayout from './components/layouts/BasicLayout'
import PostLayout from './components/layouts/PostLayout'

function App() {
  return (
    <Routes>
      {/* 레이아웃 없는 홈 페이지 */}
      <Route path="/" element={<HomePage />} />
      
      {/* BasicLayout을 사용하는 페이지들 */}
      <Route element={<BasicLayout />}>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/counter" element={<Counter />} />
      </Route>
      
      {/* PostLayout을 사용하는 페이지들 */}
      <Route path="/posts" element={<PostLayout />}>
        <Route index element={<Posts />} />
        <Route path=":id" element={<Post />} />
      </Route>
    </Routes>
  )
}

function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h1>Welcome to My App</h1>
      <p>This is the home page without any layout.</p>
      <nav style={{ marginTop: '2rem' }}>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/posts" style={{ marginRight: '1rem' }}>Posts</Link>
        <Link to="/counter" style={{ marginRight: '1rem' }}>Counter</Link>
      </nav>
    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This page uses BasicLayout with header and footer.</p>
    </div>
  )
}

export default App
