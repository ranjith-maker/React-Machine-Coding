import { useState } from 'react'
import './MultiToast.css'


export default function MultiToast({ handleClose , data}) {
    
const {id, message, type} = data


return(
<>
   <div className={`toast-msg  ${type}  `} >
 <h1>  {message} </h1>
<span onClick={()=>handleClose(id)  }
>  x </span>
</div>



</>
)

}



