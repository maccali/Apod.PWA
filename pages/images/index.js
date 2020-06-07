import React, { useState, useEffect } from 'react'

import Head from 'next/head'
import Nav from '../../components/utils/nav'
import Footer from '../../components/utils/footer'
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
      <Footer />
    </>
  )
}

export default Images