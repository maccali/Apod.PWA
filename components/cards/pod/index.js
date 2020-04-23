import React from 'react'
import Link from 'next/link'
import styles from './pod.module.css'
import renderHTML from 'react-render-html';

const Pod = (props) => (
  <>
    {/* <Link href={props.pod.link}> */}
    <a className={styles.card}>
      {/* <div className={styles.icon}>
          {renderHTML(props.pod.icon)}
        </div> */}
      <div className={styles.divimg}>
        <img src={props.pod.url} alt={props.pod.title} />
      </div>
      <div className={styles.name}>
        {props.pod.title}
      </div>
      {/* <div className={styles.description}>
          {props.pod.description}
        </div> */}
    </a>

    {/* </ Link> */}
  </>
)

export default Pod