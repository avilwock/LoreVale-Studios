import styles from "./Cart.module.css";
import { useCart } from "../../context/useCart/useCart";

function Cart() {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <div className={styles.cart}>
            <h1>Your Shopping Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is currently empty.</p>
            ) : (
                <>
                    <div className={styles.cartItems}>
                        {cart.map((item) => (
                            <div key={item.id} className={styles.cartItem}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className={styles.image}
                                />

                                <div className={styles.itemDetails}>
                                    <h2>{item.name}</h2>
                                    <p>${item.price.toFixed(2)}</p>

                                    <div className={styles.quantity}>
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.quantity - 1)
                                            }
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.quantity + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        className={styles.remove}
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>

                                <p className={styles.itemTotal}>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cartSummary}>
                        <h2>Order Summary</h2>
                        <p>
                            Subtotal: ${cartTotal.toFixed(2)}
                        </p>
                        <p>Shipping calculated at checkout.</p>

                        <button className={styles.checkout}>
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;