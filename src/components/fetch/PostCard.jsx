function PostCard({ post }) {
  return (
    <article className="post-card">
      <div className="post-header">
        <span className="post-id">#{post.id}</span>
        <span className="user-id">작성자 {post.userId}</span>
      </div>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
    </article>
  )
}

export default PostCard 