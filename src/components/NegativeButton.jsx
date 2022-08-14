import React, {useContext} from 'react';
import {NumberContext} from "./NumberProvider";

const NegativeButton = () => {
    const { ToggleNegative } = useContext(NumberContext);
    return (
        <button className="btn operation" onClick={() => ToggleNegative()}>
            +/-
        </button>
    );
};

export default NegativeButton;