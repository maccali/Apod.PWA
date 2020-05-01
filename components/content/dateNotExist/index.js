import Head from 'next/head'
import styles from './datenotexist.module.css'

function DateNotexist({ statusCode }) {
  return (
    <>
      <Head>
        <title>Apod - Date Not Exist</title>
      </Head>
      <main>
        <div className="container-fluid bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.card}>
                  <div className={styles.text}>
                      <h1>Slow Down </h1>
                      <h2>Astronaut</h2>
                      <p>This day does not exist yet ;D</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default DateNotexist
