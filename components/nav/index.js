import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './nav.module.css'

const Nav = () => (
  <div className="container-fluid" className={styles.container}>
    <div className="container">

      <nav className={styles.nav}>
        <Head>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
          <link rel='manifest' href='/manifest.json' />
          <link rel="icon" href="/favicon.ico" />

        </Head>
        <div className={styles.img}>
          <img src="/icons/icon48.png" />
        </div>
        <ul className={styles.menu}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </ul>

        <style>

        </style>
      </nav>
    </div>
  </div>
)

export default Nav