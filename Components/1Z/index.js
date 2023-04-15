import styles from '../1Z/1Z.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function OneZ() {

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