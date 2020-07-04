import React, { useState } from 'react'
import styles from './social.module.css'

import { AiOutlineShareAlt } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiLink, FiCheckCircle } from "react-icons/fi";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import ShareLinks from '../../../models/shareLinks'

function Social({ title, text, url }) {

  const [copied, setCopied] = useState(false);

  function share() {
    console.log(title, text, url)
    navigator.share({
      title, text, url
    })
  }

  async function chackmate() {
    setCopied(true)
    await sleep(3000);
    setCopied(false)
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <>
      <div className={styles.card}>
        <CopyToClipboard
          text={url}
          onCopy={() => chackmate()}
        >
          <a className={styles.iconchange}>
            {copied ?
              <FiCheckCircle /> :
              <FiLink />}
          </a>
        </CopyToClipboard>
        {(navigator.share === undefined) ?
          <>
            <a target="_blank" rel="noopener noreferrer" href={`${ShareLinks.facebook}${url}`}>
              <FaFacebook />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={`${ShareLinks.twitter}${url}`}>
              <FaTwitter />
            </a>
          </>
          : <>
            <a onClick={() => share()}>
              <AiOutlineShareAlt />
            </a>
          </>
        }
      </div>
    </>
  )
}

export default Social