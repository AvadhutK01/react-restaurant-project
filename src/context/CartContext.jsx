import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
    cart: [],
    addToCartHandler: (item) => { },
    updateQuantityHandler: (Id, Mode) => { },
    clearCart: () => { },
    cartCount: 0
});

export const CartContextProvider = (props) => {
    const [cartCount, setCartCount] = useState(0);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("Foodcart")) || []);

    useEffect(() => {
        setCartCount(cart.length);
        localStorage.setItem("Foodcart", JSON.stringify(cart));
    }, [cart]);

    const addToCartHandler = (item) => {
        const existingItem = cart.findIndex((cartItem) => cartItem.Id === item.Id);

        if (existingItem !== -1) {
            setCart((prev) => {
                const updatedCart = [...prev];
                updatedCart[existingItem].quantity += item.quantity;
                updatedCart[existingItem].amount += item.amount * item.quantity;
                return updatedCart;
            });
        } else {
            setCart((prev) => [
                ...prev,
                {
                    Id: item.Id,
                    quantity: item.quantity,
                    name: item.name,
                    amount: item.amount * item.quantity,
                },
            ]);
        }
    }

    const updateQuantityHandler = (Id, mode) => {
        setCart(cart.map((item) => {
            if (item.Id === Id) {
                let newQty = (mode === '+') ? item.quantity + 1 : item.quantity - 1;
                if (newQty > 0) {
                    return {
                        ...item,
                        'quantity': newQty,
                        'amount': (item.amount / item.quantity) * newQty
                    };
                } else {

                    return null;
                }
            }
            return item;
        }).filter(Boolean));
    };

    const clearCart = () => {
        setCart([])
    }

    return <CartContext.Provider value={{ cartCount: cartCount, cart: cart, addToCartHandler: addToCartHandler, updateQuantityHandler: updateQuantityHandler, clearCart: clearCart }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;