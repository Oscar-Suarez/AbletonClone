import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Navigation.module.css'
function Navigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid">
                    <Link class="navbar-brand mx-4" href="/about">
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
                        <ul className={`${styles.navLinks} navbar-nav me-auto mx-2`}>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    Live
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    Push
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    Note
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    Link
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    Packs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    Help
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/about">
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
