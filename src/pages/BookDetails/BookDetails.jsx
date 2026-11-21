import { useParams } from "react-router-dom";
import featured from "../../data/featured";

function BookDetails() {
    const { bookId } = useParams();

    const book = featured.find(
        (item) => item.id === Number(bookId)
    );

    if (!book) {
        return <h1>Book not found</h1>;
    }

    return (
        <div>
            <img src={book.cover} alt={book.title} />

            <h1>{book.title}</h1>
            <p>{book.genre}</p>
            <p>{book.tagline}</p>
            <p>By {book.author}</p>
        </div>
    );
}

export default BookDetails;