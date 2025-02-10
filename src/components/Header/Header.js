/* eslint-disable jsx-a11y/anchor-is-valid */
'use client';
import { useState } from 'react';
import styles from './header.module.scss';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false); // Close mobile menu if open
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navContainer}>
                    {/* Logo/Brand */}
                    <a onClick={() => scrollToSection('home')} className={styles.logo} style={{ cursor: 'pointer' }}>
                        Megh Buch
                    </a>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        <a onClick={() => scrollToSection('home')} className={styles.navLink} style={{ cursor: 'pointer' }}>
                            Home
                        </a>
                        <a onClick={() => scrollToSection('about')} className={styles.navLink} style={{ cursor: 'pointer' }}>
                            About
                        </a>
                        <a onClick={() => scrollToSection('skills')} className={styles.navLink} style={{ cursor: 'pointer' }}>
                            Skills
                        </a>
                        <a onClick={() => scrollToSection('projects')} className={styles.navLink} style={{ cursor: 'pointer' }}>
                            Projects
                        </a>
                        <a onClick={() => scrollToSection('contact')} className={styles.navLink} style={{ cursor: 'pointer' }}>
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.menuButton}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
                    <a onClick={() => scrollToSection('home')} className={styles.mobileNavLink} style={{ cursor: 'pointer' }}>
                        Home
                    </a>
                    <a onClick={() => scrollToSection('about')} className={styles.mobileNavLink} style={{ cursor: 'pointer' }}>
                        About
                    </a>
                    <a onClick={() => scrollToSection('projects')} className={styles.mobileNavLink} style={{ cursor: 'pointer' }}>
                        Projects
                    </a>
                    <a onClick={() => scrollToSection('skills')} className={styles.mobileNavLink} style={{ cursor: 'pointer' }}>
                        Skills
                    </a>
                    <a onClick={() => scrollToSection('contact')} className={styles.mobileNavLink} style={{ cursor: 'pointer' }}>
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
};

