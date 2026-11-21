import styles from "../FeaturedBooks/FeaturedBooks.module.css";
import featured from "../../data/featured";

function FeaturedBooks() {
    return (
        <div className={styles.featuredBooks}>
            <h1>Featured Works</h1>

            <div className={styles.bookList}>
                {featured
            .filter((book) => book.isFeatured === true)
            .map((book) => (
                <div key={book.id} className={styles.bookCard}>
                    <img src={book.cover} alt={book.title} />

                    <div className={styles.bookInfo}>
                        <h2>{book.title}</h2>
                        <p className={styles.genre}>{book.genre}</p>
                        <p>{book.tagline}</p>
                        <p>By {book.author}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default FeaturedBooks;