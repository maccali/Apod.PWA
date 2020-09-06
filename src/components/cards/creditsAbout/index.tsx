/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import Button from '../../utils/button'

import styles from './creditsabout.module.css'

type CreditsAboutCardFace = {
  title: string
  imgUrL: string
  externalLink: string
  explanation: string
}

function CreditsAboutCard({
  title,
  imgUrL,
  externalLink,
  explanation
}: CreditsAboutCardFace) {
  return (
    <>
      <article>
        <Button
          title={title}
          target="_blank"
          href={externalLink}
          className={styles.cont}
          noStyle
        >
          <figure>
            <img src={imgUrL} alt={`Image of ${title}`} />
          </figure>
          <div className={styles.texts}>
            <h3>{title}</h3>
            <p>{explanation}</p>
          </div>
        </Button>
      </article>
    </>
  )
}

export default CreditsAboutCard
