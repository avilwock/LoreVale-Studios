import styles from './Navbar.module.css'

function Navbar() {
    const links = [
        {name: "Home", path: "/"},
        {name: "Projects", path: "projects"},
        {name: "Writing", path: "writing"},
        {name: "About", path: "about"},
        {name: "Contacts", path: "contact"}
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                LoreVale 
                <hr></hr>Studios
            </div>

            <div className={styles.buttons}>
                {links.map((link) => (
                    <a 
                    key={link.name}
                    href={link.path}
                    className= {styles.button}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;