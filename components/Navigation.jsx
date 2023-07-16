'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Navigation.module.css'
import '@/styles/Navbar.css'

function Navigation() {

    
    const [activeLink, setActiveLink] = useState("More +"); // Estado para almacenar el link activo

    const handleLinkClick = (link) => {
      setActiveLink(link); // Actualizar el link activo cuando se hace clic en un link
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-4" href="/about">
                        <Image src="/ableton.svg" alt="Logo" width={60} height={60} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor03"
                        aria-controls="navbarColor03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className={`${styles.navList} navbar-nav me-auto mx-2`}>
                            
                            <li >
                                <Link className={`nav-item ${activeLink === "Live" ? "active" : ""}`} href="/" onClick={() => handleLinkClick("Live")} >
                                    Live
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li >
                                <Link className={`nav-item ${activeLink === "Push" ? "active" : ""}`} href="/" onClick={() => handleLinkClick("Push")}>
                                    Push
                                </Link>
                            </li>
                            <li >
                                <Link className={`nav-item ${activeLink === "Note" ? "active" : ""}`} href="/" onClick={() => handleLinkClick("Note")}>
                                    Note
                                </Link>
                            </li>
                            <li >
                                <Link className={`nav-item ${activeLink === "Link" ? "active" : ""}`} href="/" onClick={() => handleLinkClick("Link")}>
                                    Link
                                </Link>
                            </li>
                            <li >
                                <Link className={`nav-item ${activeLink === "Shop" ? "active" : ""}`} href="/" onClick={() => handleLinkClick("Shop")}>
                                    Shop
                                </Link>
                            </li>
                            <li >
                                <Link className={`nav-item ${activeLink === "Packs" ? "active" : ""}`} href="/" onClick={() => handleLinkClick("Packs")}>
                                    Packs
                                </Link>
                            </li>
                            <li >
                                <Link className={`nav-item ${activeLink === "Help" ? "active" : ""}`} href="/" onClick={() => handleLinkClick("Help")}>
                                    Help
                                </Link>
                            </li>
                            <li >
                                <Link className={`nav-item ${activeLink === "More +" ? "active" : ""}`} href="/about" onClick={() => handleLinkClick("More +")}>
                                    More +
                                </Link>
                            </li>
                        </ul>

                        {/*Links a la derecha */}
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className={styles.blueL} href="/">
                                    Try Live for free
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={styles.logReg} href="/">
                                    Log in or register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
