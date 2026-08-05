import { useState } from 'react'
import  './Toast.css'


export default function Toast({showToast}) {


return(

<>
<h2>Click below to see the Toast  </h2>
<div className='wrap' >          
{showToast.length > 0 &&  showToast.map((item)=>(

<div key={item.id} className='toast-msg' >
{item.message}
</div>

))}
</div>

</>

)

}






