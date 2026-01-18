function Privacy() {
  return (
    <div className="page privacy-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="effective-date"><strong>Effective Date:</strong> January 1, 2024</p>

        <div className="card">
          <h2>Overview</h2>
          <p>
            This Privacy Policy applies to the TechWorkSpace mobile application ("the app"). 
            TechWorkSpace is designed to work offline and stores data locally on your device.
          </p>
        </div>

        <div className="card">
          <h2>Data Collection</h2>
          <p>
            TechWorkSpace collects only the data you enter into the app:
          </p>
          <ul>
            <li>Job information (job numbers, addresses, notes, FDH details)</li>
            <li>Earnings data you choose to record</li>
            <li>Photos you capture or import into the app</li>
            <li>App preferences and settings (themes, custom job types, default prices)</li>
          </ul>
          <p>
            The app does not collect personal identification information, location data, 
            or any information you do not explicitly provide.
          </p>
        </div>

        <div className="card">
          <h2>Data Usage</h2>
          <p>
            All data entered into TechWorkSpace is stored locally on your device. 
            Data is used solely to provide app functionality:
          </p>
          <ul>
            <li>Displaying job lists and details</li>
            <li>Calculating and displaying earnings totals and charts</li>
            <li>Organizing photos by job</li>
            <li>Generating reports</li>
            <li>Auto-filling fields based on your previous entries</li>
          </ul>
          <p>
            <strong>TechWorkSpace does not use third-party analytics, advertising SDKs, or tracking services.</strong>
          </p>
        </div>

        <div className="card">
          <h2>Photo Storage</h2>
          <p>
            You control where photos are stored:
          </p>
          <ul>
            <li><strong>In-app storage:</strong> Photos stored within the app's private storage, separate from your device photo library</li>
            <li><strong>Device library:</strong> Optional sync to your device's photo library, controlled by your settings</li>
          </ul>
          <p>
            Photos are only accessed when you use the app's photo features. 
            Photos are only shared when you explicitly use the app's share functionality.
          </p>
        </div>

        <div className="card">
          <h2>Data Sharing</h2>
          <p>
            TechWorkSpace does not share your data with third parties. 
            Data sharing occurs only when you:
          </p>
          <ul>
            <li>Use the app's share features to send photos or job information</li>
            <li>Export your data to a file (you control where this file is stored)</li>
            <li>Open addresses in external map applications (Google Maps, Apple Maps, etc.)</li>
          </ul>
        </div>

        <div className="card">
          <h2>Data Retention and Deletion</h2>
          <p>
            Your data remains on your device until you delete it within the app or uninstall the app. 
            If you uninstall the app, data stored in-app is removed. 
            Photos synced to your device library remain in your library.
          </p>
          <p>
            TechWorkSpace does not retain copies of your data on external servers.
          </p>
        </div>

        <div className="card">
          <h2>Security</h2>
          <p>
            Data stored by TechWorkSpace uses standard iOS security measures for app data storage. 
            You are responsible for securing your device with a passcode or biometric authentication.
          </p>
        </div>

        <div className="card">
          <h2>Children's Privacy</h2>
          <p>
            TechWorkSpace is not intended for users under the age of 13. 
            We do not knowingly collect information from children under 13.
          </p>
        </div>

        <div className="card">
          <h2>Your Rights</h2>
          <p>
            You have full control over your data in TechWorkSpace:
          </p>
          <ul>
            <li>View all data within the app</li>
            <li>Edit or delete any information you've entered</li>
            <li>Export your data at any time</li>
            <li>Delete individual jobs, photos, or all app data</li>
          </ul>
        </div>

        <div className="card">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy. The effective date at the top indicates when changes were made. 
            Continued use of the app after changes constitutes acceptance of the updated policy.
          </p>
        </div>

        <div className="card">
          <h2>Contact</h2>
          <p>
            Questions about this Privacy Policy or data practices:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:vladislavpshenyanik@gmail.com">vladislavpshenyanik@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy
