import React, {useContext} from 'react';
import {NumberContext} from "../NumberProvider";

const NegativeButton = () => {
    const { toggleNegative } = useContext(NumberContext);
    return (
        <button className="btn operation" onClick={() => toggleNegative()}>
            +/-
        </button>
    );
};

export default NegativeButton;