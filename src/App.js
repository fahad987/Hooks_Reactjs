// import React, { useState } from 'react';
// import './App.css'

// const App = () => {

//   const state = useState();
// const  [count,setCount]=useState(0)

// const IncNum = () => {
//   setCount(count + 1)
// }

//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={IncNum}> Click Me </button>
//     </div>
//   )
// }

// export default App;

import React, {useState} from 'react'
import './App.css'

const App = () => {
    
    let newTime = new Date().toLocaleTimeString();
    const [cTime, setTime] = useState(newTime)

const UpdateTime = () => {
newTime = new Date().toLocaleTimeString();
setTime(newTime)
}

    return(
<div>
<h1> {cTime}</h1>
<button onClick={UpdateTime}> get time</button>
</div>
    )
}
export default App;