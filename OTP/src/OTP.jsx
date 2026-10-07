import React, { useEffect, useRef, useState } from 'react'

export default function OTP() {

    const otpDigits = 5;

const [inp , setInp] = useState( new Array(otpDigits).fill('') )
                                                    
const refArr = useRef([])

useEffect(()=>{
  refArr.current[0]?.focus()
},[])




function handleChange(index, value) {
    
const newArr = [...inp]

newArr[index] = value.slice(-1)
setInp(newArr)

if(value &&  index  < otpDigits - 1 ){
    refArr.current[index + 1]?.focus()
}

}


function handleKeyDown(index , ev ) {
    
    if(ev.key === 'Backspace'){
     
         ev.preventDefault()
         
    const newArr = [...inp]

    //current box has value, press backspace , empty it, stay there 
    if(inp[index]){
        newArr[index] = ''
        setInp(newArr)
//curr box no value press backspace , empty prev left box go there

    }else if(!inp[index] && index  > 0){
        newArr[index - 1] = ''
        setInp(newArr)
        refArr.current[index - 1]?.focus()
    }
return
    }

if( ev.key === 'ArrowRight' && index < otpDigits -1 ){
    refArr.current[index + 1]?.focus()
 
}
if(ev.key === 'ArrowLeft' && index > 0 ){
    refArr.current[index -1]?.focus()
    
}

}


function handlePaste(ev) {
  ev.preventDefault()
    
const pastedData = ev.clipboardData.
getData('text').slice(0, otpDigits)

if(isNaN(pastedData)) return
const newArr = [...inp]

pastedData.split('').forEach((digit , index)=> {
    newArr[index] = digit
});
setInp(newArr)
// If OTP is complete → focus last box
// If OTP is incomplete → focus next empty box

const nextIndex = Math.min(pastedData.length , otpDigits -1)

refArr.current[nextIndex]?.focus()

}




 return (
   <>
<h1> OTP form it is </h1>

{
inp.map((box, index)=>(

     <input key={index}  type="text"   
     inputMode="numeric"  
     maxLength={1}
     value={box} 
     ref={(el)=> refArr.current[index] = el}

     onChange={(ev) => handleChange(index , ev.target.value)}
     onKeyDown={(ev) => handleKeyDown(index , ev)}
     onPaste={handlePaste}
     className='inp-box'
    
    />)
)

}   
  
   </>
  )
}

/**
 * only 1 no. per input handled as value.slice(-1)
 * you need to send both index and value so  handleChange(index , ev.target.value)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

