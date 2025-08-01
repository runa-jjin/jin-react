import { Link } from 'react-router'

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '500px',
        backgroundColor: 'white',
        padding: '3rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: '#6c757d',
          marginBottom: '1rem',
          lineHeight: '1'
        }}>
          404
        </div>
        
        <h1 style={{
          fontSize: '2rem',
          color: '#343a40',
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          페이지를 찾을 수 없습니다
        </h1>
        
        <p style={{
          color: '#6c757d',
          fontSize: '1.1rem',
          marginBottom: '2rem',
          lineHeight: '1.5'
        }}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.<br />
          URL을 다시 확인해 주세요.
        </p>
        
        <div style={{ marginBottom: '2rem' }}>
          <Link 
            to="/"
            style={{
              display: 'inline-block',
              backgroundColor: '#007bff',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 4px rgba(0, 123, 255, 0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#0056b3'
              e.target.style.transform = 'translateY(-1px)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#007bff'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            🏠 홈으로 돌아가기
          </Link>
        </div>
        
        <div style={{
          borderTop: '1px solid #dee2e6',
          paddingTop: '1.5rem'
        }}>
          <p style={{
            color: '#6c757d',
            fontSize: '0.9rem',
            marginBottom: '1rem'
          }}>
            다른 페이지로 이동하시겠습니까?
          </p>
          <nav style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <Link 
              to="/info/about" 
              style={{
                color: '#007bff',
                textDecoration: 'none',
                fontSize: '0.9rem',
                padding: '4px 8px'
              }}
            >
              About
            </Link>
            <Link 
              to="/posts" 
              style={{
                color: '#007bff',
                textDecoration: 'none',
                fontSize: '0.9rem',
                padding: '4px 8px'
              }}
            >
              Posts
            </Link>
            <Link 
              to="/info/counter" 
              style={{
                color: '#007bff',
                textDecoration: 'none',
                fontSize: '0.9rem',
                padding: '4px 8px'
              }}
            >
              Counter
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NotFound 