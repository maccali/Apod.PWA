import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
// import Offline from '../offline'
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
                {/* <a className={styles.seta}> */}
                {/* TUDO: gerar imagem com transparência */}
                  <img src="/icons/icon48.png" alt="Site Logo" />
                {/* </a> */}
              </Link>
            </div>
          </li>
        </ul>
        <ul className={styles.menu}>
          {/* <li>
            <Link href="/favorites">
              <a className={styles.seta}>
                <i className="far fa-heart"></i>
              </a>
            </Link>
          </li> */}
          {/* <li> */}
            {/* <Link href="/images/1"> */}
            {/* <a className={styles.seta}> */}
              {/* <i className="far fa-calendar-alt"></i> */}
            {/* </a> */}
            {/* </Link> */}
          {/* </li> */}
          <li>
            <Link href="/images/1">
              <a className={styles.seta}>
                <i className="fas fa-list-ul"></i>
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/about">
              <a className={styles.seta}>
                <i className="fas fa-info-circle"></i>
              </a>
            </Link>
          </li> */}
        </ul>
      </nav>
      {/* <Offline /> */}
    </div>


  </div>
)

export default Nav