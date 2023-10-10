import "./calculator.css"

const Calculator = () => {
  return(
    <div><h1>Calculator</h1>
    <div className="calculatorGrid">
        <div className="output">
          <div className="previousOperand"></div>
          <div className="currentOperand"></div>
        </div>
        <button className="spanTwo">AC</button>
        <button>DEL</button>
        <button>÷</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className="spanTwo">=</button>
      </div>
      </div>
  )
}

 
  
  export default Calculator;