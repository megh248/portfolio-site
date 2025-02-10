import React from 'react';
import styles from './about.module.scss';

export default function AboutPage() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src="/assets/images/developer-illustration.svg"
            alt="Developer Illustration"
            width={500}
            height={500}
            className={styles.illustration}
          />
        </div>
        <div className={styles.textContent}>
          <p className={styles.sectionTitle}>About</p>
          <h2 className={styles.heading}>About Me?</h2>
          <p className={styles.description}>
            Experienced and results-driven Front-End Developer with expertise in React.js, Flutter, and modern web technologies. 
            Adept at creating efficient, modular, and user-friendly applications with a strong focus on performance optimization and clean code. 
            Proficient in integrating RESTful APIs, enhancing workflows, and delivering scalable solutions tailored to business needs. 
            Highly collaborative and committed to continuous learning to stay updated with the latest trends in web development and software engineering.
          </p>
          <p className={styles.description}>
            Throughout my career, I have worked extensively with:
            <br />• React JS - Building responsive and interactive user interfaces
            <br />• Flutter - Developing cross-platform mobile applications
            <br />• JavaScript/TypeScript - Writing clean, maintainable code
            <br />• HTML/SCSS - Creating beautiful, modern layouts
            <br />• Socket Programming - Implementing real-time features
            <br />• Git - Managing version control and collaborating with teams
          </p>
        </div>
      </div>
    </div>
  );
};
