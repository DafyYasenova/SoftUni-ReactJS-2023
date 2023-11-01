import { useState } from 'react';


export default function Timer(props){

    const [time, setTime] = useState(props.startTime);
    // const hookResult = useState();
    // const stateValue = hookResult[0];
    // const setState = hookResult[1];
      

//SetTimeout use only this demo! 
    setTimeout(() =>{
        setTime(time + 1)
        }, 1000);

    return (
      <div>

        <h3>Timer</h3>

        <p>{time}</p>
      </div>  
    )
}