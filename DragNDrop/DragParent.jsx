import Drag from "./Drag";

import './drag.css'



export default function DragParent() {


const initialData = {

  todo: [
    "Learn React Hooks",
    "Practice JavaScript",
    "Build a Todo App",
    "Learn TypeScript",
    "Practice CSS Flexbox",
    "Learn CSS Grid",
    "Build a Portfolio",
    "Learn React Router",
    "Practice Git and GitHub",
    "Build a Weather App"
  ],

  inProgress: [
    "Build Kanban Board",
    "Create Portfolio Website",
    "Practice React Projects"
  ],

  completed: [
    "Learn HTML",
    "Learn CSS",
    "Learn JavaScript Basics"
  ]
};



return (

<>
<Drag initialState={initialData} />

</>

    )


}




