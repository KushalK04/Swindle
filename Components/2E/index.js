import styles from '../2E/2E.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function TwoE() {

    return (
        <>
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
                <button className={styles.button}><h4>Statistics on locations</h4></button>
                <button className={styles.button}><h4>Most Basic Scams</h4></button>
                <button className={styles.button}><h4>What to do if scammed</h4></button>
                </div>

               </div>
               <BottomNav/>
        </>
    )
}