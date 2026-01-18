import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/support">Support</Link>
        </div>
        <div className="footer-contact">
          <a href="mailto:vladislavpshenyanik@gmail.com">vladislavpshenyanik@gmail.com</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TechWorkSpace</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
