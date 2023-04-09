import styles from '../NavBarBottom/BottomNav.module.css'

export default function BottomNav() {

    return (
        <>
          <div className={styles.cont}>
            <div>
              
                <img src="/icons/Restart Icon.svg" className={styles.res}/>
              
            </div>

            <div>
              
                <img src="/icons/Information Icon.svg" className={styles.info}/>
              
            </div>

            <div>
              
                <img src="/icons/About Us.svg" className={styles.ab}/>
               
            </div>
          </div>
        </>
    )
}