import styles from "./ProductCard.module.css"

function ProductCard({ product }) {
    return (
        <div className={styles.productcard}>
            <div className={styles.productVisual}>
                <h2 className={styles.name}>{product.name}</h2>
                <img
                    className={styles.image}
                    src={product.image}
                    alt={product.name}
                />
            </div>

            <p className={styles.description}>
                {product.description}
            </p>

            <p className={styles.price}>{product.price}</p>
        </div>
    );
}

export default ProductCard;