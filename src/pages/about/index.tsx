import React from 'react'
import Fade from 'react-reveal/Fade'
import Head from 'next/head'
import Nav from '../../components/utils/nav'
import CreditsAboutCard from '../../components/cards/creditsAbout'

function About() {
  const credits = [
    {
      title: 'Astronomy Picture of the Day',
      explanation: `Each day a different image or photograph of our fascinating
  universe is featured, along with a brief explanation written by a
  professional astronomer.`,
      externalUrl: 'https://apod.nasa.gov/apod/astropix.html',
      imgUrl: '/imgs/apod.svg'
    },
    {
      title: 'Developer Site',
      explanation: `Site of developer who delevoped this project.`,
      externalUrl: 'https://guilhermemaccali.com/',
      imgUrl: '/imgs/developer-site-logo.svg'
    },
    {
      title: 'Nasa Site',
      explanation: `Site of NASA who gives APOD API, and this really impressive images and explanations.`,
      externalUrl: 'https://www.nasa.gov/',
      imgUrl: '/imgs/nasa-site-logo.svg'
    },
    {
      title: 'Source Code',
      explanation: `Code of project for developers.`,
      externalUrl: 'https://github.com/maccali/Apod',
      imgUrl: '/imgs/github-site-logo.svg'
    }
  ]

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
                <Fade left>
                  <h1>About</h1>
                </Fade>
              </div>
              {credits.map(item => (
                <div key={item.title} className="col-12 col-md-6">
                  <Fade bottom>
                    <CreditsAboutCard
                      title={item.title}
                      explanation={item.explanation}
                      externalLink={item.externalUrl}
                      imgUrL={item.imgUrl}
                    />
                  </Fade>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
