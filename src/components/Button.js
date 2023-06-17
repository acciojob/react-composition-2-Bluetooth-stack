import React, { useState } from "react";
import Modal from "./Modal";

const Button = () => {
    const [show, setShow] = useState(false);

    function showChange() {
        setShow(false);
    }

    return (
        <div>
            <button onClick={() => {setShow(true)}}>Show Modal</button>
            {
                show &&
                <Modal show={() => { showChange() }}></Modal>
            }
        </div>
    )
}

export default Button;