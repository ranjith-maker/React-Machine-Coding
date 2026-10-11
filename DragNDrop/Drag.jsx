import React, { useState } from 'react'
import './drag.css'


/*
export default function Drag({initialState}) {

const [data, setData] = useState(initialState)

  // Store the item being dragged

function handleDragStart(ev, item, sourceColumn) {
    ev.currentTarget.style.opacity = "0.5";

    console.log(ev);

    ev.dataTransfer.setData("text/plain", 
        JSON.stringify({ item, sourceColumn, }) );

    ev.dataTransfer.effectAllowed = "move";
  }

  function handleDragEnd(ev) {
    ev.currentTarget.style.opacity = "1";
  }

  // Allow dropping
  function handleDragOver(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }


 
  // Handle the actual drop
  function handleDrop(ev, destinationColumn) {
    ev.preventDefault();

    const dragData = JSON.parse(
      ev.dataTransfer.getData("text/plain")
    );

    const { item, sourceColumn } = dragData;

    // Don't do anything if dropped in the same column
    if (sourceColumn === destinationColumn) {
      return;
    }
 
    setData((prevData) => {
      // Remove from old column
      const updatedSource = prevData[sourceColumn].filter(
        (currentItem) => currentItem !== item
      );

      // Add to new column
      const updatedDestination = [
        ...prevData[destinationColumn],
        item,
      ];

      return {
        ...prevData,
        [sourceColumn]: updatedSource,
        [destinationColumn]: updatedDestination,
      };
    });
  }

return (
  <>
    <div className='container'>
      {Object.keys(data).map((heading, index) => (
        <div key={index} className='inner-cont'
          onDragOver={handleDragOver}
          onDrop={(ev) => handleDrop(ev, heading)}
  >
          <h2>{heading}</h2>

          {data[heading].map((list, index) => (
            <div
              key={index}
              draggable
              onDragStart={(ev) =>
                handleDragStart(ev, list, heading)
              }
              onDragEnd={handleDragEnd}
              className='each-list'
            >
              {list}
            </div>
          ))}
        </div>
      ))}
    </div>
  </>
)
}

*/


export default function Drag() {

const  arr = [ 'Learn JS and React', 'Learn Next JS','','','','',]

    
const [box , setBox] = useState(arr)


function handleDragOver(ev) {
    ev.preventDefault()
    
}

function handleDragStart(ev, id) {
    
ev.dataTransfer.setData('index', id)
ev.currentTarget.style.opacity = '0.5'


}

function handleDrop(ev, destinationBox) {
    
    ev.preventDefault()
    ev.currentTarget.style.opacity = '1'


    const sourceBox = Number(ev.dataTransfer.getData('index' ) )
 

   setBox((prev)=>{
const updatedBox = [...prev];

updatedBox[destinationBox] = updatedBox[sourceBox]
updatedBox[sourceBox] = ''

  return updatedBox

   })
}



  return (

    <div className='boxes-wrap' >
   {box.map((item, id)=>(
    <div key={id}
    onDrop={(ev)=> handleDrop(ev, id) }
    onDragOver={handleDragOver}
   
     className='boxes-inner' >
       {item && (
        <div       
        onDragStart={(ev)=> handleDragStart(ev, id, ) }
       className='word'
       draggable
        >
            {item}
        </div>
       ) 
       
       
       }
    </div>
   ))} 
        
  
    </div>

  )
}
