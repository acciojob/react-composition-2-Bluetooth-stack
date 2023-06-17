import React, { useEffect, useRef } from "react";



const Modal = ({ show }) => {
    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                show();
            }
        }
        document.addEventListener("click", show)
        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [show])

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