import styles from '../2A/2A.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function TwoA() {

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
                Is the message only a voicemail into text?
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