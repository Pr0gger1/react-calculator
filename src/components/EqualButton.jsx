import React, {useContext} from 'react';
import {NumberContext} from "./NumberProvider";

const EqualButton = () => {
    const { SolveProblem } = useContext(NumberContext);
    return (
        <button className="btn equal" onClick={() => SolveProblem()}>
            =
        </button>
    );
};

export default EqualButton;