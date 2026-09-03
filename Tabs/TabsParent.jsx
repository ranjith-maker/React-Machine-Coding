import React from 'react'
import Tabs from './Tabs'
import './tabs.css'

export default function TabsParent() {

const data = [

{ id: 0,
  label : 'Profile',
  content : 'Welcome to Profile'  

},
{ id:  1,
  label : 'Settings',
  content : 'Welcome to Settings'  
},

{ id: 2,
  label : 'Dashboard',
  content : 'Welcome to Dashboard '  
}
,
{ id:3  ,
  label : 'Invoice',
  content : 'Welcome to Invoice  '  
}

]

  return (
 <>
 <Tabs data={data}  />
 
 </>
  )
}





