import React from 'react'

import Head from 'next/head'
import Nav from '../../components/utils/nav'
import ImagesContent from '../../components/content/images'


function Images() {

  return (
    <>
      <Nav />
      <Head>
        <title>Apod Pictu Images</title>
      </Head>
      <main>
        <ImagesContent />
      </main>
    </>
  )
}

export default Images