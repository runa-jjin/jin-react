import { Link } from 'react-router'

function SideNavigation() {
  const popularPosts = [1, 2, 3, 4, 5, 10, 15, 20, 25, 50]
  
  return (
    <aside style={{ 
      width: '220px',
      backgroundColor: '#e9ecef',
      padding: '1rem',
      minHeight: '100%'
    }}>
      <h3 style={{ 
        color: '#495057', 
        marginBottom: '1rem', 
        fontSize: '1.1rem',
        borderBottom: '2px solid #007bff',
        paddingBottom: '0.5rem'
      }}>
        Posts Menu
      </h3>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <Link 
          to="/posts" 
          style={{ 
            padding: '0.5rem 0.8rem',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500',
            marginBottom: '1rem'
          }}
        >
          📋 All Posts
        </Link>
        
        <h4 style={{ 
          color: '#6c757d', 
          fontSize: '0.9rem', 
          margin: '1rem 0 0.5rem 0',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Popular Posts
        </h4>
        
        {popularPosts.map(postId => (
          <Link 
            key={postId}
            to={`/posts/${postId}`}
            style={{ 
              padding: '0.4rem 0.8rem',
              color: '#007bff',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              fontSize: '0.9rem'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#f8f9fa'
              e.target.style.color = '#0056b3'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = '#007bff'
            }}
          >
            📄 Post #{postId}
          </Link>
        ))}
        
        <div style={{ 
          marginTop: '1.5rem',
          padding: '0.8rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px',
          fontSize: '0.8rem',
          color: '#6c757d',
          textAlign: 'center'
        }}>
          💡 Tip: Click on any post to see details, author info, and comments!
        </div>
      </nav>
    </aside>
  )
}

export default SideNavigation 