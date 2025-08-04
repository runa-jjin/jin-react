import { Routes, Route, Link, useLocation } from 'react-router'
import Posts from './posts/Posts'
import Post from './posts/Post'
import Counter from './counter/Counter'
import BasicLayout from './components/layouts/BasicLayout'
import PostLayout from './components/layouts/PostLayout'
import NotFound from './components/NotFound'

function App() {
  return (
    <Routes>
      {/* 레이아웃 없는 홈 페이지 */}
      <Route path="/" element={<HomePage />} />
      
      {/* BasicLayout을 사용하는 /info 하위 페이지들 */}
      <Route path="/info" element={<BasicLayout />}>
        <Route path="about" element={<AboutPage />} />
        <Route path="counter" element={<Counter />} />
        <Route path="location" element={<LocationPage />} />
      </Route>
      
      {/* PostLayout을 사용하는 페이지들 */}
      <Route path="/posts" element={<PostLayout />}>
        <Route index element={<Posts />} />
        {/* <Route path="new" element={<NewPost />} />
        <Route path="edit/:postId" element={<EditPost />} /> */}
        <Route path=":postId" element={<Post />} />
        {/* <Route path=":postId/comments/:commentId" element={<Comments />} /> */}
      </Route>

      <Route path="*" element={<NotFound />} />

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
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
      <p>This is the home page without any layout.</p>
      <nav className="mt-4">
        <Link to="/info/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/info/counter" style={{ marginRight: '1rem' }}>Counter</Link>
        <Link to="/posts" style={{ marginRight: '1rem' }}>Posts</Link>
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

function LocationPage() {
  const location = useLocation()
  return (
    <div>
      <h1>Location</h1>
      <p>Current location: {location.pathname}</p>
      <p>Current search: {location.search}</p>
      <p>Current hash: {location.hash}</p>
      <p>Current state: {JSON.stringify(location.state)}</p>
      <p>Current key: {location.key}</p>
      <p>Current pathname: {location.pathname}</p>
      <p>Current search: {location.search}</p>
      <p>Current hash: {location.hash}</p>
    </div>
  )
}

export default App
