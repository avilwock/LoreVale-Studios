import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("lorevale-cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("lorevale-cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(product) {
        setCart((currentCart) => {
            const existingProduct = currentCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return currentCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...currentCart, { ...product, quantity: 1 }];
        });
    }

    function removeFromCart(productId) {
        setCart((currentCart) =>
            currentCart.filter((item) => item.id !== productId)
        );
    }

    function updateQuantity(productId, quantity) {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCart((currentCart) =>
            currentCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            )
        );
    }

    const cartTotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;