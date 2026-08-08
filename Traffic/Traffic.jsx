import React, { useState } from 'react'

import './traffic.css'




export default function Traffic({color , isActive}) {


    console.log(color, isActive);
 
  return (

    <div className='signal'  style={{ backgroundColor : `${isActive ? color : 'gray' }`  } } >
       
    </div>
  )
}


/**
as the state changes by interval , react rerenders it, in that rendering setActive(1) is 1 now thats why 

isActive{1===1} so true rest 2 is false now orange shows
Yes, you've got the core idea. Just one small correction at the end.
setActive(1) updates active to 1, React re-renders, 1 === 1 is true, so orange shows. The other two comparisons are false, so green and red become gray.
Initially:

active = 0

React renders:

green  -> isActive = (0 === 0) -> true
orange -> isActive = (0 === 1) -> false
red    -> isActive = (0 === 2) -> false

So you see:

🟢 green
⚪ gray
⚪ gray
React re-renders the parent component.

Now the comparisons are:

green  -> isActive = (1 === 0) -> false
orange -> isActive = (1 === 1) -> true
red    -> isActive = (1 === 2) -> false

So you see:

⚪ gray
🟠 orange
⚪ gray
 * 
 */






