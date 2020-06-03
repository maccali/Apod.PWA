import React from 'react'
// import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";
import styles from './spinner.module.css'


const Spinner = () => (
  <div className={styles.cont}>
    <MoonLoader
      // css={override}
      size={120}
      color={"#fff"}
      loading={true}
    />
  </div>
)

export default Spinner