import styles from '../2H/2H.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function TwoH() {

    return (
        <>
               <div className={styles.logoholder}>
                   <div>
                    <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
                   </div>
               </div>

               <div className={styles.contentContainer}>

               <h1 className={styles.h3}>
                Email Scams
               </h1>
               
               <div className={styles.container}>
                <h3>Email Scams are malicious emails that aim to trick recipients into giving up their sensitive information, such as bank accounts and passwords. This is one of the ways scammers use to get easy money from you.</h3>
                <h2 className={styles.h3}>Wondering why you receive these emails?</h2>
                <h3>Cybercriminals may have obtained your email address from a data leak, subscription to fake websites, public sources like social media, or illegal purchase of user data.</h3>
                <h2 className={styles.h3}>How to spot an email scam?</h2>
                <h3>
                    Here are some ways to recognize a malicious email:
                    <ul className={styles.list}>
                        <li>It came from an infrequent sender.</li>
                        <li>It has an urgent call to action or an alarming tone.</li>
                        <li>It has unexpected attachments and suspicious links.</li>
                        <li>There are multiple spelling errors and bad grammar in the message.</li>
                        <li>The email address or domain name is misspelt or altered</li>
                        <li>Email greeting is not personalized or uses a generic format like "Dear madam or sir".</li>
                    </ul>
                </h3>

                <h3>
                    Additionally, here are the most common types of scam emails circulating today:
                    <ul className={styles.list}>
                        <li>Sextortion or doxing</li>
                        <li>Business email imposters</li>
                        <li>Fake contest or raffle prizes</li>
                        <li>Account update and password reset requests</li>
                        <li>Fake charity membership from famous personalities</li>
                        <li>Too good to be true subscription promos and renewal discounts</li>
                    </ul>
                </h3>
               </div>
               </div>
               <BottomNav/>
        </>
    )
}