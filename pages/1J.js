import Head from 'next/head'
import styles from '@/styles/1J.module.css'
import BottomNav from '@/Components/NavBarBottom'
import Link from 'next/link'


export default function OneJ() {
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
                    Are they asking for money?
                </h3>
               </div>

               <div className={styles.buttoncontainer}>
                <Link href="/1K"><button className={styles.button}><h4>Yes</h4></button></Link>
                <Link href="/1M"><button className={styles.button}><h4>No</h4></button></Link>               
                </div>

               </div>
               <BottomNav/>
      </main>
    </>
  )
}

