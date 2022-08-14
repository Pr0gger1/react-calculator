import React, {useContext} from 'react';
import {NumberContext} from "./NumberProvider";

const ClearButton = () => {
    const { ClearDisplay } = useContext(NumberContext);
    return (
        <button className="btn clear" onClick={() => ClearDisplay()}>
            C
        </button>
    );
};

export default ClearButton;