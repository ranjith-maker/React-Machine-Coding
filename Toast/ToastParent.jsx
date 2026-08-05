import { useState } from "react"
import Toast from "./Toast"
import  './Toast.css'


export default function ToastParent(){

const [showToast, setShowToast] = useState([])


function handleToast() {
    
    const id = Date.now()

setShowToast((prev)=>(
    [...prev, 
        { id, message: 'Saved Sucessfully' }
    ]
))


setTimeout(() => {
    setShowToast((prev)=>(
        prev.filter((t)=> t.id !== id)
    ))
}, 2000);


}


return(
<>

<Toast    showToast={showToast}    />

<button  onClick={handleToast }>
Save here    
</button>

</>

)

}









