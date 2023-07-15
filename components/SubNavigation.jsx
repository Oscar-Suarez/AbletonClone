'use client'
import React, { useState } from "react";
import Link from 'next/link'
import styles from '@/styles/SubNav.module.css'
function SubNavigation() {

    const [activeLink, setActiveLink] = useState(""); // Estado para almacenar el link activo

    const handleLinkClick = (link) => {
      setActiveLink(link); // Actualizar el link activo cuando se hace clic en un link
    };

    return (

        <nav className={`${styles.navbar}`}>
            <ul className={`${styles.navbarNav}`}>

                <li className={`${styles.navItem} `}>
                    <Link href="/about" className={`${styles.navLink} ${activeLink === "About" ? "active" : ""}`} onClick={() => handleLinkClick("About")}>
                        About
                    </Link>
                </li>
                <li className={`${styles.navItem}`}>
                    <Link href="/about" className={`${styles.navLink} ${activeLink === "Jobs" ? "active" : ""}`} onClick={() => handleLinkClick("Jobs")}>
                        Jobs
                    </Link>
                </li>
                <li className={`${styles.navItem}`}>
                    <Link href="/about" className={`${styles.navLink} ${activeLink === "Appenticeships" ? "active" : ""}`} onClick={() => handleLinkClick("Appenticeships")}>
                        Appenticeships
                    </Link>
                </li>
            </ul>
        </nav>


    )
}

export default SubNavigation