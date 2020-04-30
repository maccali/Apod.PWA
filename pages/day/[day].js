import React from 'react'
import axios from 'axios'

import Head from 'next/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import styles from './day.module.css'

import DateHelper from '../../helpers/date'

class Day extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static async getInitialProps(ctx) {

    if (DateHelper.dataValida(ctx.query.day)) {
      const key = '8g23BupBSJXtE86RIMPOYki0ele3dSRvoshr5yLM'

      var url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${ctx.query.day}`

      let req = await axios.get(`${url}`)
      if (req.status === 200) {
        console.log(req.data)
        return {
          dayData: req.data
        }
      }
    }

    return {
      dayData: null
    }

  }



  render() {
    let { dayData } = this.props

    return <>
      <Nav />
      <Head>
        <title>Apod Day {dayData.date}</title>
      </Head>
      <main>
        <div className="container-fluid bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className={styles.date}>{dayData.date}</h3>
              </div>
              <div className="col-12">
                <h1 className={styles.title}>{dayData.title}</h1>
              </div>
              <div className="col-12">

                <div className={styles.imgcont}>
                  {/* {(dayData.hdurl)} */}
                  <img src={dayData.hdurl} alt={dayData.title} />
                </div>
                {/* <img src={dayData.url} alt={dayData.title} /> */}
              </div>
              <div className="col-12">
                {(dayData.copyright) ?
                  <p className={styles.copyright}><b>Image Credit & Copyright:</b> {dayData.copyright}</p>
                  : ''}
              </div>
              <div className="col-12">
                {(dayData.explanation) ?
                  <p className={styles.explanation}>
                    {dayData.explanation}
                  </p>
                  : ''}
              </div>


              {dayData.media_type}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>;
  }
}

export default Day
