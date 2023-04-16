import styles from '../2J/2J.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function TwoJ() {

    return (
        <>
               <div className={styles.logoholder}>
                   <div>
                    <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
                   </div>
               </div>

               <div className={styles.contentContainer}>

               <h1 className={styles.h3}>
                 Prepaid cards, bitcoin, e-transfer payment scams
               </h1>
               
               <div className={styles.container}>
               <h3 className={styles.center}>With the popularity of online banking these days, e-Transfers have become one of the easiest and most convenient ways to pay or accept payment from someone. However, this recent technology boom has also allowed hackers, fraudsters, and identity thieves to develop new ways of stealing your money, particularly through e-Transfer scams. In fact, there are multiple ways of falling victim to this type of cybercrime if you're not careful when conducting bank transactions online.
                    As mentioned, there are a few different types of e-Transfer scams you may encounter when banking online, whether you're sending money to someone or accepting payment from them. Here are some of the more common e-Transfer scams in Canada:</h3>
               </div>
               </div>
               <BottomNav/>
        </>
    )
}