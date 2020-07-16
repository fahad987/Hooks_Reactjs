import React, {useState} from 'react';
import './App.css';


const App = () => {

let time = new Date().toLocaleTimeString();

const [ctime, cUpdateTime] = useState(time);

const updateTime = () => {
time = new Date().toLocaleTimeString();
cUpdateTime(time);
}
setInterval(updateTime, 1000)
  return(
    <h1>{ctime}</h1>
  )
}

export default App;