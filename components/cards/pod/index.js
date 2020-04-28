import React from 'react'
import Link from 'next/link'
import styles from './pod.module.css'
import renderHTML from 'react-render-html';

const Pod = (props) => (
  <>
    {/* <Link href={props.pod.link}> */}
    <a className={styles.card}>
      <div className={styles.divimg}>
        {(props.pod.media_type === 'image') ?
          <img src={props.pod.url} alt={props.pod.title} />
          : <iframe src={props.pod.url} alt={props.pod.title}></iframe>
        }
      </div>
      <div className={styles.name}>
        {props.pod.title}
      </div>
    </a>

    {/* </ Link> */}
  </>
)

export default Pod