import React, {useState} from 'react';
export const NumberContext = React.createContext();

const NumberProvider = props => {
    const [number, setNumber] = useState('');
    const [storedNumber, setStoredNumber] = useState('');
    const [operation, setOperation] = useState('');

    const SetDisplayValue = (num) => {
        if (!number.includes('.') || num !== '.')
        {
            setNumber(`${(number + num).replace(/^[0-9]0+/, '')}`);
        }
    }
    const SetStoredValue = () => {
        setStoredNumber(number);
        setNumber('');
    }
    const SetOperationType = (type) => {
        if (type === '√' && number.indexOf("√") === -1){
            setOperation(type)
            setNumber(number + type)
        }
        if (number)
        {
            setOperation(type);
            SetStoredValue();
        }
        if (storedNumber)
        {
            setOperation(type);
        }
    }
    const ClearDisplay = () => {
        setNumber('');
        setOperation('');
        setStoredNumber('');
    }
    const DeleteSymbol = () => {
        if (number)
        {
            setNumber(number.slice(0, number.length - 1));
        }
    }
    const ToggleNegative = () => {
        if (number)
        {
            setNumber(`${parseInt(number) * (-1)}`)
        }
    }
    const SolveProblem = () => {
        switch (operation){
            case '+':
                setNumber(
                  `${(parseFloat(storedNumber) + parseFloat(number))}`
                );
                break;
            case '-':
                setNumber(
                    `${(parseFloat(storedNumber) - parseFloat(number))}`
                );
                break;
            case 'x':
                setNumber(
                    `${(parseFloat(storedNumber) * parseFloat(number))}`
                );
                break;
            case '/':
                if (number === '0'){
                    setNumber("Ошибка!");
                }
                else{
                    setNumber(
                        `${(parseFloat(storedNumber) / parseFloat(number))}`
                    );
                }
                break;
            case '√':
                setNumber(
                    `${Math.sqrt(parseFloat(number.slice(1))).toFixed(2)}`
                );
                break;
            case '^':
                setNumber(
                    `${(parseFloat(storedNumber) ** parseFloat(number))}`
                );
                break;
            default:
                break;
        }
    }

    return (
        <NumberContext.Provider value={{
            number,
            operation,
            setNumber,
            setOperation,
            storedNumber,
            setStoredNumber,
            SetDisplayValue,
            SetStoredValue,
            ClearDisplay,
            DeleteSymbol,
            ToggleNegative,
            SetOperationType,
            SolveProblem
        }}>
            {props.children}
        </NumberContext.Provider>
    );
};

export default NumberProvider;