import { useState } from "react"
import './styles/Star.css'


// export default function Stars({starCount = 5  }  ) {

//     const [starValue, setStarValue  ] = useState(0)
//     const [hoverValue , setHoverValue] = useState(0)
//     console.log(starValue)
//     console.log(hoverValue);
    
// const activeStar = hoverValue > 0 ? hoverValue : starValue;
// return(
//     <>
//         <h3>   You can leave your ratings here</h3>
//     <div>   
//     { Array.from({length : starCount}).fill(0).map((_,index)=>(
//         <span key={index}
//         onClick={()=>setStarValue(index + 1)  } 
//         onMouseEnter={()=> setHoverValue(index + 1) }
//         onMouseLeave={()=> setHoverValue(0) }
//         className={activeStar > index ? 'gold' : '' }
//         > 
//             &#9733;
//         </span>
        
//     )) }

//         <h4>Your rating is {starValue} </h4>


//       </div>
//     </>
// )

// }
        // className={ hoverValue === 0 && starValue > index ? 'gold': '' ||
        //             hoverValue > index ? 'gold' : '' }


export default function StarRating({ count = 5, value, onChange}) {
    
const [hoverValue, setHoverValue] = useState(0)


const activeStar = hoverValue || value 

return(
<>
<div>
{Array.from({ length : count }).fill('').map((_,index)=>(

<span key={index} 
onClick={()=> onChange(index + 1) }
onMouseEnter={()=> setHoverValue(index + 1) }
onMouseLeave={()=> setHoverValue(0) }
className={ activeStar > index ?'gold' : ''    }
>
     &#9733;
</span>
))   }

<h3> The customer rating is {value} </h3>
 </div>

</>


)}




