import styles from '../1F/1F.module.css'
import BottomNav from '@/Components/NavBarBottom'
export default function OneF() {

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
                            Oh no! You just got scammed! <br/> Remediate Fast! Here's a few suggestions:
                        </h3>
                        <img src="/Mascot.svg" className={styles.mascot}/>
                    </div>
                </div>
                <div className={styles.buttoncontainer}>
                    <button className={styles.button}><h4>Suggestions</h4></button>
                    <button className={styles.button}><h4>Check What You to Chose as to Why We Think You Got Scammed</h4></button>
                </div>
               </div>
               <BottomNav/>
        </>
    )
}