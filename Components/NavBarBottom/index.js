import Link from 'next/link'
import styles from '../NavBarBottom/BottomNav.module.css'

export default function BottomNav() {

    return (
        <>
          <div className={styles.cont}>
            <Link href="/">
             <div>
                <img src="/icons/Restart Icon.svg" className={styles.res}/>
             </div>
            </Link>

            <Link href="/2E">
              <div>
                  <img src="/icons/Information Icon.svg" className={styles.info}/>
              </div>
            </Link>
            

            <div>
              
                <img src="/icons/About Us.svg" className={styles.ab}/>
               
            </div>
          </div>
        </>
    )
}