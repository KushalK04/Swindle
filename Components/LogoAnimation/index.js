import Link from 'next/link'
import styles from '../LogoAnimation/LogoAnimation.module.css'
import { useRouter } from 'next/router'
import LogoAnimation from '../public/SwindleLogoAnimation.mp4'


export default function LogoAnimation() {

    return (
        <>
            <video src={LogoAnimation} autoPlay loop muted className={styles.animation} />
        </>
    )
}