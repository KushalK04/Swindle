import Head from 'next/head'
import styles from '@/styles/2M.module.css'
import BottomNav from '@/Components/NavBarBottom'
import BarChart from '@/Components/BarChart'
import Link from 'next/link'

export default function TwoM() {
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
          <h1 className={styles.h3}>Amount of Victims to Type of Cyber Crimes</h1>
          <div className={styles.container}>
            <BarChart/>
          </div>
          <div className={styles.buttoncontainer}>
            <Link href="/"><button className={styles.button}><h4>Next Fact</h4></button></Link>
          </div>
        </div>
        <BottomNav/>
      </main>
    </>
  )
}

