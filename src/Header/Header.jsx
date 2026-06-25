import styles from './Header.module.css'
function Header(){
    return(
        <div className={styles.headerContainer}>
            <h1>Nethum Nenula</h1>
            <div className={styles.navButtons}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className={styles.profileButtons}>
                <ul>
                    <li><a href="">GitHub</a></li>
                    <li><a href="">Linked In</a></li>
                    <li><a href="">Instagram</a></li>
                </ul>
            </div>

        </div>
    );
}

export default Header