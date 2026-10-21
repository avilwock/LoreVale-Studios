import styles from './Navbar.module.css'
import LoreValeMark from '../LoreValeMark/LoreValeMark'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const announcements = [
        {title: "Discover Stories"},
        {title: "Explore New Worlds"},
        {title: "Create Something Wonderful"},
    ];

function Navbar() {

    const [activeSlide, setActiveSlide] = useState(0);
    
    const links = [
        {name: "Home", path: "/"},
        {name: "Projects", path: "/projects"},
        {name: "Writing", path: "/writing"},
        {name: "About", path: "/about"},
        {name: "Contacts", path: "/contact"}
    ];

    

    useEffect(() => {
    const timer = setTimeout(() => {
        setActiveSlide(current =>
            (current + 1) % announcements.length
        );
    }, 5000);

    return () => clearTimeout(timer);
}, [activeSlide]);

   
return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <LoreValeMark />
        </div>

        <div className={styles.navContent}>
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

            <div
                className={styles.hero}
                aria-label="LoreVale announcements"
            >
                <div className={styles.announcement} aria-live="polite">
                    <h2 key={activeSlide}>
                        {announcements[activeSlide].title}
                    </h2>
                </div>

                <div
                    className={styles.announcementDots}
                    aria-label="Choose announcement"
                >
                    {announcements.map((announcement, index) => (
                        <button
                            key={announcement.title}
                            type="button"
                            className={
                                index === activeSlide ? styles.active : ""
                            }
                            onClick={() => setActiveSlide(index)}
                            aria-label={`Show announcement ${index + 1}`}
                            aria-pressed={index === activeSlide}
                        />
                    ))}
                </div>
            </div>
        </div>
    </nav>
);

}

export default Navbar;