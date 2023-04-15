import styles from '../1A/1A.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function OneA() {

    return (
        <>
               <div className={styles.logoholder}>
                   <div>
                    <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
                   </div>
               </div>

               <div className={styles.contentContainer}>

               <h3 className={styles.h3}>
                Where are you currently located?
               </h3>
               <div className={styles.container}>
                <h3 className={styles.h3}>
                    People in *Location* are 50% more likely to get scammed
                </h3>
               </div>

               <div className={styles.buttoncontainer}>
                <button className={styles.button}><h4>Vancouver</h4></button>
                <button className={styles.button}><h4>Surrey</h4></button>
                <button className={styles.button}><h4>Burnaby</h4></button>
                <button className={styles.button}><h4>Richmond</h4></button>
                <button className={styles.button}><h4>Coquitlam</h4></button>
                </div>

               </div>
               <BottomNav/>
        </>
    )
}