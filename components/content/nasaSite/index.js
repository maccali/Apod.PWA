import React from 'react'
import styles from './nasasite.module.css'


const NasaSite = () => (
  <div className="container-fluid bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className={styles.title}>Nasa Site</h2>
        </div>
        <div className="col-12">
          <div className="text-container">
            <a className={styles.imghover} rel="noopener noreferrer" href="https://www.nasa.gov/" target="_blank" aria-label="Go to Nasa Site" >
              <img src="/imgs/nasa-site-logo.svg" alt="Developer Site Logo" />
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

export default NasaSite