import React, { useState } from 'react'
import styles from './social.module.css'

import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiShareLine,
  RiCheckboxCircleLine,
  RiLinksLine
} from 'react-icons/ri'

import ShareLinks from '../../../models/shareLinks'
import Button from '../../utils/button'

type SocialFace = {
  title: string
  text: string
  url: string
}

function Social({ title, text, url }: SocialFace) {
  const [copied, setCopied] = useState(false)
  const hasNativeShare =
    typeof navigator !== 'undefined' && navigator.share !== undefined

  function share() {
    if (!hasNativeShare) return

    void navigator.share({
      title,
      text,
      url
    })
  }

  async function copyLink() {
    await navigator.clipboard.writeText(url)
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
        <Button
          title="Copy Link"
          action={() => void copyLink()}
          className={styles.iconchange}
          iconOnly
          noStyle
        >
          {copied ? <RiCheckboxCircleLine /> : <RiLinksLine />}
        </Button>
        {!hasNativeShare ? (
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
