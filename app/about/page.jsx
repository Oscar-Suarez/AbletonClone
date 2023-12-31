import React from 'react'
import SubNavigation from '@/components/SubNavigation'
import styles from '@/styles/AboutPage.module.css'
import Image from 'next/image'
import imgH from '@/assets/img/header.jpg'
import img1 from '@/assets/img/photo-1.jpg'
import img2 from '@/assets/img/photo-2.jpg'
import img3 from '@/assets/img/photo-3.jpg'
import img4 from '@/assets/img/photo-4.jpg'
import img5 from '@/assets/img/photo-5.jpg'
import prod from '@/assets/img/production.avif'
import img6 from '@/assets/img/photo-6.jpg'
import img7 from '@/assets/img/photo-7.jpg'
import img8 from '@/assets/img/photo-8.jpg'

function About() {

  return (

    <div className={styles.generalPage}>
      <SubNavigation/>
      <div className={styles.contAbout}>

        <div className={styles.contUno}>
          <Image className={styles.imgH} src={imgH} alt='Ableton' />
          <p className={styles.titleAbl}>Ableton</p>
        </div>
        
        <div className={styles.contDos}>
          <h1>
          We make <a href="https://www.ableton.com/en/live/">Live</a>, <a href="https://www.ableton.com/en/push/">Push</a> and <a href="https://www.ableton.com/en/link/">Link</a> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
          </h1>
          <p>
          Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
          </p>
        </div>

        <div className={styles.contTres}>
          <div className={styles.contYellow}>
            <Image className={styles.img2} src={img2} alt='Ableton'/>
          </div>
          <div className={styles.contWhite}>
          <Image className={styles.img1} src={img1} alt='Ableton'/>
          </div>
        </div>

        <div className={styles.contCtro}>
          <h1>
          Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.
          </h1>
          <p>
          We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
          </p>
        </div>

        <div className={styles.contCnco}>
        <iframe  src="https://www.youtube.com/embed/9SbnhgjeyXA"   className={styles.ffthVideo}></iframe>
        <p>Why Ableton - Juanpe Bolivar</p>
        </div>

        <div className={styles.contSeis}>
          <h1>
          We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
          </h1>
          <p>
          Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
          </p>
        </div>

        <div className={styles.contSte}>
          <div className={styles.contGreen}>
            <Image className={styles.img3} src={img3} alt='Ableton'/>
            <Image className={styles.img4} src={img4} alt='Ableton'/>
          </div>
          <div className={styles.contWhite2}>
          <Image className={styles.img5} src={img5} alt='Ableton'/>
          </div>
        </div>

        <div className={styles.contOcho}>
          <h1>
          We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
          </h1>
          <p>
          Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
          </p>
        </div>

      <div className={styles.contNve}>
        <Image className={styles.prod} src={prod} alt='Ableton'/>
      </div>

      <div className={styles.contDiez}>
          <h1>
          We’re passionate about what we do, but we’re equally passionate about improving who we are.
          </h1>
          <p>
          We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
          </p>
          <p>
          Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
          </p>
      </div>

    <div className={styles.contOnce}>
      <div className={styles.contPrple}></div>
      <div className={styles.contImg67}>
        <Image className={styles.img6} src={img6} alt='Ableton'/>
        <Image className={styles.img7} src={img7} alt='Ableton'/>
      </div>
    </div>

    <div className={styles.contDoce}>
          <h1>
          We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
          </h1>
          <p>
          If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
          </p>
      </div>
      
    <div className={styles.contTrece}>
      <div className={styles.contBlue}>
        <div className={styles.contPTrece}>
        <h1>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h1>
        <a href="https://www.ableton.com/en/jobs/">See latest jobs {'>'}</a>
        </div>
      </div>
      <div className={styles.contImg8}>
        <Image className={styles.img8} src={img8} alt='Ableton'/>
      </div>
    </div>

      </div>

    </div>
  )
}

export default About