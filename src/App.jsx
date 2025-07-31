import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/fetch/Header'
import PostList from './components/fetch/PostList'
import UserFilter from './components/fetch/UserFilter'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [userIdFilter, setUserIdFilter] = useState('')

  // 필터링된 포스트 계산
  const filteredPosts = userIdFilter 
    ? posts.filter(post => post.userId === parseInt(userIdFilter))
    : posts

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

  const handleFilterChange = (value) => {
    setUserIdFilter(value)
  }

  return (
    <div className="app">
      <Header postsCount={filteredPosts.length} />
      
      <main className="main">
        <UserFilter 
          userIdFilter={userIdFilter}
          onFilterChange={handleFilterChange}
          totalPosts={posts.length}
          filteredCount={filteredPosts.length}
        />
        
        <PostList posts={filteredPosts} loading={loading} error={error} />
      </main>
    </div>
  )
}

export default App
