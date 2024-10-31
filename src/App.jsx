import { useState } from 'react'
import './App.css'

function App() {
  const [showInfo, setShowInfo] = useState(false)

  const toggleInfo = () => {
    setShowInfo(prev => !prev)
  }

  return (
    <>
      <div>
        <h1>CI/CD Basics</h1>
      </div>
      <div className="card">
      <h2>My name is Dennis</h2>
        <button onClick={toggleInfo}>

          {showInfo ? 'Hide' : 'Show'} CI/CD Information
        </button>
        {showInfo && (
          <div className="info">
            <h2>What is CI/CD?</h2>
            <p>
              Continuous Integration (CI) is the practice of frequently integrating code changes into a shared repository. 
              Continuous Deployment (CD) refers to the automated release of software changes to production.
            </p>
            <h3>Benefits:</h3>
            <ul>
              <li>Faster development cycles</li>
              <li>Reduced integration issues</li>
              <li>Higher quality software</li>
              <li>Improved team collaboration</li>
            </ul>
          </div>
        )}
      </div>
      <p className="read-the-docs">
        Click the button above to learn more about CI/CD
      </p>
    </>
  )
}

export default App
