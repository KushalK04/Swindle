import { useContext } from 'react'
import { UserSelectionsContext } from './data'
import Head from 'next/head'
import styles from '@/styles/Reiteration.module.css'
import BottomNav from '@/Components/NavBarBottom'
import HomePage from '@/Components/HomePage'

export default function Reiteration() {
  const { selections } = useContext(UserSelectionsContext)

  return (
    <>
      <Head>
        <title>Swindle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Layer_1(3).svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          {selections['What type of scam are you trying to check?'] && (
            <>
              <h3 className={styles.h3}>What type of scam are you trying to check?</h3>
              <p className={styles.answer}>{selections['What type of scam are you trying to check?']}</p>
            </>
          )}

          {selections['Have you provided any personal information?'] && (
            <>
              <h3 className={styles.h3}>Have you provided any personal information?</h3>
              <p className={styles.answer}>{selections['Have you provided any personal information?']}</p>
            </>
          )}

          {selections['What type of personal info was it asking for?'] && (
            <>
              <h3 className={styles.h3}>What type of personal info was it asking for?</h3>
              <p className={styles.answer}>{selections['What type of personal info was it asking for?']}</p>
            </>
          )}

          {selections['Is this message asking you to go to a link?'] && (
            <>
              <h3 className={styles.h3}>Is this message asking you to go to a link?</h3>
              <p className={styles.answer}>{selections['Is this message asking you to go to a link?']}</p>
            </>
          )}

          {selections['Are they asking for money?'] && (
            <>
              <h3 className={styles.h3}>Are they asking for money?</h3>
              <p className={styles.answer}>{selections['Are they asking for money?']}</p>
            </>
          )}

          {selections['Is this message from a person or an organization you have seen or used before?'] && (
            <>
              <h3 className={styles.h3}>Is this message from a person or an organization you have seen or used before?</h3>
              <p className={styles.answer}>{selections['Is this message from a person or an organization you have seen or used before?']}</p>
            </>
          )}

          {selections['Does the link look like it is from something familiar or legitimate?'] && (
            <>
              <h3 className={styles.h3}>Does the link look like it is from something familiar or legitimate?</h3>
              <p className={styles.answer}>{selections['Does the link look like it is from something familiar or legitimate?']}</p>
            </>
          )}

          {selections['Is the message telling you that you won a prize or some form of reward that you can claim?'] && (
            <>
              <h3 className={styles.h3}>Is the message telling you that you won a prize or some form of reward that you can claim?</h3>
              <p className={styles.answer}>{selections['Is the message telling you that you won a prize or some form of reward that you can claim?']}</p>
            </>
          )}

          {selections['Is the message saying that the device you are using has a virus and needs to run a scan?'] && (
            <>
              <h3 className={styles.h3}>Is the message saying that the device you are using has a virus and needs to run a scan?</h3>
              <p className={styles.answer}>{selections['Is the message saying that the device you are using has a virus and needs to run a scan?']}</p>
            </>
          )}

          {selections['Is the message from the official accounts of the organizations that are asking for your info?'] && (
            <>
              <h3 className={styles.h3}>Is the message from the official accounts of the organizations that are asking for your info?</h3>
              <p className={styles.answer}>{selections['Is the message from the official accounts of the organizations that are asking for your info?']}</p>
            </>
          )}

          {selections['Does the message contain any spelling or grammar mistakes, or anything that disrupts the format of the message?'] && (
            <>
              <h3 className={styles.h3}>Does the message contain any spelling or grammar mistakes, or anything that disrupts the format of the message?</h3>
              <p className={styles.answer}>{selections['Does the message contain any spelling or grammar mistakes, or anything that disrupts the format of the message?']}</p>
            </>
          )}

          {selections['Is the message about an investment, pension fund or any loans that you are famililar with?'] && (
            <>
              <h3 className={styles.h3}>Is the message about an investment, pension fund or any loans that you are famililar with?</h3>
              <p className={styles.answer}>{selections['Is the message about an investment, pension fund or any loans that you are famililar with?']}</p>
            </>
          )}

          {selections['Is the call coming from an unfamiliar number?'] && (
            <>
              <h3 className={styles.h3}>Is the call coming from an unfamiliar number?</h3>
              <p className={styles.answer}>{selections['Is the call coming from an unfamiliar number?']}</p>
            </>
          )}

          {selections['Is the speaker automated?'] && (
            <>
              <h3 className={styles.h3}>Is the speaker automated?</h3>
              <p className={styles.answer}>{selections['Is the speaker automated?']}</p>
            </>
          )}

          {selections['Are they offering you services that youre uninterested in or have no knowledge of?'] && (
            <>
              <h3 className={styles.h3}>Are they offering you services that youre uninterested in or have no knowledge of?</h3>
              <p className={styles.answer}>{selections['Are they offering you services that youre uninterested in or have no knowledge of?']}</p>
            </>
          )}

          {selections['Are they asking you to update your credit/debit card information about a package or order you are unfamiliar with?'] && (
            <>
              <h3 className={styles.h3}>Are they asking you to update your credit/debit card information about a package or order you are unfamiliar with?</h3>
              <p className={styles.answer}>{selections['Are they asking you to update your credit/debit card information about a package or order you are unfamiliar with?']}</p>
            </>
          )}

          {selections['Is this message from a person or a number you have seen or contacted before?'] && (
            <>
              <h3 className={styles.h3}>Is this message from a person or a number you have seen or contacted before?</h3>
              <p className={styles.answer}>{selections['Is this message from a person or a number you have seen or contacted before?']}</p>
            </>
          )}

          {selections['Is this message asking you to go to a link?'] && (
            <>
              <h3 className={styles.h3}>Is this message asking you to go to a link?</h3>
              <p className={styles.answer}>{selections['Is this message asking you to go to a link?']}</p>
            </>
          )}

          {selections['Is the message claiming to be from a service provider?'] && (
            <>
              <h3 className={styles.h3}>Is the message claiming to be from a service provider?</h3>
              <p className={styles.answer}>{selections['Is the message claiming to be from a service provider?']}</p>
            </>
          )}

          {selections['Does the message seem to be reaching out to a persons name that is not your name?'] && (
            <>
              <h3 className={styles.h3}>Does the message seem to be reaching out to a persons name that is not your name?</h3>
              <p className={styles.answer}>{selections['Does the message seem to be reaching out to a persons name that is not your name?']}</p>
            </>
          )}

          {selections['Does the link look like it is from something familiar or legitimate?'] && (
            <>
              <h3 className={styles.h3}>Does the link look like it is from something familiar or legitimate?</h3>
              <p className={styles.answer}>{selections['Does the link look like it is from something familiar or legitimate?']}</p>
            </>
          )}

          {selections['Is the message only a voicemail into text?'] && (
            <>
              <h3 className={styles.h3}>Is the message only a voicemail into text?</h3>
              <p className={styles.answer}>{selections['Is the message only a voicemail into text?']}</p>
            </>
          )}

          {selections['Do they claim that they got the wrong number but still continue the conversation anyway?'] && (
            <>
              <h3 className={styles.h3}>Do they claim that they got the wrong number but still continue the conversation anyway?</h3>
              <p className={styles.answer}>{selections['Do they claim that they got the wrong number but still continue the conversation anyway?']}</p>
            </>
          )}

          {selections['Does the sender of the message have no more than 6 digits?'] && (
            <>
              <h3 className={styles.h3}>Does the sender of the message have no more than 6 digits?</h3>
              <p className={styles.answer}>{selections['Does the sender of the message have no more than 6 digits?']}</p>
            </>
          )}


          {!Object.keys(selections).length && (
            <HomePage message="You haven't answered any questions yet. Please take the quiz first." />
          )}

          <BottomNav />
        </div>
      </main>
    </>
  )
}
