import styles from "./Hero.module.css";
import Badge from "./Badge/Badge";
import profilePic from '../assets/profile.jpg';
import React, { useState, useEffect, useRef } from "react";
import { HiDownload, HiCalendar, HiArrowRight } from "react-icons/hi";
import { MdCode, MdCall } from "react-icons/md";
import { DiJava } from "react-icons/di";
import { FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import Typed from "typed.js";

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer",
        "Creative Thinker",
        "Full Stack Developer",
        "UI/UX Designer",
        "Graphic Designer",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  });
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <span className={styles.greeting}>Hello, I'm</span>

        <h1>
          Nethum <span className={styles.highlight}>Nenula</span>
        </h1>

        <div className={styles.titles}>
          <span className={styles.title}>I am a</span>
          <span className={styles.typedText} ref={typedRef}></span>
        </div>

        <p className={styles.description}>
          Building modern, responsive web applications, UI/UX designs that solve real problems
          and create meaningful experiences.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>
            <HiDownload /> View CV
          </button>
          <button className={styles.secondaryBtn}>
            <MdCall /> Call Me
          </button>
          <button className={styles.outlineBtn}>
            See My Work <HiArrowRight />
          </button>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <div className={styles.profileImage}>
            <img src={profilePic} alt="Nethum Nenula" />
          </div>
        </div>

        <div className={styles.badgeContainer}>
            <Badge
          name="Full Stack Developer"
          techItem1="React"
          techItem2="Node.js"
          techItem3="Express.Js"
          icon={MdCode}
          position="bottom-left"
        />

        <Badge
          name="Object Oriented Programming"
          techItem1="Java"
          techItem2="Python"
          techItem3="C++"
          icon={DiJava}
          position="top-right"
        />

        <Badge
          name="UI/UX Designer"
          techItem1="Figma"
          techItem2="Adobe XD"
          icon={FaPaintBrush}
          position="custom1"
        />
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
