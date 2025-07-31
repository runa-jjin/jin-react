import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/fetch/Header'
import PostList from './components/fetch/PostList'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
          throw new Error('데이터를 불러오는데 실패했습니다.')
        }
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className="app">
      <Header postsCount={posts.length} />
      
      <main className="main">
        <PostList posts={posts} loading={loading} error={error} />
      </main>
    </div>
  )
}

export default App
