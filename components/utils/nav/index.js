import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Meta from '../Meta'
import styles from './nav.module.css'

const Nav = () => (
  <div className="container-fluid" className={styles.container}>
    <div className="container">
      <nav className={styles.nav}>
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