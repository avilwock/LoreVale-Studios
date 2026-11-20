import { useContext } from "react";
import CartContext from "../CartContext/CartContext";

export function useCart() {
    return useContext(CartContext);
}