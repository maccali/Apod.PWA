import React from 'react'
import styles from './social.module.css'

import { AiOutlineShareAlt } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";

import ShareLinks from '../../../models/shareLinks'

function Social({ title, text, url }) {

  function share() {
    console.log(title, text, url)
    navigator.share({
      title, text, url
    })
  }

  return (
    <>
      {(navigator.share === undefined) ?
        <div className={styles.card}>
          <a target="_blank" rel="noopener noreferrer" href={`${ShareLinks.facebook}${url}`}>
            <FaFacebook />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={`${ShareLinks.twitter}${url}`}>
            <FaTwitter />
          </a>
        </div>
        : <div className={styles.card}>
          <a onClick={() => share()}>
            <AiOutlineShareAlt />
          </a>
        </div>
      }
    </>
  )
}

export default Social