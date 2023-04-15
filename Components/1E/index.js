import styles from '../1E/1E.module.css'
import BottomNav from '@/Components/NavBarBottom'
export default function OneE() {

    return (
        <>
               <div className={styles.logoholder}>
                   <div>
                    <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
                   </div>
               </div>

               <div className={styles.contentContainer}>
                <div className={styles.container}>
                    <div className={styles.alertcont}>
                        <img src="/CheckMark.svg" className={styles.check}/>
                        <h3 className={styles.h3}>
                            Congratulations! You are not being scammed. :)
                        </h3>
                        <img src="/Mascot.svg" className={styles.mascot}/>
                    </div>
                </div>
                <div className={styles.buttoncontainer}>
                    <button className={styles.button}><h4>Run Test Again</h4></button>
                    <button className={styles.button}><h4>Check What You Chose to as to Why You're Not Being Scammed</h4></button>
                </div>
               </div>
               <BottomNav/>
        </>
    )
}