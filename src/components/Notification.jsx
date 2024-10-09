import './Notification.css';

const Notification = ({ message, type }) => {
    return (
        <div className={`notification-container ${type}`}>
            <div className="notification-content">
                {message}
            </div>
        </div>
    );
}

export default Notification;
