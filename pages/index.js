import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import CardPod from '../components/cards/pod'

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      podList: [],
      querys: [],
      last: new Date()
    };
  }

  zeroLeftIfOneDigit(str) {
    if (str.length === 1) {
      str = `0${str}`
    }
    return str;
  }

  queryMount() {
    const count = 25
    const key = '8g23BupBSJXtE86RIMPOYki0ele3dSRvoshr5yLM'

    for (var i = 0; i < count; i++) {
      let day = this.getDataFormatada(this.state.last)
      var url = `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${day}&end_date=${day}`

      var dataChange = this.state.last.setDate(this.state.last.getDate() - 1)

      this.setState(({
        querys: this.state.querys.push(url),
        last: dataChange
      }))
    }
  }

  getDataFormatada(last) {
    let day = this.zeroLeftIfOneDigit(`${last.getDate()}`);
    let month = this.zeroLeftIfOneDigit(`${last.getMonth() + 1}`);
    let year = last.getFullYear();
    let today = `${year}-${month}-${day}`

    return today
  }

  async getData() {

    this.queryMount()

    this.state.querys.map(async (item) => {
      let res = await axios.get(item)

      console.log(res.data);
      this.setState(prevState => ({
        podList: [...prevState.podList, res.data[0]]
      }))
      this.macy()
    })


  }

  macy() {
    var macy = Macy({
      container: '#macy-container',
      trueOrder: false,
      waitForImages: false,
      margin: 24,
      columns: 4,
      breakAt: {
        1200: 4,
        940: 2,
        520: 1
        // 400: 1
      }
    });
    macy.recalculate();
  }

  async componentDidMount() {
    await this.getData()
    this.macy()
  }

  componentDidUpdate() {
    this.macy();
  }

  render() {
    return <>
      <Nav />
      <Head>
        <title>Apod - Space</title>
      </Head>
      <main>
        <div className="container-fluid bg-primary">
          <div id="macy-container" className="container">
            {this.state.podList.map(pod =>
              <div key={pod.name}>
                <CardPod pod={pod} />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>;
  }
}

export default Home
