import { useState } from "react";

const Counter = () => {

    const [count, setCounter] = useState(1);
    const [historyArr, setHistory] = useState([]);


    const Increment = () => {
        setHistory((historyArr) => [...historyArr, count])
        setCounter((count) => count + 1)
    }
    const Decrement = () => {
        setHistory((historyArr) => [...historyArr, count])
        setCounter((count) => count - 1);
    }


    return (
        <>
            <h1>Count:-{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <br />
            <p>State History:-{historyArr}</p>
        </>
    )
}

export default Counter;