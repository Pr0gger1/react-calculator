import React, {useContext} from 'react';
import {NumberContext} from "./NumberProvider";

const FunctionButton = ({ buttonValue }) => {
    const { SetOperationType } = useContext(NumberContext);
    return (
        <button className="btn operation" onClick={() => SetOperationType(buttonValue)}>
            {buttonValue}
        </button>
    );
};

export default FunctionButton;