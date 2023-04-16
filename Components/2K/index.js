import styles from '../2K/2K.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function TwoK() {

    return (
        <>
               <div className={styles.logoholder}>
                   <div>
                    <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
                   </div>
               </div>

               <div className={styles.contentContainer}>

               <h1 className={styles.h3}>
                 Text messages/instant messaging scams
               </h1>
               
               <div className={styles.container}>
               <h3 className={styles.center}>A text scam is any type of unsolicited electronic message that attempts to obtain personal information about your identity, online accounts, or money. A major problem with text scams is how easy it is to appear to be someone else over text. The technology allows scammers to pretend to be a bank, an email provider or another legitimate company simply by using their name in the text message. The most important thing to remember is that responsible companies will never ask you to reply to a message with your personal or banking information, or tell you to click on a link.You should never enter your personal or banking information into a text message, or onto any unverified website. If you need to provide information on a website, be sure it is a website that has https//: in its URL or internet address.</h3>
               </div>
               </div>
               <BottomNav/>
        </>
    )
}