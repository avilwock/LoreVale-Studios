import styles from "./LoreValeMark.module.css"

function LoreValeMark({ size = "", className = "" }) {
    return (
        <div className={`${styles.logo} ${styles[size]} ${className}`}>
            <span>LoreVale</span>
            <span className={styles.divider}></span>
            <span>Studios</span>
        </div>
    )
}

export default LoreValeMark