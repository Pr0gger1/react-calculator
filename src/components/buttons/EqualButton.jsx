import React, {useContext} from 'react';
import {NumberContext} from "../NumberProvider";

const EqualButton = () => {
    const { solveProblem } = useContext(NumberContext);
    return (
        <button className="btn equal" onClick={() => solveProblem()}> = </button>
    );
};

export default EqualButton;