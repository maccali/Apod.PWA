import React, { useState } from 'react'
import styles from './social.module.css'

import { 
  RiFacebookCircleLine,
  RiTwitterLine,
  RiShareLine,
  RiCheckboxCircleLine,
  RiLinksLine
 } from "react-icons/ri";

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
              <RiCheckboxCircleLine /> :
              <RiLinksLine />}
          </a>
        </CopyToClipboard>
        {(navigator.share === undefined) ?
          <>
            <a target="_blank" rel="noopener noreferrer" href={`${ShareLinks.facebook}${url}`}>
              <RiFacebookCircleLine />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={`${ShareLinks.twitter}${url}`}>
              <RiTwitterLine />
            </a>
          </>
          : <>
            <a onClick={() => share()}>
              <RiShareLine />
            </a>
          </>
        }
      </div>
    </>
  )
}

export default Social