import { useState } from "react"



export default function Tabs({data}) {

const [currentTab,  setCurrentTab ] = useState(0)



    return (
<>
<div className="tab-container" >
<div className="tab-label" >     
{data.map((item)=>(
    <button
    key={item.id}
    onClick={()=> setCurrentTab(item.id  ) }
    className={`${currentTab === item.id  ? 'active' : '' }`}
    > {item.label} </button> 
))}
  </div>

<p> { data[currentTab].content } </p>


</div>



</>


    )



}


















