import styles from '../2F/2F.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function TwoF() {

    return (
        <>
               <div className={styles.logoholder}>
                   <div>
                    <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
                   </div>
               </div>

               <div className={styles.contentContainer}>

               <h1 className={styles.h3}>
                Phone Call Scams
               </h1>
               
               <div className={styles.container}>
                <h3>
                    A phone call scam is a type of fraud in which scammers make unsolicited phone calls to unsuspecting individuals, in order to trick them into providing personal information, money, or both. Phone call scams can take many forms, including:
                    <ul className={styles.list}>
                        <li>Impersonation Scams: Scammers may impersonate government officials, representatives from legitimate organizations, or law enforcement officers in order to gain the trust of the victim.</li>
                        <li>Prize or Lottery Scams: Scammers may claim that the victim has won a prize or a lottery, but must pay a fee to claim the prize.</li>
                        <li>Tech Support Scams: Scammers may claim to be from a reputable tech company, and may ask the victim to install software on their computer or provide remote access to their device in order to fix a supposed issue.</li>
                        <li>Charity Scams: Scammers may claim to represent a legitimate charity and ask the victim for a donation.</li>
                    </ul>
                </h3>
                <h3 className={styles.center}>It is important to be cautious when receiving unsolicited phone calls and to not provide personal information or money to unknown callers. Legitimate organizations will not ask for personal information or money over the phone without prior communication and verification.</h3>
               </div>
               </div>
               <BottomNav/>
        </>
    )
}