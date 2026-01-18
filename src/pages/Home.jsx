import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page home-page">
      <div className="container">
        <div className="app-header">
          <h1>TechWorkSpace</h1>
          <p className="tagline">Job and earnings tracking for field technicians.</p>
        </div>

        <div className="card">
          <p>
            TechWorkSpace is a mobile application for tracking daily jobs and earnings. 
            The app stores all data locally on your device and operates offline. 
            You can log job details, track earnings, capture photos, and generate reports.
          </p>
        </div>

        <div className="card">
          <h2>Capabilities</h2>
          <ul className="feature-summary">
            <li>Job logging and status tracking</li>
            <li>Daily, weekly, and monthly earnings totals</li>
            <li>Photo capture and organization by job</li>
            <li>Offline operation with local data storage</li>
            <li>Maps integration for job addresses</li>
            <li>Data export and backup</li>
          </ul>
        </div>

        <div className="card">
          <h2>Quick Links</h2>
          <div className="link-buttons">
            <Link to="/features" className="link-button">Features</Link>
            <Link to="/privacy" className="link-button">Privacy Policy</Link>
            <Link to="/support" className="link-button">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
