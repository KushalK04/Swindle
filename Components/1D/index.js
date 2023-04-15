import styles from '../1D/1D.module.css'
import BottomNav from '@/Components/NavBarBottom'
export default function OneD() {

    return (
        <>
               <div className={styles.logoholder}>
                   <div>
                    <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
                   </div>
               </div>

               <div className={styles.contentContainer}>
                <div className={styles.container}>
                    <div className={styles.alertcont}>
                        <img src="/Alert.svg" className={styles.alert}/>
                        <h3 className={styles.h3}>
                            A suspicious group roaming around houses offering computer services have been reported as a scam in this area.
                        </h3>
                    </div>
                </div>
                <div className={styles.buttoncontainer}>
                    <button className={styles.button}><h4>Run Test Again</h4></button>
                </div>
               </div>
               <BottomNav/>
        </>
    )
}