import styles from '../1B/1B.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function OneB() {

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
                    What type of scam are you trying to check?
                </h3>
               </div>

               <div className={styles.buttoncontainer}>
                <button className={styles.button}><h4>Email</h4></button>
                <button className={styles.button}><h4>Text</h4></button>
                <button className={styles.button}><h4>Call</h4></button>
                </div>

               </div>
               <BottomNav/>
        </>
    )
}