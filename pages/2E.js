import Head from 'next/head'
import styles from '@/styles/2E.module.css'
import BottomNav from '@/Components/NavBarBottom'



export default function TwoE() {
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
                <h3 className={styles.h3}>
                    Want to learn more about scams?
                </h3>
               </div>

               <div className={styles.buttoncontainer}>
                <button className={styles.button}><h4>General Facts</h4></button>
                <button className={styles.button}><h4>Most Basic Scams</h4></button>
                <button className={styles.button}><h4>What to do if scammed</h4></button>
                </div>

               </div>
               <BottomNav/>
      </main>
    </>
  )
}

