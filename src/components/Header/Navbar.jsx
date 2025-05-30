// src/components/Navbar/Navbar.jsx
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
    const [isTop, setIsTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleRef = useRef(null);

    const onScroll = useCallback(() => {
        setIsTop(window.scrollY < 10);
    }, []);

    const onClickOutside = useCallback((e) => {
        if (menuOpen && toggleRef.current && !toggleRef.current.contains(e.target)) {
            setMenuOpen(false);
        }
    }, [menuOpen]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        document.addEventListener('click', onClickOutside);
        return () => {
            window.removeEventListener('scroll', onScroll);
            document.removeEventListener('click', onClickOutside);
        };
    }, [onScroll, onClickOutside]);

    const getNavbarClass = () => {
        if (menuOpen) {
            return isTop
                ? `${styles.transparentNavbar} ${styles.isTransparent}`
                : `${styles.darkNavbar} ${styles.isDark} ${styles.navbarDecrease}`;
        }
        return isTop
            ? `${styles.transparentNavbar} ${styles.isTransparent}`
            : `${styles.darkNavbar} ${styles.isDark} ${styles.navbarDecrease}`;
    };

    const handleToggle = () => setMenuOpen((open) => !open);

    return (
        <nav
            ref={toggleRef}
            className={`${styles.navbar} ${getNavbarClass()}`}
            aria-label="main navigation"
        >
            <div className={styles.navbarBrand}>
                <Link href="/" className={`${styles.navbarItem} ${styles.logoItem} ${menuOpen ? styles.isActive : ''}`}>
                    <img
                        src={isTop ? '/calm-text-white-logo.svg' : '/calm-text-logo.svg'}
                        width={64}
                        height={25}
                        alt="Deepak Kumar Jain"
                        className={styles.mobilelogo}
                    />
                </Link>
                <button
                    className={`${styles.burger} ${isTop ? styles.colorWhite : styles.colorBlack} ${menuOpen ? styles.isActive : ''}`}
                    aria-label="menu"
                    aria-expanded={menuOpen}
                    onClick={handleToggle}
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </button>
            </div>

            <div className={`${styles.navbarMenu} ${menuOpen ? styles.isActive : ''}`}>
                <div className={styles.navbarEnd} onClick={() => setMenuOpen(false)}>
                    <div className={styles.navbarItemLeft}>
                    <Link href="#" className={`${styles.navbarItem} ${styles.logoItem} ${styles.hideOnMobile}`}>
                        <img
                            src={isTop ? '/calm-logo.svg' : '/calm-text-logo.svg'}
                            width={112}
                            height={28}
                            alt="Deepak Kumar Jain"
                            className={styles.logo}
                        />
                    </Link>
                        <Link href="https://www.calm.com/sleep" className={styles.navbarItem}>
                            Sleep
                        </Link>
                        <Link href="https://www.calm.com/stress-anxiety" className={styles.navbarItem}>
                            Stress & Anxiety
                        </Link>
                        <Link href="https://www.calm.com/mindfulness" className={styles.navbarItem}>
                            Mindfulness
                        </Link>
                    </div>
                    <div className={styles.navbarItemRight}>
                        <Link href="https://screening.calm.com/" className={styles.navbarItem}>
                            Screening
                        </Link>
                        <Link href="https://health.calm.com/" className={styles.navbarItem}>
                            Calm Health
                        </Link>
                        <Link href="#" className={styles.navbarItem}>
                            Log In
                        </Link>

                        <Link
                        type="button"
                        href="#"
                        className={`${styles.navbarItemButton} ${styles.button} ${styles.isBorderWhite} ${styles.isInverted} ${!isTop ? styles.navbarItemButtonDark : null} ${styles.hideOnMobile}`}
                    >
                        Try Calm for Free
                    </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
