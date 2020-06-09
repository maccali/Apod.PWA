import React from 'react'
import styles from './developersite.module.css'


const DeveloperSite = () => (
  <div className="container-fluid bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className={styles.title}>Developer Site</h2>
        </div>

        <div className="col-12">
          <div className="text-container">
            <a className={styles.imghover} rel="noopener noreferrer" href="https://guilhermemaccali.com/" target="_blank" aria-label="Go to Developer Site" >
              <img src="/imgs/developer-site-logo.svg" alt="Developer Site Logo" />
            </a>
          </div>
        </div>
        <div className="col-12">
          <div className="text-container">
            <p>
              {/* Nota do Autor */}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DeveloperSite