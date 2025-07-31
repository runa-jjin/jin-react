import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/fetch/Header'
import PostList from './components/fetch/PostList'
import UserFilter from './components/fetch/UserFilter'
import Pagination from './components/fetch/Pagination'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [userIdFilter, setUserIdFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  
  const itemsPerPage = 6

  // 필터링된 포스트 계산
  const filteredPosts = userIdFilter 
    ? posts.filter(post => post.userId === parseInt(userIdFilter))
    : posts

  // 페이징 계산
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

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
    setCurrentPage(1) // 필터 변경시 첫 페이지로 이동
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // 페이지 변경시 스크롤을 맨 위로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
        
        <PostList posts={currentPosts} loading={loading} error={error} />
        
        {!loading && !error && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            totalItems={filteredPosts.length}
          />
        )}
      </main>
    </div>
  )
}

export default App
