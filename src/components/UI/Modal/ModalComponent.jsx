import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import './ModalComponent.css';
import CartComponent from '../../Cart/CartComponent';
import CartContext from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';


const ModalComponent = (props) => {
    const modalRoot = document.getElementById('modal');
    const modalContainer = document.createElement('div');

    const navigate = useNavigate();

    const cartCtx = useContext(CartContext);

    useEffect(() => {
        modalRoot.appendChild(modalContainer);

        return () => {
            modalRoot.removeChild(modalContainer);
        };
    }, [modalContainer, modalRoot]);

    const handleOrder = () => {
        if (cartCtx.cartCount > 0) {
            cartCtx.clearCart();
            navigate('/order');
        }
    }


    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h2>Order Summary</h2>
                <CartComponent />
                <div className="buttons">
                    <button className="close-btn" onClick={() => props.handleModal(false)}>
                        Close
                    </button>
                    <button className="order-btn" onClick={handleOrder}>Order</button>
                </div>
            </div>
        </div>,
        modalContainer
    );
};

export default ModalComponent;
