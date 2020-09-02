import React, { useEffect } from 'react'
import styles from './day.module.css'

import ImgSide from './ImgSide'
import TextSide from './TextSide'

type DayRowContent = {
  day: DayFace
  invert: boolean
  openModal: () => void
}

function DayRowContent({ day, invert, openModal }: DayRowContent) {
  useEffect(() => {
    console.log(day)
  }, [])

  return (
    <div className={`container-fluid bg-primary`}>
      <div className={`container ped-lr ${styles.cont}`}>
        <div className="row">
          {invert ? (
            <>
              <ImgSide
                title={day.title}
                mediaType={day.mediaType}
                url={day.url}
              />
              <TextSide
                title={day.title}
                date={day.date}
                explanation={day.explanation}
                copyright={day.copyright}
                openModal={() => openModal()}
              />
            </>
          ) : (
            <>
              <TextSide
                title={day.title}
                date={day.date}
                explanation={day.explanation}
                copyright={day.copyright}
                openModal={() => openModal()}
              />
              <ImgSide
                title={day.title}
                mediaType={day.mediaType}
                url={day.url}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DayRowContent
