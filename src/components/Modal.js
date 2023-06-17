import React, { useEffect, useRef } from "react";



const Modal = ({ show }) => {
    
    document.addEventListener("click", show)

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={() => { show() }}>Close</button>
                <p>This is the content of the modal.</p>
            </div>
        </div>
    )
}

export default Modal;