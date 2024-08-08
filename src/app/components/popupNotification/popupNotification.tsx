/* 
This is a popup notification component you can use to display some message to the user.
USECASE: 
import PopupNotification from "path";
    <PopupNotification 
        message="message to display to the user"
        onclick={onClose}
    />

*/
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