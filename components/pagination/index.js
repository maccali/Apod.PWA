import React from 'react'
import Link from 'next/link'
import NumberFormat from 'react-number-format';
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
            <Link href={`/images/${(this.props.page <= 1) ? 1 : parseInt(this.props.page) - 1}`}>
              <a aria-label="Back Page"><div className={styles.btn}><i className="fas fa-chevron-left"></i></div></a>
            </Link>
            <div className={styles.numbercenter}>
              {this.props.page}
            </div>
            <Link href={`/images/${parseInt(this.props.page) + 1}`}>
              <a aria-label="Next Page"><div className={styles.btn}><i className="fas fa-chevron-right"></i></div></a>
            </Link>
          </div>
          <div className={styles.line}>
            <div className={styles.divinput}>
              <label aria-label="Type a page">
                <NumberFormat
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  decimalSeparator={false}
                />
                </label>
            </div>
              {this.state.value == this.props.page
                ? <Link href={`/images/${this.props.page}`}>
                  <a aria-label="Back To Top"><div className={styles.btn}><i className="fas fa-chevron-up"></i></div></a>
                </Link>
                : <Link href={`/images/${this.state.value}`}>
                  <a aria-label="Search Page"><div className={styles.btn}><i className="fas fa-search"></i></div></a>
                </Link>
              }
            </div>
          </div>
        </div>
    )
  }
}

export default Pagination