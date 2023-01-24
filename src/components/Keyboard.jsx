import React from "react";
import ClearButton from "./buttons/ClearButton";
import NegativeButton from "./buttons/NegativeButton";
import FunctionButton from "./buttons/FunctionButton";
import NumberButton from "./buttons/NumberButton";
import EqualButton from "./buttons/EqualButton";

const Keyboard = () => {
    return (
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
                <FunctionButton buttonValue={'*'}/>
            </div>
            <div className="row">
                <NumberButton buttonValue={0}/>
                <NumberButton buttonValue={'.'}/>
                <EqualButton/>
                <FunctionButton buttonValue={'/'}/>
            </div>
        </div>
    );
}
export default Keyboard;