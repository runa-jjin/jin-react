import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import './Post.css'

const Post = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [user, setUser] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true)
        setError(null)

        // 포스트 상세 정보 가져오기
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        if (!postResponse.ok) {
          throw new Error('포스트를 찾을 수 없습니다.')
        }
        const postData = await postResponse.json()
        setPost(postData)

        // 사용자 정보와 댓글을 병렬로 가져오기
        const [userResponse, commentsResponse] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        ])

        if (!userResponse.ok) {
          throw new Error('사용자 정보를 가져올 수 없습니다.')
        }
        if (!commentsResponse.ok) {
          throw new Error('댓글을 가져올 수 없습니다.')
        }

        const userData = await userResponse.json()
        const commentsData = await commentsResponse.json()

        setUser(userData)
        setComments(commentsData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (postId) {
      fetchPostData()
    }
  }, [postId])

  if (loading) {
    return (
      <div className="post-detail">
        <div className="post-header">
          <div className="skeleton skeleton-back-button"></div>
          <div className="skeleton skeleton-post-id"></div>
        </div>

        {/* 포스트 콘텐츠 스켈레톤 */}
        <article className="post-content">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-body"></div>
        </article>

        {/* 작성자 정보 스켈레톤 */}
        <section className="author-info">
          <div className="skeleton skeleton-section-title"></div>
          <div className="author-card">
            <div className="author-details">
              <div className="skeleton skeleton-author-name"></div>
              <div className="skeleton skeleton-username"></div>
              <div className="skeleton skeleton-contact-info"></div>
              <div className="skeleton skeleton-contact-info"></div>
              <div className="skeleton skeleton-contact-info"></div>
            </div>
            <div className="author-address">
              <div className="skeleton skeleton-subtitle"></div>
              <div className="skeleton skeleton-address-line"></div>
              <div className="skeleton skeleton-address-line"></div>
            </div>
            <div className="author-company">
              <div className="skeleton skeleton-subtitle"></div>
              <div className="skeleton skeleton-company-name"></div>
              <div className="skeleton skeleton-company-desc"></div>
            </div>
          </div>
        </section>

        {/* 댓글 섹션 스켈레톤 */}
        <section className="comments-section">
          <div className="skeleton skeleton-section-title"></div>
          <div className="comments-list">
            {[1, 2, 3, 4, 5].map(index => (
              <div key={index} className="comment">
                <div className="comment-header">
                  <div className="skeleton skeleton-comment-name"></div>
                  <div className="skeleton skeleton-comment-email"></div>
                </div>
                <div className="skeleton skeleton-comment-body"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }

  if (error) {
    return (
      <div className="post-detail">
        <div className="error">
          <h2>😕 오류가 발생했습니다</h2>
          <p>{error}</p>
          <Link to="/posts" className="back-button">
            ← 포스트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="post-detail">
        <div className="not-found">
          <h2>포스트를 찾을 수 없습니다</h2>
          <Link to="/posts" className="back-button">
            ← 포스트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="post-detail">
      <div className="post-header">
        <Link to="/posts" className="back-button">
          ← 포스트 목록
        </Link>
        <span className="post-id">Post #{post.id}</span>
      </div>

      {/* 포스트 상세 정보 */}
      <article className="post-content">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-body">{post.body}</p>
      </article>

      {/* 작성자 정보 */}
      {user && (
        <section className="author-info">
          <h3>작성자 정보</h3>
          <div className="author-card">
            <div className="author-details">
              <h4>{user.name}</h4>
              <p className="username">@{user.username}</p>
              <p className="email">📧 {user.email}</p>
              <p className="phone">📞 {user.phone}</p>
              <p className="website">🌐 {user.website}</p>
            </div>
            <div className="author-address">
              <h5>주소</h5>
              <p>{user.address.street}, {user.address.suite}</p>
              <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
            <div className="author-company">
              <h5>회사</h5>
              <p><strong>{user.company.name}</strong></p>
              <p>{user.company.catchPhrase}</p>
            </div>
          </div>
        </section>
      )}

      {/* 댓글 목록 */}
      <section className="comments-section">
        <h3>댓글 ({comments.length}개)</h3>
        {comments.length === 0 ? (
          <p className="no-comments">아직 댓글이 없습니다.</p>
        ) : (
          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment">
                <div className="comment-header">
                  <strong className="comment-name">{comment.name}</strong>
                  <span className="comment-email">({comment.email})</span>
                </div>
                <p className="comment-body">{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Post