import React, {useContext} from 'react';
import {NumberContext} from "./NumberProvider";

const BackButton = () => {
    const { DeleteSymbol } = useContext(NumberContext);
    return (
        <button className="btn delete" onClick={() => DeleteSymbol()}>
            &lt;
        </button>
    );
};

export default BackButton;