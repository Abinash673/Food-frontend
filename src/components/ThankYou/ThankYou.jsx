import React from 'react';
import './ThankYou.css';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
    const navigate = useNavigate();

    const handleOkClick = () => {
        navigate('/');
    }

    return (
        <div className="thank-you-container">
            <h1>Thank You!</h1>
            <p>Your order has been placed successfully.</p>
            <button onClick={handleOkClick}>OK</button>
        </div>
    );
}

export default ThankYou;
