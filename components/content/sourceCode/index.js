import React from 'react'
import styles from './sourcecode.module.css'


const SourceCode = () => (
  <div className="container-fluid bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className={styles.title}>Source Code</h2>
        </div>
        <div className="col-12">
          <div className="text-container">
            <a className={styles.imghover} rel="noopener noreferrer" href="https://github.com/maccali/Apod" target="_blank" aria-label="Go to Source Code" >
              <img src="/imgs/github-site-logo.svg" alt="Open Source Code" />
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

export default SourceCode