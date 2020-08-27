import React from 'react'
import styles from './day.module.css'

import ImgSide from './ImgSide'
import TextSide from './TextSide'

function DayRowContent({ day, invert, openModal }) {
  if (day) {
    return (
      <div className={`container-fluid bg-primary`}>
        <div className={`container ped-lr ${styles.cont}`}>
          <div className="row">
            {invert ? (
              <>
                <ImgSide
                  title={day.title}
                  mediaType={day.media_type}
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
                  mediaType={day.media_type}
                  url={day.url}
                />
              </>
            )}
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default DayRowContent
