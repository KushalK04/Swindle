import styles from '../1R/1R.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function OneR() {

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
                    Is the call coming from an unfamiliar number?
                </h3>
               </div>

               <div className={styles.buttoncontainer}>
                <button className={styles.button}><h4>Yes</h4></button>
                <button className={styles.button}><h4>No</h4></button>
                </div>

               </div>
               <BottomNav/>
        </>
    )
}