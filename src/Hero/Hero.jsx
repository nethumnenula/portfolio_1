import styles from './Hero.module.css'

import React, {useState} from 'react'
import { HiDownload, HiCalendar, HiArrowRight } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Hero(){
    return(
        <section className={styles.hero}>
            <div className={styles.content}>
                
                <span className={styles.greeting}>Hello, I'm</span>
                
                
                <h1>Nethum <span className={styles.highlight}>Nenula</span></h1>
                
                
                <div className={styles.titles}>
                    <span className={styles.title}>Web Developer</span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.title}>Creative Thinker</span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.title}>Problem Solver</span>
                </div>
                
                
                
                
                <p className={styles.description}>
                    Building modern, responsive web applications 
                    that solve real problems and create meaningful experiences.
                </p>
                
                
                <div className={styles.buttons}>
                    <button className={styles.primaryBtn}>
                        <HiDownload /> View CV
                    </button>
                    <button className={styles.secondaryBtn}>
                        <HiCalendar /> Book a Call
                    </button>
                    <button className={styles.outlineBtn}>
                        See My Work <HiArrowRight />
                    </button>
                </div>
            </div>
            
            
            <div className={styles.imageContainer}>
                <div className={styles.profileImage}>
                    
                    <img src="/profile.jpg" alt="Nethum Nenula" />
                </div>
                <div className={styles.floatingBadge}>
                    <span>✨ 2+ Years</span>
                </div>
            </div>
        </section>
    );
}

export default Hero