import React from 'react'
import Link from 'next/link'
import styles from './pagination.module.css'

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    let value = props.page
    let prevPage = value - 1
    let nextPage = value + 1

    this.state = {
      value,
      prevPage,
      nextPage
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className={styles.cont}>
        <div className={styles.card}>
          <div className={styles.line}>
            <Link href={`/?p=${(this.props.page <= 1) ? 1 : parseInt(this.props.page) - 1}`}>
              <a><div className={styles.btn}><i className="fas fa-chevron-left"></i></div></a>
            </Link>
            <div className={styles.numbercenter}>
              {this.props.page}
            </div>
            <Link href={`/?p=${parseInt(this.props.page) + 1}`}>
              <a><div className={styles.btn}><i className="fas fa-chevron-right"></i></div></a>
            </Link>
          </div>
          <div className={styles.line}>
            <div className={styles.divinput}>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            {this.state.value == this.props.page
              ? <Link href={`/?p=${this.props.page}`}>
                <a><div className={styles.btn}><i className="fas fa-chevron-up"></i></div></a>
              </Link>
              : <Link href={`/?p=${this.state.value}`}>
                <a><div className={styles.btn}><i className="fas fa-search"></i></div></a>
              </Link>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Pagination