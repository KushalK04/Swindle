import Head from 'next/head'
import styles from '@/styles/1F.module.css'
import BottomNav from '@/Components/NavBarBottom'



export default function OneF() {
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
                    <div className={styles.alertcont}>
                        <img src="/Alert.svg" className={styles.alert}/>
                        <h3 className={styles.h3}>
                            Oh no! You just got scammed! <br/> Remediate Fast! Here's a few suggestions:
                        </h3>
                        <img src="/Mascot.svg" className={styles.mascot}/>
                    </div>
                </div>
                <div className={styles.buttoncontainer}>
                    <button className={styles.button}><h4>Suggestions</h4></button>
                    <button className={styles.button}><h4>Check What You to Chose as to Why We Think You Got Scammed</h4></button>
                </div>
               </div>
               <BottomNav/>
      </main>
    </>
  )
}

