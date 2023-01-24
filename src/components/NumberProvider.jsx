import React, {useState, createContext} from 'react';
export const NumberContext = createContext({
    number: '',
    operation: '',
    storedNumber: '',
    setStoredNumber: () => {},
    setNumber: () => {},
    setOperation: () => {},
    setDisplayValue: () => {},
    setStoredValue: () => {},
    clearDisplay: () => {},
    deleteSymbol: () => {},
    toggleNegative: () => {},
    setOperationType: () => {},
    solveProblem: () => {}
});

const NumberProvider = ({ children }) => {
    const [number, setNumber] = useState('');
    const [storedNumber, setStoredNumber] = useState('');
    const [operation, setOperation] = useState('');

    const setDisplayValue = (num) => {
        if (!number.includes('.') || num !== '.')
            setNumber(`${(number + num).replace(/^[0-9]0+/, '')}`);
    }
    const setStoredValue = () => {
        setStoredNumber(number);
        setNumber('');
    }
    const setOperationType = (type) => {
        if (type === '√' && !number.includes('√')){
            setOperation(type)
            setNumber(number + type)
        }
        if (number)
        {
            setOperation(type);
            setStoredValue();
        }
        if (storedNumber)
        {
            setOperation(type);
        }
    }
    const clearDisplay = () => {
        setNumber('');
        setOperation('');
        setStoredNumber('');
    }
    const deleteSymbol = () => {
        if (number)
        {
            setNumber(number.slice(0, number.length - 1));
        }
    }
    const toggleNegative = () => {
        if (number)
            setNumber(`${parseInt(number) * (-1)}`)
    }
    const solveProblem = () => {
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
            case '*':
                setNumber(
                    `${(parseFloat(storedNumber) * parseFloat(number))}`
                );
                break;
            case '/':
                if (!parseInt(number))
                    setNumber("Ошибка!");
                else
                    setNumber(
                        `${(parseFloat(storedNumber) / parseFloat(number))}`
                    );
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
            setDisplayValue,
            setStoredValue,
            clearDisplay,
            deleteSymbol,
            toggleNegative,
            setOperationType,
            solveProblem
        }}>
            {children}
        </NumberContext.Provider>
    );
};

export default NumberProvider;