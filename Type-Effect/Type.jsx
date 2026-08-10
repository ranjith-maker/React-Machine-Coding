import { useEffect, useState } from "react"


export default function Type({text, delay}){

const [displayText, setDisplayText] = useState(text)




useEffect(()=>{


let index = 0

const interval = setInterval(() => {
    
setDisplayText(text.slice(0, index+1))
index++

if(index === text.length){
    clearInterval(interval)
}

}, delay);



return()=>{
    clearInterval(interval)
}



},[text,delay])




return (
<>


<h1>
    {displayText}
    <span> |    </span>
</h1>



</>

)

}

// can your code go back and front like cyclic loop of type effect?






