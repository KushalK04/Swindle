import styles from '../1L/1L.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function OneL() {

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
                    Does the link look like it is from something familiar or legitimate?
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