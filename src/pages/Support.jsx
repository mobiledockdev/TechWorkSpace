function Support() {
  return (
    <div className="page support-page">
      <div className="container">
        <h1>Support</h1>
        
        <div className="card">
          <h2>Contact</h2>
          <p>
            For support with TechWorkSpace, contact:
          </p>
          <p className="contact-email">
            <strong>Email:</strong> <a href="mailto:support@techworkspace.app">support@techworkspace.app</a>
          </p>
        </div>

        <div className="card">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-item">
            <h3>How does offline mode work?</h3>
            <p>
              TechWorkSpace operates offline. All jobs, earnings, and photos are stored locally on your device. 
              An internet connection is only needed when sharing photos or exporting data to cloud services.
            </p>
          </div>

          <div className="faq-item">
            <h3>How are earnings calculated?</h3>
            <p>
              Earnings are calculated from the job prices you enter. The app displays daily, weekly, and monthly totals 
              based on completed jobs. Charts show trends over time.
            </p>
          </div>

          <div className="faq-item">
            <h3>Where are photos stored?</h3>
            <p>
              Photos can be stored in-app (separate from your camera roll) or synced to your device photo library. 
              This setting can be changed in the app's settings.
            </p>
          </div>

          <div className="faq-item">
            <h3>How do I export or backup my data?</h3>
            <p>
              Use the export feature in Settings to create a backup file of your job history and data. 
              This file can be saved to your device or cloud storage.
            </p>
          </div>

          <div className="faq-item">
            <h3>What is an EOD report?</h3>
            <p>
              End-of-day (EOD) reports summarize your daily earnings and completed jobs. 
              Reports can be generated from the Earnings section.
            </p>
          </div>

          <div className="faq-item">
            <h3>How do I navigate to a job address?</h3>
            <p>
              Tap the address in a job detail view to open it in your device's default maps application 
              (Google Maps, Apple Maps, etc.). This requires an internet connection to load the map.
            </p>
          </div>
        </div>

        <div className="card">
          <h2>Troubleshooting</h2>
          <p>
            When contacting support, please include:
          </p>
          <ul>
            <li>App version (found in Settings or App Store)</li>
            <li>Device model and iOS version</li>
            <li>Description of the issue and steps to reproduce</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Support
