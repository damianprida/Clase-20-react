import {  useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0)
    const onIncrement = () => {
        setCount(count + 1)
    }
    const onDecrement = () => {
        setCount(count - 1)
    }
return (
        <div className="counter">
            <button onClick={onIncrement}>Sumar</button>
            <div>
                <span>{count}</span>
            </div>
            <button onClick={onDecrement}>Restar</button>
            <hr />
        </div>
    )
}

export default Counter