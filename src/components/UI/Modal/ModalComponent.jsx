import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ModalComponent.css';

const ModalComponent = () => {
    const meals = [
        { name: 'Butter Chicken', quantity: 2, amount: 500 },
        { name: 'Paneer Tikka', quantity: 1, amount: 210 },
    ];

    const totalAmount = meals.reduce((total, meal) => total + meal.amount, 0);

    const modalRoot = document.getElementById('modal');
    const modalContainer = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(modalContainer);

        return () => {
            modalRoot.removeChild(modalContainer);
        };
    }, [modalContainer, modalRoot]);

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h2>Order Summary</h2>
                <ul>
                    {meals.map((meal, index) => (
                        <li key={index}>
                            {meal.quantity}x {meal.name} - र{meal.amount}
                        </li>
                    ))}
                </ul>
                <div className="total">Total: र{totalAmount}</div>
                <div className="buttons">
                    <button className="close-btn">
                        Close
                    </button>
                    <button className="order-btn">Order</button>
                </div>
            </div>
        </div>,
        modalContainer
    );
};

export default ModalComponent;
