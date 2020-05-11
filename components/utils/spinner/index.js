import React from 'react'
// import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";
import styles from './spinner.module.css'


const Spinner = () => (
  <div className={styles.cont}>
    <CircleLoader
      // css={override}
      size={222}
      color={"#fff"}
      loading={true}
    />
  </div>
)

export default Spinner