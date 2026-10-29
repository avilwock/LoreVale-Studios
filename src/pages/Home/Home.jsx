
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

const featured = [
    {
        title: "Discover Stories",
        genre: "DARK FANTASY",
        tagline: "A compelling tagline about the story goes here.",
        author: "Author Name",
        cover: "src/assets/placeholder.jpeg",
        link: "#",
    },
    {
        title: "Explore New Worlds",
        genre: "FANTASY",
        tagline: "Step into a world filled with wonder and mystery.",
        author: "Author Name",
        cover: "src/assets/placeholder.jpeg",
        link: "#",
    },
    {
        title: "Create Something Wonderful",
        genre: "FICTION",
        tagline: "Discover a story waiting to be told.",
        author: "Author Name",
        cover: "src/assets/placeholder.jpeg",
        link: "#",
    },
];

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

                    <a
                        href={featured[activeBook].link}
                        className={styles.booklink}
                    >
                        Discover Book
                    </a>
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
