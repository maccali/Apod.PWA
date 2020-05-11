import React from 'react';
import NProgress from 'nprogress';
import Router from "next/router";
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class NextNProgress extends React.Component {
  static defaultProps = {
    color: '#29D',
    colorSecondary: '#29D',
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 3,
  };

  timer = null;

  routeChangeStart = () => {
    NProgress.set(this.props.startPosition);
    NProgress.start();
  };

  routeChangeEnd = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      NProgress.done(true);
    }, this.props.stopDelayMs);
  };

  render() {
    const { color, colorSecondary, height } = this.props;

    return (
      <style jsx global>{`
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: ${color};
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: ${height}px;
        }
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
          opacity: 1;
          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }
        #nprogress .spinner {
          display: "block";
          position: fixed;
          z-index: 1031;
          top: 50%;
          padding: 10px;
          padding-left: 20px;
          border-radius: 0 45px 45px 0;
          background-color: ${colorSecondary};
          -webkit-box-shadow: 0px 0px 33px -9px rgba(255,255,255,.5);
          -moz-box-shadow: 0px 0px 33px -9px rgba(255,255,255,.5);
          box-shadow: 0px 0px 33px -9px rgba(255,255,255,.5);
        }
        #nprogress .spinner-icon {
          width: 33px;
          height: 33px;
          box-sizing: border-box;
          border: solid 5px transparent;
          border-top-color: ${color};
          border-left-color: ${color};
          border-radius: 50%;
          -webkit-animation: nprogresss-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
        }
        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }
        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }
        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>);
  }

  componentDidMount() {
    const { options } = this.props;

    if (options) {
      NProgress.configure(options);
    }

    Router.events.on('routeChangeStart', this.routeChangeStart);
    Router.events.on('routeChangeComplete', this.routeChangeEnd);
    Router.events.on('routeChangeError', this.routeChangeEnd);
  }
}

NextNProgress.propTypes = {
  color: PropTypes.string,
  startPosition: PropTypes.number,
  stopDelayMs: PropTypes.number,
  options: PropTypes.object,
};

export default NextNProgress;