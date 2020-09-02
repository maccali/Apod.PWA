import React, { useState } from 'react'
import styles from './social.module.css'

import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiShareLine,
  RiCheckboxCircleLine,
  RiLinksLine
} from 'react-icons/ri'

import CopyToClipboard from 'react-copy-to-clipboard'

import ShareLinks from '../../../models/shareLinks'
import Button from '../../utils/button'

type SocialFace = {
  title: string
  text: string
  url: string
}

function Social({ title, text, url }: SocialFace) {
  const [copied, setCopied] = useState(false)

  function share() {
    console.log(title, text, url)
    navigator.share({
      title,
      text,
      url
    })
  }

  async function chackmate() {
    setCopied(true)
    await sleep(3000)
    setCopied(false)
  }

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  return (
    <>
      <div className={styles.card}>
        <CopyToClipboard text={url} onCopy={() => chackmate()}>
          <div title="Copy Link" className={styles.iconchange}>
            {copied ? <RiCheckboxCircleLine /> : <RiLinksLine />}
          </div>
        </CopyToClipboard>
        {navigator.share === undefined ? (
          <>
            <Button
              title="Share with Facebook"
              target="_blank"
              href={`${ShareLinks.facebook}${url}`}
              iconOnly
              noStyle
            >
              <RiFacebookCircleLine />
            </Button>
            <Button
              title="Share with Twitter"
              target="_blank"
              href={`${ShareLinks.twitter}${url}`}
              iconOnly
              noStyle
            >
              <RiTwitterLine />
            </Button>
          </>
        ) : (
          <>
            <Button
              title="Share with Everything"
              action={() => share()}
              iconOnly
              noStyle
            >
              <RiShareLine />
            </Button>
          </>
        )}
      </div>
    </>
  )
}

export default Social
