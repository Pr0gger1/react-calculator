import React, { useContext } from 'react';
import { NumberContext } from "./NumberProvider";

const NumberButton = ({ buttonValue }) => {
    const { SetDisplayValue } = useContext(NumberContext);
    return (
        <button className="btn number" onClick={() => SetDisplayValue(buttonValue)}>
            {buttonValue}
        </button>
    );
};

export default NumberButton;