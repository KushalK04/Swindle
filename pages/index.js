import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import BottomNav from '@/Components/NavBarBottom'
import OneA from '@/Components/1A'
import OneT from '@/Components/1T'
import OneU from '@/Components/1U'



export default function Home() {
  return (
    <>
      <Head>
        <title>Swindle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Layer_1(3).svg" />
      </Head>
      <main className={styles.main}>
        <OneU/>
      </main>
    </>
  )
}

