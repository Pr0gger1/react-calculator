import React, { useContext } from 'react';
import { NumberContext } from "../NumberProvider";

const NumberButton = ({ buttonValue }) => {
    const { setDisplayValue } = useContext(NumberContext);
    return (
        <button className="btn number" onClick={() => setDisplayValue(buttonValue)}>
            {buttonValue}
        </button>
    );
};

export default NumberButton;