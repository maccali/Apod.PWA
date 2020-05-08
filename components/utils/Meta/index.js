import React from 'react'
import Head from 'next/head'

const siteName = 'Apod Space'
const title = 'Apod - Astronomy Picture of Day by Nasa'
const description = 'Apod - Astronomy Picture of Day by Nasa, Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.'
const imagemUrl = '/icons/icon512.png'

const Meta = () => (
  <Head>
    <meta charSet='utf-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta
      name="description"
      content={description}>
    </meta>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
    <meta name="theme-color" content="#2c2c7b"></meta>

    <link rel='manifest' href='/manifest.json?v=3' />
    <link rel="icon" href="/favicon.ico" />
    
    {/* Apple Tags*/}
    <link rel="apple-touch-icon" href="/icons/icon192.png" />

    {/* Open Grafh Tags */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:url" content="" />
    <meta property="og:image" content={imagemUrl} /> 

    {/* Twitter Tags */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content={siteName} />
    <meta name="twitter:creator" content="Guilherme Maccali" />
    <meta name="twitter:image" content={imagemUrl} /> 


  </Head>
)

export default Meta