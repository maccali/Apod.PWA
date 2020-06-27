import React, { useState, useEffect } from 'react'
import {
  AiOutlineBars,
  AiOutlineMore,
  AiOutlineArrowLeft,
  AiOutlineCalendar,
  AiOutlineInfoCircle,
  AiOutlineDownload,
  AiOutlineClose
} from "react-icons/ai";
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
                <a onClick={() => Router.back()} className={styles.seta} aria-label="Back Page">
                  <AiOutlineArrowLeft />
                </a>
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
              <Link href="/images">
                <a className={styles.seta} aria-label="List of Days">
                  <AiOutlineBars />
                </a>
              </Link>
            </li>
            <ul className={styles.menu}>
              <li>
                <a onClick={() => setMenuActive(!menuActive)} className={styles.seta} aria-label="Open Menu">
                  <AiOutlineMore />
                </a>
              </li>
            </ul>
          </ul>
        </nav>
        <div className={(menuActive) ? `${styles.contaside} ${styles.contasideativado}` : styles.contaside}>
          <div className={styles.contasidefix}>
            <div className={styles.headercont}>
              <p>Menu</p>
              <a onClick={() => setMenuActive(!menuActive)} aria-label="Close Menu">
                <AiOutlineClose />
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
                <a className={styles.menuitem} aria-label="Calendar Button"><span>
                  <AiOutlineCalendar />
                </span><p>Calendar</p></a>
              </Link>
              {/* <Link href="/favorites">
                <a className={styles.menuitem}><span><i className="far fa-heart"></i></span><p>Favorites</p></a>
              </Link> */}
              <Link href="/about">
                <a className={styles.menuitem}><span>
                  <AiOutlineInfoCircle />
                </span><p>About</p></a>
              </Link>
              {installBtn ?
                <a onClick={() => install()} className={styles.menuitem}><span>
                  <AiOutlineDownload />
                </span><p>Install App</p></a>
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