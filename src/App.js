import React, { useState } from 'react';
import './App.css';

//Import Custom Components
import Display from './Calculator/Display'
import Header from './Header'
import Keyboard from './Calculator/Keyboard'


function App() {

  let [nums, tempNum, setTempNum, setNums, setTotal, total] = useState({
    num1: '',
    num2: '',
    operator: '',
    total: 0,
    tempNum: 0
  })

  const clear = () => {
    setTotal(0)
    setNums('')
    setOperator('')
    resetTemp()
  }

  //Set Numbers
  const setNum = (e, operator, tempNum, num1, num2) => {
    if (operator === '') {
      return tempNum + e.target.value //concat numbers until operator chosen
    } else if (operator !== '') {
      num1 = tempNum  //once operator chosen, tempNum becomes num1.
      resetTemp()
    } else if (operator !=='' && num1 !== '' ) {
      num2 = tempNum + e.target.value //once operator chosen, tempNum becomes next choice, which concats until = pressed
    } 
  }

  //Set Operator
  const setOperator = (e, operator) => {
    if (operator === '') {
      operator = e.target.value
    }
  }  //how to make sure only operators can be chosen?

  //Get Total
    //if num1, operator, and num2 chosen - total the numbers with appropriate operator
  const getTotal = (e, num1, num2, operator) => {
    if (num1 !== '' && num2 !== '' && operator !== '') {
      
    }
  }
  //Reset tempNum to 0
  const resetTemp = () => {
    setTempNum =  0
  }




  return (
    <div className="App">
      <Header />
      <Display props={total} />
      <Keyboard clear={clear} />
    </div>
  );
}

export default App;
