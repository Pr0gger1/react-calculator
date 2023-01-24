import React, {useContext} from 'react';
import {NumberContext} from "../NumberProvider";

const BackButton = () => {
    const { deleteSymbol } = useContext(NumberContext);
    return (
        <button className="btn delete" onClick={() => deleteSymbol()}>
            &lt;
        </button>
    );
};

export default BackButton;