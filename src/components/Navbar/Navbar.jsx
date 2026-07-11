import styles from './Navbar.module.css'
import LoreValeMark from '../LoreValeMark/LoreValeMark'
import { Link } from "react-router-dom";

function Navbar() {
    const links = [
        {name: "Home", path: "/"},
        {name: "Projects", path: "/projects"},
        {name: "Writing", path: "/writing"},
        {name: "About", path: "/about"},
        {name: "Contacts", path: "/contact"}
    ];

    return (
        <nav className={styles.navbar}>
            <div className = {styles.logo}>
                <LoreValeMark />
            </div>
            <div className={styles.buttons}>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={styles.button}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;