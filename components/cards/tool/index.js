import React from 'react'
import Link from 'next/link'
import styles from './tool.module.css'
import renderHTML from 'react-render-html';


const Tool = (props) => (
  <>
    <Link href={props.tool.link}>
      <a className={styles.card}>
        <div className={styles.icon}>
          {renderHTML(props.tool.icon)}
        </div>
        <div className={styles.name}>
          {props.tool.name}
        </div>
        <div className={styles.description}>
          {props.tool.description}
        </div>
      </a>
    </ Link>
  </>
)

export default Tool