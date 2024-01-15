import React, { useState, useContext } from 'react';
import CartContext from '../../../context/CartContext';

const MealItemComponent = ({ meal }) => {

    const ctx = useContext(CartContext);

    const handleAddToCart = (meal) => {
        if (quantity > 0) {
            const order = {
                Id: meal.Id,
                name: meal.name,
                amount: meal.price,
                quantity: quantity
            }
            ctx.addToCartHandler(order);
        }
        setQuantity(0);
    }

    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1)
    }
    const decrementQuantity = () => {
        setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <div className="meal-item">
            <div className="meal-header">
                <h3>{meal.name}</h3>
                <p className="price">र{meal.price}</p>
            </div>
            <img src={meal.image} alt={meal.name} className="meal-image" />
            <p className="description">{meal.description}</p>
            <div className='flex items-center justify-center mb-4'>
                <div className="custom-number-input h-10 w-32 mx-1">
                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button data-action="decrement" onClick={decrementQuantity} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                            <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input type="number" className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none" name="custom-input-number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        <button data-action="increment" onClick={incrementQuantity} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                            <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>
                <button type="button" className="add-to-cart" onClick={() => handleAddToCart(meal)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default MealItemComponent