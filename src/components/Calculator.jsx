import React from 'react';
import Display from "./Display";
import FunctionButton from "./FunctionButton";
import ClearButton from "./ClearButton";
import NumberButton from "./NumberButton";
import EqualButton from "./EqualButton";
import NegativeButton from "./NegativeButton";

const Calculator = () => {
    return (
        <div className="content">
            <div className="container">
                <Display/>
                <div className="buttons">
                    <div className="row">
                        <ClearButton/>
                        <NegativeButton/>
                        <FunctionButton buttonValue='√'/>
                        <FunctionButton buttonValue='^'/>
                    </div>
                    <div className="row">
                        <NumberButton buttonValue={7}/>
                        <NumberButton buttonValue={8}/>
                        <NumberButton buttonValue={9}/>
                        <FunctionButton buttonValue={'+'}/>
                    </div>
                    <div className="row">
                        <NumberButton buttonValue={4}/>
                        <NumberButton buttonValue={5}/>
                        <NumberButton buttonValue={6}/>
                        <FunctionButton buttonValue={'-'}/>
                    </div>
                    <div className="row">
                        <NumberButton buttonValue={1}/>
                        <NumberButton buttonValue={2}/>
                        <NumberButton buttonValue={3}/>
                        <FunctionButton buttonValue={'x'}/>
                    </div>
                    <div className="row">
                        <NumberButton buttonValue={0}/>
                        <NumberButton buttonValue={'.'}/>
                        <EqualButton/>
                        <FunctionButton buttonValue={'/'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;