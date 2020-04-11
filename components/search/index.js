import React, { Component } from 'react'
import styles from './search.module.css'
import gen from '../../models/generate'

export default class Search extends Component {

  state = {
    url: "",
    qrCodeList: ["rqqq list", "qr list"],
    urlList: ["urql list", "urql list", "urql list"]
  };

  // this.handleChange = this.handleChange.bind(this);


  handleUrlChange = (e) => this.setState({
    url: e.currentTarget.value,
  })

  async getInfo(type) {
    if (type === 'qrc') {
      var qrs = await gen.getQrs(this.state.url);
      this.setState({
        qrCodeList: qrs
      });
    }
    if (type === 'url') {
      var urls = await gen.getUrls(this.state.url);
      this.setState({
        urlList: urls
      });
    }
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.title}>
          Short Your link, Gen Your QRCode
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Put you URL here"
            value={this.state.url}
            onChange={this.handleUrlChange}
          />
        </div>
        <div className={styles.btns}>
          <div onClick={() => this.getInfo('qrc')}><i class="fas fa-qrcode"></i>QRCode</div>
          <div onClick={() => this.getInfo('url')}><i class="fas fa-globe"></i>Short URL</div>
        </div>
      </div>
    )
  }
}