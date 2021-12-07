import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({ items: [], totalQuantity: 0, totalPrice: 0 });
    console.log(cart)

    const addItem = (item, quantity) => {
        const { price } = item;
        if (!isInCart(item.id)) {
            item.quantity = quantity
            setCart({
                items: [...cart.items, item],
                totalQuantity: cart.totalQuantity + quantity,
                totalPrice: cart.totalPrice + (quantity * price)
            })
        } else {
            const cartItem = cart.items.find(i => i.id === item.id);
            cartItem.quantity += quantity;
            setCart({
                items: [...cart.items],
                totalQuantity: cart.totalQuantity + quantity,
                totalPrice: cart.totalPrice + (quantity * price)
            })
        }
    }
    const removeItem = (itemId) => {
        setCart(cart.items.filter(item => item.id !== itemId));
    }
    const clear = () => {
        setCart({ items: [], totalQuantity: 0, totalPrice: 0 });
    }
    const isInCart = (itemId) => {
        return cart.items.some(item => item.id === itemId);
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}