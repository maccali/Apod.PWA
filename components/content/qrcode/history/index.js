import React from 'react'
import styles from './history.module.css'

const QRCodeHistory = (props) => (
    <>
        <div className="row">
            <div className="col-12">
                <h2>
                    A little of history
              </h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className={styles.plate}>
                    <p className="per">
                        QR code (Quick Response in Portuguese) is a two-dimensional barcode that can be easily scanned using most cell phones equipped with a camera. This code is converted into text (interactive), a URI address, a phone number, a georeferenced location, an email, a contact or an SMS.
                    </p>
                    <p className="per">
                        Initially used to catalog parts in vehicle production, today the QR Code is used in inventory management and stock control in industries and commerce. Since 2003, applications have been developed that help users to enter data on a cell phone (mobile phone) using the device's camera. QR codes are also common in magazines and advertisements, to record addresses and URLs, as well as detailed personal information. On business cards, for example, the QR code makes it very easy to insert this data into cell phone diaries. Capture programs or PCs with an RS-232C interface can use a scanner to capture images.
                    </p>
                    <p className="per">
                        The Japanese standard for the QR code, JIS X 0510, was launched in January 1999 and corresponds to the international standard ISO / IEC 18004, having been approved in June 2000. According to the Denso-Wave website, the "QR code is open for use and its patent, by Denso-Wave, is not practiced ".
                    </p>
                    <p className="per">
                        <i><b>References: </b> <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a></i>
                    </p>
                </div>
            </div>
        </div>
    </>
)

export default QRCodeHistory
