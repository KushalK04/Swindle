import styles from '../2G/2G.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function TwoG() {

    return (
        <>
               <div className={styles.logoholder}>
                   <div>
                    <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
                   </div>
               </div>
               
               <div className={styles.contentContainer}>
                <h3 className={styles.h3}>
                    Types of Scams and Frauds.
                </h3>
               <div className={styles.buttoncontainer}>
                <button className={styles.button}><h4>Phone call scams</h4></button>
                <button className={styles.pad}><h4>Prepaid cards, bitcoin, e-transfer payment scams</h4></button>
                <button className={styles.button}><h4>Email scams</h4></button>
                <button className={styles.button}><h4>Text messages/instant messaging scams</h4></button>
                <button className={styles.button}><h4>Mail scams</h4></button>
                <button className={styles.pad}><h4>Common scams aimed at newcomers to Canada</h4></button>
               </div>

               </div>
               <BottomNav/>
        </>
    )
}