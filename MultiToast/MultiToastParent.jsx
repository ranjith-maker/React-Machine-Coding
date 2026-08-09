import { useState } from "react";
import MultiToast from "./MultiToast";

import './MultiToast.css'


export default function MultiToastParent() {


const [showToast, setShowToast] = useState([])

function handleClose(id) {
    setShowToast((prev)=> prev.filter((tost)=> tost.id !== id ) )
}


function handleAdd(message, type) {
const id = new Date().getTime()

const newToast = setShowToast((prev)=>(
 [...prev, { id, message, type }]

))


setTimeout(() => {
  handleClose(id)
}, 5000);


}



return (
<>


<div className="toast-container" > 

 {
showToast.map((item)=>{
    return <MultiToast  
    key={item.id}  
    data={item}
    handleClose={handleClose}  /> 
 
})


 }
</div>


<div className='toast-btns' >

<button onClick={()=>handleAdd('Successfully' , 'success' ) } > Success Toast </button>
<button onClick={()=> handleAdd('Info', 'info') }  > Info Toast </button>
<button  onClick={()=> handleAdd('Warning' , 'warning') }  > Warning Toast </button>
<button  onClick={()=> handleAdd('Error', 'error') }  > Error Toast </button>


</div>



</>


)



}















