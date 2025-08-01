import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import SideNavigation from './SideNavigation'

function PostLayout() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <Header />
      <div style={{ 
        flex: 1, 
        display: 'flex' 
      }}>
        <SideNavigation />
        <main style={{ 
          flex: 1, 
          padding: '2rem' 
        }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default PostLayout 