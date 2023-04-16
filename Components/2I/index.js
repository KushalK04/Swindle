import styles from '../2I/2I.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function TwoI() {

    return (
        <>
               <div className={styles.logoholder}>
                   <div>
                    <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
                   </div>
               </div>

               <div className={styles.contentContainer}>

               <h1 className={styles.h3}>
                 Mail Scams
               </h1>
               
               <div className={styles.container}>
                <h3>
                Receiving unsolicited mail is not only bothersome, but might also put your personal or financial information at risk. Take the steps to protect yourself against postal mail fraud. Learn how to lower the amount of addressed marketing offers you receive in your mailbox.
                Some individuals or organizations try to reach would-be victims by mail. According to the Canadian Anti-Fraud Centre, the three most common types of mail fraud are:
                    <ul className={styles.list}>
                        <li>international mail scams (i.e., foreign money offers, inheritance scams)</li>
                        <li>job scams (i.e., mystery shopper scams, car wrapping scams)</li>
                        <li>prize scams (i.e., lottery scams, sweepstakes scams)</li>
                    </ul>
                </h3>
                <h3 className={styles.center}>It is important to be cautious when receiving unsolicited phone calls and to not provide personal information or money to unknown callers. Legitimate organizations will not ask for personal information or money over the phone without prior communication and verification.</h3>
               </div>
               </div>
               <BottomNav/>
        </>
    )
}