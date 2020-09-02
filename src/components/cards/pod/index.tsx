import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './pod.module.css'

type PodFace = {
  day: DayFace
  openModal: () => void
}

function Pod({ day, openModal }: PodFace) {
  return (
    <>
      <button onClick={() => openModal()} className={styles.card}>
        <div className={styles.date}>{day.date}</div>
        <div className={styles.divimg}>
          {day.mediaType === 'image' ? (
            <div>
              <LazyLoadImage
                alt={day.title}
                height={270}
                src={day.url} // use normal <img> attributes as props
                effect="opacity"
              />
            </div>
          ) : (
            <iframe title={day.title} src={day.url} height="100%"></iframe>
          )}
        </div>
        <div className={styles.name}>
          <p>{day.title}</p>
        </div>
      </button>
    </>
  )
}

export default Pod
