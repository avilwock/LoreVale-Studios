import styles from "./ProductCard.module.css"
import {useCart} from "../../context/useCart/useCart"

function ProductCard({ product }) {

    const { addToCart } = useCart();

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
            <div>       
                <p className={styles.price}>
                    ${product.price.toFixed(2)}
                </p>
            

                <button className={styles.addbutton} onClick={() => addToCart(product)}>
                Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;