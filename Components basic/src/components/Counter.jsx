import { useState } from "react"

export default function Counter(props){

    const [count, setCount]=useState(0);

    const onIncrementClick = () => {
        // setCount(count +1);
        setCount(oldValue => oldValue + 1)
    }

    const onDecrementClick = () => {
        setCount(oldValue => oldValue - 1)
        // setCount(count -1);
    }

    const onClearClick = () => {
        setCount(0)
    }
    return(
<div>
    <h2>Counter</h2>

    <p>Count: {count}</p>
    <button onClick={onDecrementClick}>-</button>
    <button onClick={onClearClick}>Clear</button>
    <button onClick={onIncrementClick}>+</button>
    {/* <button onClick={() => setCount(count - 1)}>-</button> */}
</div>
    )
}