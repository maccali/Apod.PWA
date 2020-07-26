import styles from './ImgSide.module.css'

type DayImgFace = {
  media_type: string,
  url: string,
  title: string
}

function ImgSide({
  media_type,
  url,
  title,
}: DayImgFace) {
  return (
    <>
      <div className={`col-12 col-md-4 p-0 ${styles.cont}`}>
        {(media_type === 'image') ?
          <a href={url} target="_blank" className={styles.imgcont}>
            <img
              src={url}
              alt={title}
            />
          </a>
          :
          <div className={styles.framecont}>
            <iframe
              src={url}
              alt={title}
              frameBorder="0"
              allowFullScreen
              sandBox
            >
            </iframe>
          </div>
        }
      </div>
    </>
  )
}

export default ImgSide