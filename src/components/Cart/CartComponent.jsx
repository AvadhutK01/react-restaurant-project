import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartComponent = () => {

    const cartCtx = useContext(CartContext);

    const meals = cartCtx.cart;

    const totalAmount = meals.reduce((total, meal) => total + meal.amount, 0);

    return (
        <>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.Id}>
                        <div className='ms-5'>{meal.quantity}x {meal.name}</div>
                        <div className='mx-5'>र{meal.amount}</div>
                    </li>
                ))}
            </ul>
            <div className="total">Total: र{totalAmount}</div>
        </>
    )
}

export default CartComponent