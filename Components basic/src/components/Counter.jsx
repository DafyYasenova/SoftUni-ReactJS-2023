import { useState } from "react"

export default function Counter(props) {

    const [count, setCount] = useState(0);

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

    // let warning = null;
    // if (count < 0) {
    //     warning = <h2>Invalid count!</h2>;
    // }

    let message = null;

    switch (count) {
        case 1: message = 'First step'
            break;
        case 2: message = 'Second step';
            break;
        case 3: message = 'Third step';
            break;
        case 4: message = 'Super step';
            break;
        case 5: message = 'Hard step';
            break;
        case 6: message = 'Amazing step';
            break;
            default: message = 'Yuppp!'
    }

    return (
        <div>

            <h2>Counter</h2>

            {/* {warning} */}

            {count < 0 ? <h2>Invalid count!</h2> : null}

            {count == 0 && <p>Please start incrementing</p>}


            <h3>{message}</h3>
            <p>Count: {count}</p>

            <button onClick={onDecrementClick}>-</button>
            <button onClick={onClearClick}>Clear</button>
            <button onClick={onIncrementClick}>+</button>
            {/* <button onClick={() => setCount(count - 1)}>-</button> */}
        </div>
    )
}