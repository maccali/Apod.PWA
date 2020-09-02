import React from 'react'
import Head from 'next/head'
import Nav from '../../components/utils/nav'
import ApodExplanation from '../../components/content/apodExplanation'
import DeveloperSite from '../../components/content/developerSite'
import NasaSite from '../../components/content/nasaSite'
import SourceCode from '../../components/content/sourceCode'

function About() {
  return (
    <>
      <Nav />
      <Head>
        <title>Apod Pictu About</title>
      </Head>
      <main>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>About</h1>
              </div>
              <ApodExplanation />
              <DeveloperSite />
              <NasaSite />
              <SourceCode />
              <div className="col-12">
                <div className="btn-custom">
                  <a
                    rel="noopener noreferrer"
                    href="https://apod.nasa.gov/apod/astropix.html"
                    target="_blank"
                    aria-label="More About Apod"
                  >
                    More About Apod
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
