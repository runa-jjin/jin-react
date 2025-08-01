import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function BasicLayout() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <Header />
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default BasicLayout 