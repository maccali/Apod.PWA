import React, { useEffect, useState } from 'react'

import Social from '../../../cards/social'

import styles from './TextSide.module.css'

type DayTextFace = {
  date: string,
  title: string,
  openModal: Function,
  explanation: string,
  copyright?: string,
}

function TextSide({
  date,
  title,
  explanation,
  copyright,
  openModal,
}: DayTextFace) {

  const [url, setUrl] = useState('');

  useEffect(() => {
    const { hostname, protocol } = window.location
    setUrl(`${protocol}//${hostname}/day/${date}`)
  });

  return (
    <>
      <div className="col-12 col-md-8">
        <div className="col-12">
          <div className={styles.header}>
            <h3 className={styles.date}>{date}</h3>
            <div className={styles.socialcont}>
              {(url !== '') ?
                <Social title={`ApodSpace`} text={`${title}`} url={`${url}`} />
                : ''}
            </div>
          </div>
        </div>
        <div className="col-12">
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className="col-12">
          {(copyright) ?
            <p className={styles.copyright}><b>Image Credit & Copyright:</b> {copyright}</p>
            : ''}
        </div>
        <div className="col-12">
          <p className={styles.explanationtitle}>
            Explanation:
                  </p>
        </div>
        <div className="col-12">
          <p className={styles.explanation}>
            {explanation}
          </p>
        </div>
        <div className={`col-12`}>
          <div className="btn-custom">
            <a title={`Read more About ${title}`} onClick={() =>  openModal() }>
              🚀 See More
            </a>
          </div>
        </div>

      </div>
    </>
  )
}

export default TextSide