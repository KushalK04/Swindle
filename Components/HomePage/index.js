import styles from '../HomePage/HomePage.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function HomePage() {

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
                    Feel Like You're getting scammed?
                    Run Our Test Below!
                </h3>
                <img src="/Mascot.svg" className={styles.mascot}/>
               </div>

               <div className={styles.buttoncontainer}>
                <button className={styles.button}><h4>Am I Being Scammed?</h4></button>
                <button className={styles.button}><h4>Learn More About Scams</h4></button>
                </div>

               </div>
               <BottomNav/>
        </>
    )
}