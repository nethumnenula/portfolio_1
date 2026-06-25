import styles from "./Header.module.css";
import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftSection}>
        <h1>Nethum Nenula</h1>

        <div className={`${styles.navButtons} ${open ? styles.show : ""}`}>
          <ul>
            <li>
              <a href="#" className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.rightSection} ${open ? styles.show : ""}`}>
        <div className={styles.profileButtons}>
          <ul>
            <li>
              <a href="#">
                <FaGithub className={styles.icon} />
                <span>GitHub</span>
              </a>
            </li>

            <li>
              <a href="#">
                <FaLinkedin className={styles.icon} />
                <span>LinkedIn</span>
              </a>
            </li>

            <li>
              <a href="#">
                <FaInstagram className={styles.icon} />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger */}

      <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
}

export default Header;
