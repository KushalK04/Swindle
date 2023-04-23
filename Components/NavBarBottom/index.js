import Link from 'next/link'
import styles from '../NavBarBottom/BottomNav.module.css'

export default function BottomNav() {

  function goBackAndRefresh() {
    window.location.href = '/';
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

    return (
        <>
          <div className={styles.cont}>
            <Link href="javascript:history.back()">
             <div>
                <img src="/icons/Restart Icon.svg" className={styles.res}/>
             </div>
            </Link>

            <div onClick={goBackAndRefresh}>
              
                <img src="/icons/About Us.svg" className={styles.ab}/>
                
            </div>

            <Link href="/LearnMore">
              <div>
                  <img src="/icons/Information Icon.svg" className={styles.info}/>
              </div>
            </Link>      
          </div>
        </>
    )
}