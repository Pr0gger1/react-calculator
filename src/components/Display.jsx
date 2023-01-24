import React, {useContext} from 'react';
import BackButton from "./buttons/BackButton";
import {NumberContext} from "./NumberProvider";

const Display = () => {
    const { number, storedNumber, operation } = useContext(NumberContext);
    return (
        <div className="screen">
            <div className="display__expression">
                <span className="operation__screen">{
                    !storedNumber ? 'Enter a problem' : `${storedNumber} ${operation} ${number}`
                } </span>
            </div>
            <div className="display__result">
                <BackButton/>
                <input type="text"
                       id="screen"
                       value={ !number.length && !storedNumber ? '0' : number.toString() || storedNumber.toString()}
                       onChange={event => event.target.value}/>
            </div>
        </div>
    );
};

export default Display;