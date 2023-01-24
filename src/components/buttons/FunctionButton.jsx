import React, {useContext} from 'react';
import {NumberContext} from "../NumberProvider";

const FunctionButton = ({ buttonValue }) => {
    const { setOperationType } = useContext(NumberContext);
    return (
        <button className="btn operation" onClick={() => setOperationType(buttonValue)}>
            {buttonValue}
        </button>
    );
};

export default FunctionButton;