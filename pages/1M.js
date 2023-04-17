import Head from 'next/head'
import styles from '@/styles/1M.module.css'
import BottomNav from '@/Components/NavBarBottom'
import Link from 'next/link'

var yes = process.env.NEXT_PUBLIC_YES;
var no = process.env.NEXT_PUBLIC_NO;


export default function OneM() {
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
              Is the message telling you that you won a prize or some form of reward that you can claim?
            </h3>
          </div>
          <div className={styles.buttoncontainer}>
            <Link href="/1K"><button className={styles.button}><h4>{yes}</h4></button></Link>
            <Link href="/1N"><button className={styles.button}><h4>{no}</h4></button></Link>
          </div>
        </div>
        <BottomNav/>
      </main>
    </>
  )
}

