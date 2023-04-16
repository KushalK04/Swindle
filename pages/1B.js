import Head from 'next/head'
import styles from '@/styles/1B.module.css'
import OneB from '@/Components/1B'
import BottomNav from '@/Components/NavBarBottom'




export default function OneB() {
  return (
    <>
      <Head>
        <title>Swindle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Layer_1(3).svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logoholder}>
          <div>
            <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
          </div>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.container}>
            <h3 className={styles.h3}>What type of scam are you trying to check?</h3>
          </div>
          <div className={styles.buttoncontainer}>
            <button className={styles.button}><h4>Email</h4></button>
            <button className={styles.button}><h4>Text</h4></button>
            <button className={styles.button}><h4>Call</h4></button>
          </div>
        </div>
        <BottomNav/>
      </main>
    </>
  )
}

