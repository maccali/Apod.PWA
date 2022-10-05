import React, { useState, useEffect } from 'react'
import {
  AiOutlineBars,
  AiOutlineMore,
  AiOutlineCalendar,
  AiOutlineInfoCircle,
  AiOutlineDownload,
  AiOutlineClose,
  AiOutlineHome
} from 'react-icons/ai'

import Button from '../button'

import styles from './nav.module.css'

function Nav() {
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const [headerActive, setHeaderActive] = useState<boolean>(false)
  const [installBtn, setInstallBtn] = useState<boolean>(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>()

  useEffect(() => {
    ; (function () {
      window.addEventListener('beforeinstallprompt', e => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault()
        // Stash the event so it can be triggered later.
        setDeferredPrompt(e)
        // Update UI notify the user they can install the PWA
        // showInstallPromotion();
        setInstallBtn(true)
      })
    })()
  })

  useEffect(() => {
    window.addEventListener('resize', function () {
      setMenuOpenWithWithSize()
    })
    setMenuOpenWithWithSize()
  }, [])

  function setMenuOpenWithWithSize() {
    setMenuActive(window.innerWidth >= 1800)
    setHeaderActive(window.innerWidth <= 1800)
  }

  function install() {
    setInstallBtn(false)
    deferredPrompt.prompt()
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        setInstallBtn(false)
      } else {
        setInstallBtn(true)
      }
    })
  }

  return (
    <>
      <div className={`container-fluid ${styles.cont}`}>
        <div className="container">
          <nav className={styles.nav}>
            <ul className={styles.menu}>
              <li>
                <div className={styles.img}>
                  <Button
                    title="Go Home"
                    className={styles.seta}
                    href="/"
                    noStyle
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/icon126t.png" alt="Site Logo" />
                  </Button>
                </div>
              </li>
            </ul>
            <ul className={styles.menu}>
              <li>
                <Button
                  title="List Of Days"
                  href="/images"
                  className={styles.seta}
                  noStyle
                >
                  <AiOutlineBars />
                  <p>List Of Days</p>
                </Button>
              </li>
              <ul className={styles.menu}>
                <li>
                  <Button
                    title="Menu"
                    action={() => setMenuActive(!menuActive)}
                    className={styles.seta}
                    noStyle
                  >
                    <AiOutlineMore />
                    <p>Menu</p>
                  </Button>
                </li>
              </ul>
            </ul>
          </nav>
          <div
            className={
              menuActive
                ? `${styles.contaside} ${styles.contasideativado}`
                : styles.contaside
            }
          >
            <div className={styles.contasidefix}>
              {headerActive ? (
                <div className={styles.headercont}>
                  <p>Menu</p>
                  <Button
                    title="Close Menu"
                    action={() => setMenuActive(!menuActive)}
                    noStyle
                  >
                    <AiOutlineClose />
                  </Button>
                </div>
              ) : (
                ''
              )}
              <div className={styles.cardmenu}>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/icon126t.png" alt="Foto do Perfil" />
                </div>
                <span>Apod Pictu</span>
              </div>
              <div className={styles.menulist}>
                <Button
                  title="Last Days"
                  href="/"
                  className={styles.menuitem}
                  noStyle
                >
                  <AiOutlineHome />
                  <p>Last Days</p>
                </Button>
                <Button
                  title="List Of Days"
                  href="/images"
                  className={styles.menuitem}
                  noStyle
                >
                  <AiOutlineBars />
                  <p>List Of days</p>
                </Button>
                <Button
                  title="Calendar"
                  href="/calendar"
                  className={styles.menuitem}
                  noStyle
                >
                  <AiOutlineCalendar />
                  <p>Calendar</p>
                </Button>
                <Button
                  title="About"
                  href="/about"
                  className={styles.menuitem}
                  noStyle
                >
                  <AiOutlineInfoCircle />
                  <p>About</p>
                </Button>

                {installBtn ? (
                  <Button
                    title="Install App"
                    action={() => install()}
                    className={styles.menuitem}
                    noStyle
                  >
                    <AiOutlineDownload />
                    <p>Install App</p>
                  </Button>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.space}></div>
    </>
  )
}

export default Nav
