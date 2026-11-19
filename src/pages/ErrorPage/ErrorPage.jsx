
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
    return (
        <main className={styles.errorContainer}>
            <div className={styles.errorContent}>
                <h1>404</h1>
                <h2>Looks like this chapter is missing</h2>

                <p>
                    The page you're looking for doesn't exist
                    or may have been moved.
                </p>

                <Link to="/" className={styles.errorButton}>
                    Return Home
                </Link>
            </div>
        </main>
    );
}

export default ErrorPage;
