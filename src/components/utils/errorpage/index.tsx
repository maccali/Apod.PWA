import React, { ReactNode } from 'react'
import Fade from 'react-reveal/Fade'

import Nav from '../nav'

import Head from 'next/head'

import styles from './errorpage.module.css'

type ErrorPageFace = {
  statusCode: number
  title: string
  message: string
  children?: ReactNode
}

function ErrorPage({ statusCode, message, title, children }: ErrorPageFace) {
  return (
    <>
      <Nav />
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.card}>
              <Fade left>
                <figure className={styles.figure}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://picsum.photos/1400/1400/?blur=10" alt="" />
                </figure>
              </Fade>
              <Fade right>
                <div className={styles.conttext}>
                  <div className={styles.text}>
                    <h1>{statusCode}</h1>
                    <h2>{message}</h2>
                    <div>{children}</div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ErrorPage
