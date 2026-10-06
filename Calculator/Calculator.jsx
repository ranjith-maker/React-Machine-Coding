import React, { useState } from 'react'
import './calculator.css'


const btns = ['7', '8','9', '*',
              '4','5','6','+',
              '1','2','3','-',
              '0','/','=', '.'
             ]

export default function Calculator() {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operator, setOperator] = useState('')
    const [display, setDisplay] = useState('')


function handleChange(value) {
    

if(!isNaN(value) || value === '.' ){
    appendValues(value)
}else if( value ===  '='){
    calculateIt()
}else{
    chooseOperator(value)
}
}


function appendValues(number) {
//This determines which number you're currently working with.
    let currentNumber = operator === '' ? num1 : num2 

    if(number === '.' && currentNumber.includes('.')) return

if(operator === '' ){
    setNum1(prev => prev + number )
    setDisplay(prev => prev  + number)
}else{
    setNum2(prev =>  prev + number)
    setDisplay(prev =>  prev + number)
}

}

function chooseOperator(op) {
    
    if(num1 === '')return 
    
    setOperator(op)
    setDisplay(num1 + op)
}


function calculateIt() {
    if(num1 === '' || num2 === '' ) return

    let number1 = Number(num1)
    let number2 = Number(num2)

    let result = ''

switch(operator){
    case '+' :
    result = number1 + number2    
    break;

    case '-':
    result = number1 - number2
    break;
    
    case '*':
    result = number1 * number2
    break;
    
    case '/':
    if(number2 === 0){
        result = 'Error'
    }else{
        result = number1 / number2
    }
    break;
    default: return;

}

setDisplay(result.toString())
setNum1(result.toString())
setNum2('')
setOperator('')

}



function handleClear() {
    setDisplay('')
    setNum1('')
    setNum2('')
    setOperator('')
}



  return (
<>   
         <h1 style={{ marginBottom : '30px' }} > My React Calculator </h1> 
    <div className='container' >
     
        <h3 className='screen' > {display} </h3>

        <div className='button-container' >
            {btns.map((value, index)=>(
               <button
               key={index}
               className='buttons'
               onClick={()=>handleChange(value)}
 
               > {value} </button>
            ))}

        </div>
        <button className='clear' 
        onClick={handleClear}
        > Clear </button>


    </div>
 </>
)
}



