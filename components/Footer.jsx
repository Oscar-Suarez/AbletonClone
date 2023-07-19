import React from 'react'
import Image from 'next/image'
import styles from '@/styles/footer.module.css'
import abl from '@/assets/img/ableton.png'
import logo from '@/assets/img/ableton.svg'

/*SM IMPORTS*/
import fb from '@/assets/img/facebook.svg'
import tw from '@/assets/img/twitter.svg'
import yt from '@/assets/img/yt.svg'
import ig from '@/assets/img/insta.png'

function Footer() {
    return (
        <footer className={styles.generalCont}>
            <div className={styles.ablCont}>
                <Image className={styles.abl} src={abl} alt='ableton' />
            </div>

            <div className={styles.contDos}>
                <div className={styles.smCont}>
                    <div className={styles.smLnkCont}>
                        <a href="https://www.ableton.com/en/account/add_license/">Register Live or Push {'>'}</a>
                        <a href="/about">About Ableton {'>'}</a>
                        <a href="https://www.ableton.com/en/jobs/">Jobs {'>'}</a>
                    </div>
                    <div className={styles.sm}>
                        <a className={styles.fbCont} href='https://www.facebook.com/ableton'><Image src={fb} className={styles.fb} alt='facebook' /></a>
                        <a className={styles.twCont} href='https://twitter.com/i/flow/login?redirect_after_login=%2Fableton'><Image src={tw} className={styles.tw} alt='twitter' /></a>
                        <a className={styles.ytCont} href='https://www.youtube.com/ableton'><Image src={yt} className={styles.yt} alt='youtube' /></a>
                        <a className={styles.igCont} href='https://www.instagram.com/ableton/'><Image src={ig} className={styles.ig} alt='instagram' /></a>
                    </div>
                </div>
                <div className={styles.eduCont}>
                    <div className={styles.eduLnkCont}>
                        <h1>Education</h1>
                        <a href="https://www.ableton.com/en/shop/education/"><p>Offers for students and teachers{'>'}</p></a>
                        <a href="https://www.ableton.com/en/classroom/"><p>Ableton for the Classroom{'>'}</p></a>
                        <a href="https://www.ableton.com/en/colleges-universities/"><p>Ableton for Colleges and Universities{'>'}</p></a>
                    </div>
                </div>
                <div className={styles.suCont}>
                    <h1>Sign up to our newsletter</h1>
                    <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                    <input type="text" placeholder='Email Address' className={styles.input} />
                    <button className={styles.btnSU}><a href='https://www.ableton.com/en/subscribe-to-newsletter/'>Sing up</a></button>
                </div>
            </div>


            <div className={styles.clCont}>

                <div className={styles.comCont}>
                    <div className={styles.conLnkCont}>
                        <h1>Community</h1>
                        <a href="https://www.ableton.com/en/shop/education/"><p>Find Ableton User Groups{'>'}</p></a>
                        <a href="https://www.ableton.com/en/classroom/"><p>Ableton for the Classroom{'>'}</p></a>
                        <a href="https://www.ableton.com/en/colleges-universities/"><p>Ableton for Colleges and Universities{'>'}</p></a>
                    </div>
                </div>

                <div className={styles.lanLocCont}>
                    <h1>Language and Location</h1>
                    <select name="" id="" className={styles.lanLocSel}>
                        <option value="">English</option>
                        <option value="">Deutsch</option>
                        <option value="">Français</option>
                        <option value="">日本語</option>
                        <option value="">简体中文</option>
                        <option value="">Español</option>
                    </select>

                    <select name="" id="" className={styles.lanLocSel}>
                        <option value="">Mexico</option>
                        <option value="">United States</option>
                        <option value="">United Kingdom</option>
                        <option value="">Germany</option>
                        <option value="">France</option>
                        <option value="">Canada</option>
                        <option value="">Japan</option>
                        <option value="">China</option>
                    </select>
                </div>

            </div>





            <div className={styles.conCont}>
                <div className={styles.linksCont}>
                    <a href="https://www.ableton.com/en/contact-us/">Contact Us</a> 
                    <a href="https://www.ableton.com/en/press/">Press Resources</a> 
                    <a href="https://www.ableton.com/en/legal/">Legal Info</a> 
                    <a href="https://www.ableton.com/en/privacy/">Privacy Policy</a> 
                    <a href="https://www.ableton.com/en/cookie-settings/">Cookie Settings</a> 
                    <a href="https://www.ableton.com/en/imprint/">Imprint</a>
                </div>

                <div className={styles.lgCont}>
                    <p>Made in Berlin</p>
                    <Image src={logo} className={styles.logo}></Image>
                </div>

            </div>

        </footer>
    )
}

export default Footer