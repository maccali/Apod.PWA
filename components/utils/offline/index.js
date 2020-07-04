import React, { useEffect, useState } from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
import styles from './offline.module.css'

function Offline() {

  const [online, setOnline] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!navigator.onLine) {
      setOnline(false)
    }
  });

  return <>
    {online ? '' :
      <div className={styles.cont} onClick={() => setOpen(!open)}>
        <AiOutlineInfoCircle className={styles.icon}/>
        <div className={`${styles.text} ${(open) ? styles.open : styles.close}`}><p>You are Offline</p></div>
      </div>}
  </>
}


export default Offline