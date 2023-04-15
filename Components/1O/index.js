import styles from '../1O/1O.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function OneO() {

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
                    Is the message from the official accounts of the organizations that are asking for your info?
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