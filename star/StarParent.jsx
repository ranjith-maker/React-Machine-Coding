import React, { useState } from 'react'
import Stars from './Stars'
import HalfStars from './HalfStars'
import StarRating from './Stars'

export default function StarParent() {

const [rating, setRating] = useState(0)


function handleRatings(userClickedrating) {
  
setRating( rating === userClickedrating ? 0 : userClickedrating  )

}



  return (

  //  <Stars starCount={10}  />
  <StarRating  count={10}  value={rating} onChange={handleRatings}       />  
  // <HalfStars starCount={10}    />

  )

}
