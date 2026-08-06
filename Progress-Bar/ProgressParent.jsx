import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import './ProgressBar.css'


export default function ProgressParent() {

const [progress , setProgress] = useState(0)
const [loading, setLoading] = useState(false)
 
function handleProgress() {
  
let current = 0

let id = setInterval(() => {
  setLoading(true)
  current += 5 
  setProgress(current)

  if(current >= 100){
  clearInterval(id)
  setLoading(false)
}

}, 200);

}


  return (
<>
<ProgressBar value={progress}   />

<button disabled={loading}
onClick={handleProgress}
> Downlaod Now </button>

<p> { loading ? 'Downloading....' : 'Downloaded Successfully ' }  </p>

</>
  )
}







