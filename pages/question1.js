import Head from 'next/head'
import Image from 'next/image'
import BottomNav from '@/Components/NavBarBottom'
import Rectangle from '@/Components/QuestionsBackground'

export default function question1() {
    return(
        <>  
            <Rectangle/>
            <BottomNav/>
        </>
    )
}