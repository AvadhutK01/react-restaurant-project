import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ModalComponent.css';
import CartComponent from '../../Cart/CartComponent';


const ModalComponent = (props) => {
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
                <CartComponent />
                <div className="buttons">
                    <button className="close-btn" onClick={() => props.handleModal(false)}>
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
