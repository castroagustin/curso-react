import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    console.log(cart)

    const addItem = (item, quantity) => {
        const { id, title, price } = item;
        if (!isInCart(item.id)) {
            setCart([...cart, { id, title, price, quantity }])
        } else {
            const cartItem = cart.find(i => i.id === item.id);
            cartItem.quantity += quantity;
        }
    }
    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    }
    const clear = () => {
        setCart([]);
    }
    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}