import React, { useState, useEffect } from 'react'
import webpush from "web-push"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  AiOutlineBars,
  AiOutlineMore,
  AiOutlineCalendar,
  AiOutlineInfoCircle,
  AiOutlineDownload,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineNotification
} from 'react-icons/ai'

import Button from '../button'

import styles from './nav.module.css'

function Nav() {
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const [headerActive, setHeaderActive] = useState<boolean>(false)
  const [installBtn, setInstallBtn] = useState<boolean>(false)
  const [notificationBtn, setNotificationBtn] = useState<boolean>(true)
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


  function geoFindMe() {


    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      let href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      let textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

      console.log("href", href)
      console.log("textContent", textContent)
    }

    function error() {
      // status.textContent = "Unable to retrieve your location";
    }

    if (!navigator.geolocation) {
      // status.textContent = "Geolocation is not supported by your browser";
    } else {
      // status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }

  }
  // useEffect(() => {

  //   console.log("PEDINDO")
  //   askForLocationPermission()

  // })

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.Worker) {
  //     const worker = new Worker('/background.js');

  //     worker.postMessage(5);

  //     worker.addEventListener('message', function(event) {
  //       const result = event.data;
  //       console.log('Resultado do Web Worker:', result);
  //     });

  //     // Encerra o Web Worker quando o componente for desmontado
  //     return () => {
  //       worker.terminate();
  //     };
  //   }
  // }, []);

  // useEffect(() => {
  //   function mostrarNotificacao() {
  //     if (!('Notification' in window)) {
  //       console.log('Este navegador não suporta notificações.');
  //       return;
  //     }

  //     if (Notification.permission === 'granted') {
  //       const titulo = 'Título da Notificação 3';
  //       const opcoes = {
  //         body: 'Mensagem da Notificação3',
  //         icon: 'caminho/para/icon.png',
  //       };

  //       const notificacao = new Notification(titulo, opcoes);
  //     } else if (Notification.permission !== 'denied') {
  //       Notification.requestPermission().then(function (permission) {
  //         if (permission === 'granted') {
  //           const titulo = 'Título da Notificação3';
  //           const opcoes = {
  //             body: 'Mensagem da Notificação3',
  //             icon: 'caminho/para/icon.png',
  //           };

  //           const notificacao = new Notification(titulo, opcoes);
  //         }
  //       });
  //     }
  //   }

  //   function exibirNotificacaoDiaria() {
  //     const dataAtual = new Date().toISOString().slice(0, 10);
  //     const notificacaoExibidaNoDia = localStorage.getItem('notificacaoExibidaNoDia');

  //     if (notificacaoExibidaNoDia !== dataAtual) {
  //       mostrarNotificacao();
  //       localStorage.setItem('notificacaoExibidaNoDia', dataAtual);
  //     }
  //   }

  //   // Verificar se as notificações são suportadas pelo navegador
  //   if ('Notification' in window) {
  //     exibirNotificacaoDiaria();
  //   } else {
  //     console.log('Este navegador não suporta notificações.');
  //   }
  // }, [])

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

  function requestPermissionForNotifications() {
    geoFindMe()
    // if (!('Notification' in window)) {
    //   alert('Notification API not supported!');
    //   return;
    // }

    // Notification.requestPermission(function (result) {
    //   if (result === "granted") {
    //     setNotificationBtn(false)
    //   } else {
    //     setNotificationBtn(true)
    //   }
    // });

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
                {/* {notificationBtn ? ( */}
                <Button
                  title="Turn on Notifications"
                  action={() => requestPermissionForNotifications()}
                  className={styles.menuitem}
                  noStyle
                >
                  <AiOutlineNotification />
                  <p>Turn on Notifications</p>
                </Button>
                {/* ) : (
                  ''
                )} */}

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
