import PostCard from './PostCard'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'

function PostList({ posts, loading, error }) {
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <div className="posts-grid">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList 