import React, { useState } from 'react'
import { useEffect } from 'react'
import Traffic from './Traffic'
import './traffic.css'


//map the array those values itself act as bgcolor
const lights =[ 'green' , 'orange'  ,'red',  ]



export default function TrafficParent() {

const [active, setActive ] = useState(0)


useEffect(()=>{
   const id = setInterval(()=>{
      setActive((prev)=> (prev+1) % lights.length  )
   },2000)
return () => clearInterval(id) 

},[])



    return (
<>

{lights.map((color, index)=>(
    <Traffic 
    key={index}
    color={color}  
    isActive={ active === index}
    />
) )  }


</>
    )


}







