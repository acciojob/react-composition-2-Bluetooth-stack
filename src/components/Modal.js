import React from "react";



const Modal = ({ show }) => {

    function toggle() {
        show(false);
    }

    return (
        <div className="model-overlay">
            <div className="modal">
                <button className="model-close" onClick={toggle}>Close</button>
                <p>This is the content of the modal.</p>
            </div>
        </div>
    )
}

export default Modal;