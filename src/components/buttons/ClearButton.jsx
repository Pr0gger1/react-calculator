import React, {useContext} from 'react';
import {NumberContext} from "../NumberProvider";

const ClearButton = () => {
    const { clearDisplay } = useContext(NumberContext);
    return (
        <button className="btn clear" onClick={() => clearDisplay()} >
            C
        </button>
    );
};

export default ClearButton;