function Features() {
  return (
    <div className="page features-page">
      <div className="container">
        <h1>Features</h1>
        
        <div className="card">
          <h2>Job Management</h2>
          <ul className="feature-list">
            <li>Daily job lists with completion status</li>
            <li>Search functionality for job history</li>
            <li>Construction badge indicator for heavy work jobs</li>
            <li>Job number and address logging</li>
            <li>FDH details tracking</li>
          </ul>
        </div>

        <div className="card">
          <h2>Earnings Tracking</h2>
          <ul className="feature-list">
            <li>Daily, weekly, and monthly earnings totals</li>
            <li>Income trend charts</li>
            <li>End-of-day (EOD) report generation</li>
            <li>Earnings history view</li>
          </ul>
        </div>

        <div className="card">
          <h2>Camera & Photos</h2>
          <ul className="feature-list">
            <li>Job-based photo storage</li>
            <li>Optional sync to device photo library</li>
            <li>Bulk sharing of all photos for a job</li>
            <li>Photo gallery within the app</li>
            <li>Delete and review photos per job</li>
          </ul>
        </div>

        <div className="card">
          <h2>Field Tools</h2>
          <ul className="feature-list">
            <li>Offline-first operation</li>
            <li>Maps integration for address navigation</li>
            <li>Quick copy to clipboard functionality</li>
            <li>Local data storage on device</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features
