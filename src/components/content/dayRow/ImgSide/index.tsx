import React from 'react'

import styles from './ImgSide.module.css'

type DayImgFace = {
  mediaType: string
  url: string
  title: string
}

function ImgSide({ mediaType, url, title }: DayImgFace) {
  return (
    <>
      <div className={`col-xs-12 col-md-4 ${styles.cont}`}>
        {mediaType === 'image' ? (
          <a
            title={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imgcont}
          >
            <img src={url} alt={title} />
          </a>
        ) : (
          <div className={styles.framecont}>
            <iframe
              title={title}
              src={url}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </>
  )
}

export default ImgSide
