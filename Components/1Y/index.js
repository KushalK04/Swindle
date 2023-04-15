import styles from '../1Y/1Y.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function OneY() {

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
                Does the message seem to be reaching out to a person’s name that is not your name?
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