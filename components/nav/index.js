import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import styles from './nav.module.css'

const Nav = () => (
  <div className="container-fluid" className={styles.container}>
    <div className="container">
      <nav className={styles.nav}>
        <Head>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name="description" content="Apod - Astronomy Picture of Day by Nasa"></meta>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
          <meta name="theme-color" content="#2c2c7b"></meta>

          <link rel='manifest' href='/manifest.json?v=2' />
          <link rel="icon" href="/favicon.ico" />

          <link rel="apple-touch-icon" href="/icons/icon192.png" />

        </Head>
        <ul className={styles.menu}>
          <li>
            <a onClick={() => Router.back()} className={styles.seta}><i className="fas fa-arrow-left"></i></a>
          </li>
          <li>
            <div className={styles.img}>
              <Link href="/">
                <img src="/icons/icon48.png" alt="Site Logo" />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Nav