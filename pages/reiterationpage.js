import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import HomePage from '@/Components/HomePage'



export default function Reiteration() {
  return (
    <>
      <Head>
        <title>Swindle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Layer_1(3).svg" />
      </Head>
      <main className={styles.main}>
        <HomePage/>
      </main>
    </>
  )
}
