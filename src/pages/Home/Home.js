'use client';
import React from 'react';
import styles from './home.module.scss';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className={styles.container} id="home">
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <p className={styles.greeting}>Hi there, I am</p>
                    <h1 className={styles.name}>Megh Buch</h1>
                    <div className={styles.buttonContainer}>
                        <Link href="/resume.pdf" className={`${styles.button} ${styles.primary}`}>
                            Download CV
                        </Link>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/assets/images/profile.jpg"
                            alt="Megh Buch"
                            width={400}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
