import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Nav() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    // With HashRouter, location.pathname works correctly
    // path will be like "/" or "/features"
    const currentPath = location.pathname || '/'
    return currentPath === path || (path === '/' && currentPath === '/')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-text">TechWorkSpace</span>
        </Link>
        <ul className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className={isActive('/features') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/privacy" className={isActive('/privacy') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/support" className={isActive('/support') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
              Support
            </Link>
          </li>
        </ul>
        <button 
          className={`nav-toggle ${mobileMenuOpen ? 'nav-toggle-open' : ''}`} 
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Nav
