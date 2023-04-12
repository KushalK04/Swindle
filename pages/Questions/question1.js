import Head from 'next/head'
import Image from 'next/image'
import BottomNav from '@/Components/NavBarBottom'
import Rectangle from '@/Components/QuestionsBackground'
import styles from './question1.module.css'
import { useEffect, useRef } from 'react';

export default function question1() {
    return(
        <>  
            <div className={styles.main}>
                <div className={styles.questionaire}>
                    <h1 className={styles.question}>What type of scam are you trying to check?</h1>
                    <Rectangle className={styles.questionbox} width={600} height={250} color="#598392" borderRadius={10}></Rectangle>
                </div>
                
                <BottomNav/>
            </div>

        </>
    )
}