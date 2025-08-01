import { Link } from 'react-router'

function SideNavigation() {
  return (
    <aside style={{ 
      width: '200px',
      backgroundColor: '#e9ecef',
      padding: '1rem',
      minHeight: '100%'
    }}>
      <h3>Posts Menu</h3>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Link to="/posts">All Posts</Link>
        <Link to="/posts/1">Post 1</Link>
        <Link to="/posts/2">Post 2</Link>
        <Link to="/posts/3">Post 3</Link>
      </nav>
    </aside>
  )
}

export default SideNavigation 