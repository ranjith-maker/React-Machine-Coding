



export default function ProgressBar({value} ) {
    

    return (

<>

<h3> The Progress Bar </h3>
<div className="outer" >
    <div className="inner" 
    // style={{ width : `${value}%` }}
    style={{ transform: `scaleX(${value / 100})`   ,transformOrigin : 'left' }}
    >  </div>0
<span> {value.toFixed()} %  </span>

</div>




</>


    )



}