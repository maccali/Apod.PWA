import React from 'react'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './pod.module.css'


class Pod extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <Link href={`/day/${this.props.pod.date}`}> */}
          <a onClick={() => this.props.openModal()} className={styles.card}>
            <div className={styles.date}>
              {this.props.pod.date}
            </div>
            <div className={styles.divimg}>
              {(this.props.pod.media_type === 'image') ?
                <div>
                  <LazyLoadImage
                    alt={this.props.pod.title}
                    height={270}
                    src={this.props.pod.url} // use normal <img> attributes as props
                    effect="opacity"
                  />
                </div>
                : <iframe src={this.props.pod.url} height="100%" alt={this.props.pod.title}></iframe>
              }
            </div>
            <div className={styles.name}>
              <p>{this.props.pod.title}</p>
            </div>
          </a>
        {/* </ Link> */}
      </>
    )
  }
}

export default Pod