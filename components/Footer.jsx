import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Footer.module.css'
import abl from '@/assets/img/ableton.png'

/*SM IMPORTS*/
import fb from '@/assets/img/facebook.svg'
import tw from '@/assets/img/twitter.svg'
import yt from '@/assets/img/yt.svg'
import ig from '@/assets/img/insta.png'
function Footer() {
    return (
        <footer className={styles.generalCont}>
                <div className={styles.ablCont}>
                    <Image className={styles.abl} src={abl}/>
                </div>

                <div className={styles.contDos}>
                    <div className={styles.smCont}>
                        <div className={styles.smLnkCont}>
                            <a href="">Register Live or Push {'>'}</a>
                            <a href="">About Ableton {'>'}</a>
                            <a href="">Jobs {'>'}</a>
                        </div>
                        <div className={styles.sm}>
                        <a className={styles.fbCont} href=''><Image src={fb} className={styles.fb}/></a>
                        <a className={styles.twCont} href=''><Image src={tw} className={styles.tw}/></a>
                        <a className={styles.ytCont} href=''><Image src={yt} className={styles.yt}/></a>
                        <a className={styles.igCont} href=''><Image src={ig} className={styles.ig}/></a>
                        </div>
                    </div>
                    <div className={styles.eduCont}>
                        <div className={styles.eduLnkCont}>
                        <h1>Education</h1>
                        <a href=""><p>Offers for students and teachers</p></a>
                        <a href=""><p>Ableton for the Classroom</p></a>
                        <a href=""><p>Ableton for Colleges and Universities</p></a>
                        </div>
                    </div>
                    <div className={styles.suCont}></div>
                </div>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed quas qui, culpa hic officiis facere necessitatibus? Quas a saepe quos sint amet dignissimos nobis, dolorem nihil culpa natus dolorum.</p></div>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed quas qui, culpa hic officiis facere necessitatibus? Quas a saepe quos sint amet dignissimos nobis, dolorem nihil culpa natus dolorum.</p></div>

        </footer>
    )
}

export default Footer