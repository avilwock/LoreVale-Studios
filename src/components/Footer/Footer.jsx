import styles from './Footer.module.css'
import LoreValeMark from '../LoreValeMark/LoreValeMark'
import { Link } from "react-router-dom";


function Footer () {

    const links = [
        {name: "Featured Books", path: "/featuredbooks"},
        {name: "About", path: "/about"},
        {name: "Contacts", path: "/contact"}
    ];

return (
    <div className ={styles.footer}>
        <div className = {styles.container}>
            <LoreValeMark size="small" className={styles.mark}/>
        
        <ul className={styles.list}>
            {links.map((link) => (
                <li key={link.name}>
                    <Link
                        to={link.path}
                        className={styles.link}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    </div>
    )
}

export default Footer