import React, { useState } from 'react'

const Calculator = props => {
    //Declare State variables
    let [answer, setAnswer] = useState('0')
    let [currentNum, setCurrentNum] = useState('')
    let [error, setError] = useState('')
    let [num1, setNum1]= useState('')
    let [operator, setOperator] = useState('')

    //Handle a umber gettitng pressed
    const numPress = e => {
        console.log(e.target.value, 'was pressed')
        if (e.target.value !== '0' || currentNum !== ''){
            setCurrentNum(currentNum + e.target.value)
        }
    }

    const dotPress = () => {
        if (!currentNum) {
            setCurrentNum('0.')
        }
        else if (currentNum.indexOf('.') === -1) { //indexOf returns '-1' if it doesnt find the value youre looking for
            setCurrentNum(currentNum + '.')         //otherwise it returns the number of the index from the string where value was found
        }
    }

    const plusMinus = () => {
        if (currentNum) {
            setCurrentNum(currentNum * -1)
        }
    }

    //Handle operators
    const operatorPress = e => {
        console.log(e.target.value, 'was pressed')
        if (operator) {
            setError('Operator has already been set. Press clear to reset.')
        }
        else if (!currentNum) {
            setError('A number must be pressed first.')
        }
        else {
            setNum1(currentNum)
            setOperator(e.target.value)
            setError('')
            setCurrentNum('')
        }
    }

    //Clear the state
    const clear = () => {
        setAnswer('0')
        setCurrentNum('')
        setError('')
        setNum1('')
        setOperator('')
    }

    //Calculate the expression
    const calculate = ()  => {
        console.log('Attempting', num1, operator, currentNum)
        if (!operator || !num1) {
            setError('Please enter a valid expression.')
        }
        else if (!currentNum) {
            setError('Please enter a second number.')
        }
        else {
            let tempAnswer = ''

            if (operator === '+') {
                tempAnswer = Number(num1) + Number(currentNum)
            }
            else if (operator === '-') {
                tempAnswer = Number(num1) - Number(currentNum)
            }
            else if (operator === 'x') {
                tempAnswer = Number(num1) * Number(currentNum)
            }
            else if (operator === '/') {
                tempAnswer = Number(num1) / Number(currentNum)
            }
            else if (operator === '%') {
                tempAnswer = Number(num1) % Number(currentNum)
            }
            setAnswer(tempAnswer.toString().slice(0, 8)) //slice params = what index to start slicing at, and digits to allow
            setError('')
            setCurrentNum(tempAnswer.toString().slice(0, 8)) //allows for multiple calcs - stores first eval as currentNum to use in next eval
            setOperator('')
            setNum1('')
        }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {num1 || currentNum} {operator} {operator ? currentNum: ''}</p>
                <div className="answer-box">{answer}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={plusMinus}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={operatorPress} value="%">%</button>
                    <button className="calc-button calc-button-op" onClick={operatorPress} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numPress} value="7">7</button>
                    <button className="calc-button" onClick={numPress} value="8">8</button>
                    <button className="calc-button" onClick={numPress} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={operatorPress} value="x">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numPress} value="4">4</button>
                    <button className="calc-button" onClick={numPress} value="5">5</button>
                    <button className="calc-button" onClick={numPress} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={operatorPress} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numPress} value="1">1</button>
                    <button className="calc-button" onClick={numPress} value="2">2</button>
                    <button className="calc-button" onClick={numPress} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={operatorPress} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={numPress} value="0">0</button>
                    <button className="calc-button" onClick={dotPress}>.</button>
                    <button className="calc-button calc-button-op" onClick={calculate} value="=">=</button>
                </div>
            </div>
            <p className="error">{error}</p>
        </div>
    )
}

export default Calculator