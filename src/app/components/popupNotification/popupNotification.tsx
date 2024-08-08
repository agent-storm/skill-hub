import React from 'react';
import './PopupNotification.css'; // Import the CSS file for styling

interface PopupNotificationProps {
    message: string;
    onClose: () => void;
}

const PopupNotification: React.FC<PopupNotificationProps> = ({ message, onClose }) => {
    return (
        <button className="popup-container" onClick={onClose}>
            <div className="popup-content">
                <span>{message}</span>
            </div>
        </button>
    );
};

export default PopupNotification;