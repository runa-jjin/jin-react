import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
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

  if (loading) {
    return (
      <div className="app">
        <div className="loading">포스트를 불러오는 중...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <div className="error">오류: {error}</div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>게시판</h1>
        <p>총 {posts.length}개의 포스트</p>
      </header>
      
      <main className="main">
        <div className="posts-grid">
          {posts.map(post => (
              <article key={post.id} className="post-card">
                <div className="post-header">
                  <span className="post-id">#{post.id}</span>
                  <span className="user-id">작성자 {post.userId}</span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
              </article>
          ))}
          {/* {posts.map((post) => {
            console.log(post);
            return (
              <article key={post.id} className="post-card">
                <div className="post-header">
                  <span className="post-id">#{post.id}</span>
                  <span className="user-id">작성자 {post.userId}</span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
              </article>
            )
          })} */}
        </div>
      </main>
    </div>
  )
}

export default App
