import React, { useState } from "react";
import Modal from "./Modal";

const Button = () => {
    const [show, setShow] = useState(false);

    function showChange() {
        setShow(true);
    }

    return (
        <div>
            <button onClick={showChange}>Show Modal</button>
            {
                show &&
                <Modal show={setShow} togleprp={show}></Modal>
            }
        </div>
    )
}

export default Button;