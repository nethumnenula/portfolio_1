import styles from './Header.module.css'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
        <header className={`${styles.headerContainer} ${open ? styles.menuOpen : ''}`}>

      {/* Left — Logo */}
      <div className={styles.leftSection}>
        <h1>Nethum Nenula</h1>
      </div>

      {/* Center — Desktop Nav */}
      <nav className={styles.navButtons}>
        <ul>
          <li><a href="#" className={styles.active}>Home</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">Skills </a></li>
          <li><a href="#">Projects </a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Right — Socials */}
      <div className={styles.rightSection}>
        <div className={styles.profileButtons}>
          <ul>
            <li>
              <a href="#"><FaGithub className={styles.icon} /><span className={styles.profileIconName}>GitHub</span></a>
            </li>
            <li>
              <a href="#"><FaLinkedin className={styles.icon} /><span className={styles.profileIconName}>LinkedIn</span></a>
            </li>
            <li>
              <a href="#"><FaInstagram className={styles.icon} /><span className={styles.profileIconName}>Instagram</span></a>
            </li>
          </ul>
        </div>
      </div>

      {/* Morphing Hamburger */}
      <button
        className={`${styles.menuBtn} ${open ? styles.opened : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      

    </header>
    {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.show : ''}`}>
        <ul className={styles.mobileNav}>
          <li><a href="#" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#" onClick={() => setOpen(false)}>Portfolio</a></li>
          <li><a href="#" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
        <ul className={styles.mobileSocials}>
          <li><a href="#"><FaGithub /> GitHub</a></li>
          <li><a href="#"><FaLinkedin /> LinkedIn</a></li>
          <li><a href="#"><FaInstagram /> Instagram</a></li>
        </ul>
      </div>
    </div>
    
  )
}

export default Header