import React from 'react'
import SubNavigation from '@/components/SubNavigation'
import styles from '@/styles/AboutPage.module.css'
import Image from 'next/image'
import firstImg from '@/assets/img/header.jpg'
function About() {


  return (

    <div className={styles.generalPage}>
      <SubNavigation/>
      <div className={styles.contAbout}>

        <div className={styles.firsCont}>
          <Image className={styles.firstImg} src={firstImg} ></Image>
          <p className={styles.titleAbl}>Ableton</p>
        </div>
        
        <div className={styles.secondImg}>
          
        
          </div>
      </div>

    </div>
  )
}

export default About