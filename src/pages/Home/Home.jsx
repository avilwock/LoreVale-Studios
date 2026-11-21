
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import featured from "../../data/featured";
import { Link } from "react-router-dom";




function SlideBar() {
    const [activeBook, setActiveBook] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveBook((current) =>
                (current + 1) % featured.length
            );
        }, 5000);

        return () => clearTimeout(timer);
    }, [activeBook]);

    return (
        <div className={styles.hero}>
          <h2>Featured Releases</h2>
            <Link
                to={`/featuredbooks`}
                className={styles.booklink}
            >
                Featured Books
            </Link>
           
            <section className={styles.bookslide}>
                <div className={styles.bookcover}>
                    <img
                        src={featured[activeBook].cover}
                        alt="Featured book cover"
                    />
                </div>
               

                <div className={styles.bookinfo}>
                    <p className={styles.genre}>
                        {featured[activeBook].genre}
                    </p>

                    <h3 key={activeBook}>
                        {featured[activeBook].title}
                    </h3>

                    <p className={styles.tagline}>
                        {featured[activeBook].tagline}
                    </p>

                    <p className={styles.author}>
                        By {featured[activeBook].author}
                    </p>

                    <Link
                        to={`/books/${featured[activeBook].id}`}
                        className={styles.booklink}
                        >
                            Discover Book
                        </Link>
                </div>
            </section>

            <div className={styles.slideControls}>
    <button
        type="button"
        className={styles.prevButton}
        onClick={() =>
            setActiveBook((current) =>
                (current - 1 + featured.length) % featured.length
            )
        }
        aria-label="Previous featured book"
    >
        &#10094;
    </button>

    <div className={styles.announcementDots}
        aria-label="Choose featured slide"
    >
        {featured.map((book, index) => (
            <button
                key={book.title}
                type="button"
                className={
                    index === activeBook ? styles.active : ""
                }
                onClick={() => setActiveBook(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={index === activeBook}
            />
        ))}
    </div>

    <button
        type="button"
        className={styles.nextButton}
        onClick={() =>
            setActiveBook((current) =>
                (current + 1) % featured.length
            )
        }
        aria-label="Next featured book"
    >
        &#10095;
    </button>
</div>
        </div>
    );
}

function Home() {
    return (
        <div>
          <SlideBar />
            <div className={styles.home}>
                <h1>Welcome to LoreVale Studios</h1>
                <p>
                    A home for stories across worlds, mysteries, and imagination.
                </p>
            </div>

            

            <h2>Featured Authors</h2>
        </div>
    );
}

export default Home;
