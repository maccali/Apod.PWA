import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styles from './nav.module.css'

function Nav() {

  const [menuActive, setMenuActive] = useState(0);
  const [menuBack, setMenuBack] = useState(false);
  const [installBtn, setInstallBtn] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState();

  useEffect(() => {
    (function () {
      (history.length > 1) ? setMenuBack(true) : setMenuBack(false)

      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        setDeferredPrompt(e);
        // Update UI notify the user they can install the PWA
        // showInstallPromotion();
        setInstallBtn(true)
      });
    })()
  });

  function install() {
    setInstallBtn(false)
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        setInstallBtn(false)
      } else {
        setInstallBtn(true)
      }
    });
  }

  return (<>
    <div className="container-fluid" className={styles.cont}>
      <div className="container" >
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {menuBack ?
              <li>
                <a onClick={() => Router.back()} className={styles.seta} aria-label="Back Page"><i className="fas fa-arrow-left"></i></a>
              </li>
              : ''}
            <li>
              <div className={styles.img}>
                <Link href="/">
                  <a className={styles.seta} aria-label="App Home">
                    <img src="/icons/icon126t.png" alt="Site Logo" />
                  </a>
                </Link>
              </div>
            </li>
          </ul>
          <ul className={styles.menu}>
            <li>
              <Link href="/images/1">
                <a className={styles.seta} aria-label="List of Days">
                  <i className="fas fa-list-ul"></i>
                </a>
              </Link>
            </li>
            <ul className={styles.menu}>
              <li>
                <a onClick={() => setMenuActive(!menuActive)} className={styles.seta} aria-label="Open Menu"><i className="fas fa-ellipsis-v"></i></a>
              </li>
            </ul>
          </ul>
        </nav>
        <div className={(menuActive) ? `${styles.contaside} ${styles.contasideativado}` : styles.contaside}>
          <div className={styles.contasidefix}>
            <div className={styles.headercont}>
              <p>Menu</p>
              <a onClick={() => setMenuActive(!menuActive)} aria-label="Close Menu">
                <i className="fas fa-times"></i>
              </a>
            </div>
            <div className={styles.cardmenu}>
              <div>
                <img src="/icons/icon126t.png" alt="Foto do Perfil" />
              </div>
              <span>Apod Pictu</span>
            </div>
            <div className={styles.menulist}>
              <Link href="/calendar">
                <a className={styles.menuitem} aria-label="Calendar Button"><span><i className="far fa-calendar-alt"></i></span><p>Calendar</p></a>
              </Link>
              {/* <Link href="/favorites">
                <a className={styles.menuitem}><span><i className="far fa-heart"></i></span><p>Favorites</p></a>
              </Link> */}
              {/* <Link href="/about">
                <a className={styles.menuitem}><span><i className="fas fa-info-circle"></i></span><p>About</p></a>
              </Link> */}
              {installBtn ?
                <a onClick={() => install()} className={styles.menuitem}><span><i class="far fa-arrow-alt-circle-down"></i></span><p>Install App</p></a>
                : ''}

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.space}>
    </div>
  </>
  )
}

export default Nav