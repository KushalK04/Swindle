import styles from '../1U/1U.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function OneU() {

    return (
        <>
               <div className={styles.logoholder}>
                   <div>
                    <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
                   </div>
               </div>

               <div className={styles.contentContainer}>

               <h3 className={styles.h3}>
               </h3>
               <div className={styles.container}>
                <h3 className={styles.h3}>
                Are they asking you to update your credit/debit card information about a package or order you are unfamiliar with?</h3>
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