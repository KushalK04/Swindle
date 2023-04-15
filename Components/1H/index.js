import styles from '../1H/1H.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function OneH() {

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
                    What type of personal info was it asking for?
                </h3>
               </div>

               <div className={styles.buttoncontainer}>
                <button className={styles.button}><h4>Banking</h4></button>
                <button className={styles.button}><h4>Government</h4></button>
                <button className={styles.button}><h4>Social Media</h4></button>
                <button className={styles.button}><h4>Email</h4></button>
                <button className={styles.button}><h4>Device</h4></button>
                </div>

               </div>
               <BottomNav/>
        </>
    )
}