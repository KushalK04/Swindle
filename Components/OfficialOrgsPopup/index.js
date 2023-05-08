import { useState } from "react"
import styles from './popup.module.css'
import Link from "next/link";

export default function Ad() {

    const [popup, setPopup] = useState(true);

    return (
        <>
          {
            popup ?
            <div>
                 <button className={styles.button} onClick={() => setPopup(false)}>Examples</button>
            </div>
            : <>
                <div className={styles.back}>
                    <h1 onClick={() => setPopup(true)} className={styles.h1}>X</h1>
                    <img src="/fakegoogle.jpg" className={styles.img}/>
                </div>
              </>
          }
        </>
    )
}