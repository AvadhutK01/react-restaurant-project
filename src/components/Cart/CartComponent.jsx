import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";

const CartComponent = () => {

    const cartCtx = useContext(CartContext);

    const meals = cartCtx.cart;

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(meals.reduce((total, meal) => total + meal.amount, 0));
    }, [meals])

    const incrementQuantity = (Id) => {
        cartCtx.updateQuantityHandler(Id, '+');
    }

    const decrementQuantity = (Id) => {
        cartCtx.updateQuantityHandler(Id, '-');
    }

    return (
        <>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.Id}>
                        <div className='ms-5'>{meal.quantity}x {meal.name}</div>
                        <div className="custom-number-input h-10 w-32 mx-1">
                            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button data-action="decrement" onClick={() => decrementQuantity(meal.Id)} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                </button>
                                <button data-action="increment" onClick={() => incrementQuantity(meal.Id)} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className='mx-5'>र{meal.amount}</div>
                    </li>
                ))}
            </ul>
            <div className="total">Total: र{totalAmount}</div>
        </>
    )
}

export default CartComponent