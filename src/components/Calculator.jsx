import React, {useContext, useEffect, useRef} from 'react';
import Display from "./Display";
import Keyboard from "./Keyboard";
import {NumberContext} from "./NumberProvider";


const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const eventListener = (event) => savedHandler.current(event);
        element.addEventListener(eventName, eventListener);
        return () => {
          element.removeEventListener(eventName, eventListener);
        }
    }, [eventName, element]);
};
const Calculator = () => {
    const { setDisplayValue,
            setOperationType,
            deleteSymbol,
            solveProblem,
            clearDisplay
    } = useContext(NumberContext)
    const keyPressHandler = ({key}) => {
        const digits = '0123456789.';
        const operations = '+-*/^';

        if (digits.includes(key))
            setDisplayValue(key);
        if (operations.includes(key))
            setOperationType(key);

        switch (key) {
            case 'Backspace':
                deleteSymbol();
                break;
            case 'Enter':
                solveProblem();
                break;
            case 'Escape':
                clearDisplay();
                break;
            default:
                break;
        }
        console.log(key)
    }

    useEventListener('keydown', keyPressHandler)
    return (
        <div className="content">
            <div className="container">
                <Display/>
                <Keyboard/>
            </div>
        </div>
    );
};

export default Calculator;