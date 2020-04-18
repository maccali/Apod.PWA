import React, { Component } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import styles from './search.module.css'
import qrcode from '../../models/QRCode'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class Search extends Component {

  state = {
    url: "",
    qrCodeList: null,
  };

  handleUrlChange = (e) => this.setState({
    url: e.currentTarget.value,
  })

  async getQRCode() {
    this.setState({
      qrCodeList: await qrcode.getQrs(this.state.url)
    });
    this.scrollTo();
  }
  scrollTo() {
    scroller.scrollTo('qrcode', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.title}>
          Gen Your QRCode
        </div>
        <div className={styles.input}>
          <TextareaAutosize
            type="text"
            placeholder="Put you content here"
            value={this.state.url}
            onChange={this.handleUrlChange}
          />
        </div>
        <div className={styles.btns} >
          <div to="qrcode" onClick={this.state.url ? () => this.getQRCode() : () => { }} className={!this.state.url ? styles.inactive : ''}><i className="fas fa-qrcode "></i>QRCode</div>
        </div>
        <div name="qrcode">
          <img src={this.state.qrCodeList} />
        </div>
      </div>
    )
  }
}